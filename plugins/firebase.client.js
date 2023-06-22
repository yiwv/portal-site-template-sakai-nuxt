// 参考: https://medium.com/codex/using-firebase-in-nuxt3-the-right-way-bebbb6d8c4dd

import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

export default defineNuxtPlugin(nuxtApp => {

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getDatabase(app)
  const storage = getStorage(app)

  return {
    provide: {
      auth,
      db,
      storage,
    }
  }
})