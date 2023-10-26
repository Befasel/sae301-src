<script setup>
  import { ref } from 'vue'
  import PocketBase from 'pocketbase'

  const pb = new PocketBase("http://127.0.0.1:8090");

  const username = ref('')
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')

  const registerUser = async () => {
    try {
      const result = await pb.collection('users').create({
        Username: username.value,
        Name: name.value,
        Email: email.value,
        Password: password.value
      })
      console.log("Création réussie : ", result)
    } catch (error) {
      console.log("Erreur lors de la création : ", error)
      errorMessage.value = "Une erreur s'est produite lors de l'inscription. Veuillez réessayer. Si l'erreur persiste, veuillez utiliser 'TaVue' en Nom d'utilisateur et 'tavuesae' en mot de passe."
    }
  }
</script>

<template>
  <div style="display: flex; justify-content: center; align-items: center; min-height: 80vh; flex-direction: column; font-family: 'Inter', sans-serif;">

    <h1 style="font-size: 2em; font-weight: 800; margin-bottom: 20px;">Inscription</h1>
    
    <p v-if="errorMessage" style="color: red; margin-bottom: 20px;">{{ errorMessage }}</p>

    <form @submit.prevent="registerUser" style="display: flex; flex-direction: column; align-items: flex-start; margin: 0;">
      <label for="username" style="margin-bottom: 10px;">Nom d'utilisateur:</label>
      <input id="username" type="text" v-model="username" placeholder="Nom d'utilisateur" style="margin-bottom: 20px; width: 250px;" />

      <label for="name" style="margin-bottom: 10px;">Nom:</label>
      <input id="name" type="text" v-model="name" placeholder="Nom" style="margin-bottom: 20px; width: 250px;" />

      <label for="email" style="margin-bottom: 10px;">Courrier électronique:</label>
      <input id="email" type="email" v-model="email" placeholder="Courrier électronique" style="margin-bottom: 20px; width: 250px;" />

      <label for="password" style="margin-bottom: 10px;">Mot de passe:</label>
      <input id="password" type="password" v-model="password" placeholder="Mot de passe" style="margin-bottom: 20px; width: 250px;" />

      <button type="submit" style="padding: 10px 20px; border: none; background-color: #1d1e56; color: #fff; cursor: pointer; font-size: 18px;">S'inscrire</button>
    </form>

  </div>
</template>
