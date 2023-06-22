
import {
  ref as dbRef,
  onValue,
  child as dbChild,
  get as dbGet,
  set as dbSet,
  push as dbPush,
  query,
  orderByChild,
  equalTo
} from "firebase/database";

import { signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";

import { ref as stgRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export async function uploadFileToStorage(files) {
    const { $storage } = useNuxtApp();

    let file = files[0];

    // Create a storage reference from our storage service
    const storageRef = stgRef($storage, 'uploads/' + file.name);

    // Create the file metadata
    let metadata = {
        contentType: file.type,
    };

    // Upload file and metadata to the object
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    return new Promise((resolve, reject) => {
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                // Handle unsuccessful uploads
                reject(error);
            },
            () => {
                // Handle successful uploads on complete
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                resolve(downloadURL);
                });
            }
        );
    });
}


export function fetchCurrentUserRef (currentUserRef) {
    const { $auth, $db } = useNuxtApp();

    onAuthStateChanged($auth, async (userCred) => {
        // console.log({userCred})
        if (userCred) {
            const { uid } = userCred;

            // Get a reference to the specific user's data
            const userDbRef = dbRef($db, 'users/' + uid);
            dbGet(userDbRef)
                .then((snapshot) => {
                    // console.log({snapshot})
                    if (snapshot.exists()) {
                        currentUserRef.value = snapshot.val();
                    } else {
                        currentUserRef.value = null;
                    }
                })
                .catch((error) => {
                    console.log(error)
                    currentUserRef.value = null;
                });
        } else {
            console.log('no user');
            currentUserRef.value = null;
        }
    });
}


export function userSignOut () {
    const { $auth } = useNuxtApp();
    return signOut($auth);
}



export function signUpUser (data) {
    const { $auth, $db } = useNuxtApp();

    return createUserWithEmailAndPassword($auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user

            if (user) {
                const uid = user.uid

                const userInitialData = {
                    email: data.email,
                    uid: uid,
                    name: data.name,
                    type: data.type,
                }

                dbSet(dbRef($db, `users/${uid}`), userInitialData)
            }
        })
};


export function pushItem (itemData, files) {
    const { $auth, $db } = useNuxtApp();
    dbPush(dbRef($db, 'items'), itemData);
}


export function pushReview (reviewData) {
    const { $auth, $db } = useNuxtApp();
    dbPush(dbRef($db, 'reviews'), reviewData);
}


export async function getItems (options = {}) {
    const { $auth, $db } = useNuxtApp();

    const { ownerUid } = options;

    const itemsRef = dbRef($db, 'items');

    let q;
    if (ownerUid) {
        q = query(itemsRef, orderByChild('ownerUid'), equalTo(ownerUid));
    } else {
        q = query(itemsRef);
    }

    let items = [];


    await dbGet(q)
        .then((snapshot) => {
            console.log({snapshot})
            if (snapshot.exists()) {
                snapshot.forEach((childSnapshot) => {
                    // key will be the 'age' of the user
                    const key = childSnapshot.key;

                    // data will be the actual user data
                    const data = childSnapshot.val();

                    items.push(data);
                });
            } else {
                console.log("No item available");
            }
        })
        .catch((error) => {
            console.error(error);
        });

    console.log({items})

    return items;
}


export function getReviews (itemId) {
    const { $auth, $db } = useNuxtApp();
    return [];

}