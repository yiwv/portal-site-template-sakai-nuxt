<script setup>
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { ref as dbRef, push as dbPush } from "firebase/database";
import { useToast } from 'primevue/usetoast';
import { signUpUser } from "@/composables/useFirebase";

const toast = useToast();

const userData = reactive({
  name: '',
  email: '',
  password: '',
  type: 'Consumer',
  // passwordReinput: '',
});

definePageMeta({
    layout: false
});

const { $auth, $db } = useNuxtApp()


const userTypeDropdownValues = ref([
    { name: 'Consumer' },
    { name: 'Owner' },
    { name: 'Admin' },
]);



const onClickSignUp = () => {
  signUpUser(userData)
    .then(() => {
      toast.add({ severity: 'info', summary: 'Success', detail: 'Sign up succeeded', life: 3000 })

      navigateTo('/portal/list');
    })
    .catch((error) => {
      // console.log(error)
      alert("Sign up failed")
    })
};

</script>

<template>
 <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <!-- <img :src="logoUrl" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0" /> -->
            <div style=" border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <!-- <img src="/demo/images/login/avatar.png" alt="Image" height="50" class="mb-3" /> -->
                        <!-- <div class="text-900 text-3xl font-medium mb-3">Welcome, Isabel!</div> -->
                        <div class="text-900 text-3xl font-medium mb-3">
                            Portal Site Template Sign Up
                        </div>
                        <!-- <span class="text-600 font-medium">Sign in to continue</span> -->
                    </div>

                    <div>
                        <label for="username1" class="block text-900 text-xl font-medium mb-2">User Name</label>
                        <InputText id="username1" v-model="userData.name" type="text" placeholder="User Name" class="w-full md:w-30rem mb-5" style="padding: 1rem" />

                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Email</label>
                        <InputText id="email1" v-model="userData.email" type="text" placeholder="Email address" class="w-full md:w-30rem mb-5" style="padding: 1rem" />

                        <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>
                        <Password id="password1" v-model="userData.password" placeholder="Password" :toggleMask="true" class="w-full mb-5" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>

                        <label class="block text-900 font-medium text-xl mb-2">User Type</label>
                        <Dropdown v-model="userData.type" :options="userTypeDropdownValues"
                          optionLabel="name"
                          optionValue="name"
                          placeholder="Select"  class="w-full md:w-30rem mb-5" />

                        <Button @click="onClickSignUp" label="Sign Up" class="w-full p-3 text-xl"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}
.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
