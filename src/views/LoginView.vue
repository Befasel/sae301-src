<script setup>
import { ref } from 'vue'

// Import de pocketbase
import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090')

const isConnected = ref(false)

// Éléments de connexion
const loginEmailOrId = ref('')
const loginPassword = ref('')

// Éléments d'inscription
const signupEmail = ref('')
const signupPassword = ref('')
const confirmPassword = ref('')

const errorMessage = ref('') // Message d'erreur global

const connect = async () => {
  // Votre code de connexion ici...
  // Assurez-vous de gérer les erreurs et de mettre à jour isConnected en conséquence.
}

const signup = async () => {
  if (signupPassword.value !== confirmPassword.value) {
    errorMessage.value = "Les mots de passe ne correspondent pas!"
    return
  }

  try {
    await pb.collection('users').create({
      email: signupEmail.value,
      password: signupPassword.value,
    })

    alert("Inscription réussie ! Vous pouvez maintenant vous connecter.")
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error.message)
    errorMessage.value = "Erreur lors de l'inscription."
  }
}
</script>

<template>
  <div class="container mt-5 d-flex justify-content-between">
    <!-- Connexion -->
    <div class="card w-50 mr-3">
      <div class="card-body">
        <h5 class="card-title">Connexion</h5>
        <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div> <!-- Affichage des erreurs -->
        <div class="form-group">
          <label for="loginEmailOrId">Mail ou identifiant :</label>
          <input v-model="loginEmailOrId" type="text" class="form-control" id="loginEmailOrId" placeholder="identifiant ...">
        </div>
        <div class="form-group">
          <label for="loginPassword">Mot de passe :</label>
          <input v-model="loginPassword" type="password" class="form-control" id="loginPassword" placeholder="mot de passe ...">
        </div>
        <button @click="connect" type="submit" class="btn btn-primary">Connexion</button>
      </div>
    </div>
    <!-- Inscription -->
    <div class="card w-50">
      <div class="card-body">
        <h5 class="card-title">Inscription</h5>
        <div class="form-group">
          <label for="signupEmail">Mail :</label>
          <input v-model="signupEmail" type="email" class="form-control" id="signupEmail" placeholder="mail...">
        </div>
        <div class="form-group">
          <label for="signupPassword">Mot de passe :</label>
          <input v-model="signupPassword" type="password" class="form-control" id="signupPassword" placeholder="mot de passe ...">
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirmer mot de passe :</label>
          <input v-model="confirmPassword" type="password" class="form-control" id="confirmPassword" placeholder="confirmation...">
        </div>
        <button @click="signup" type="submit" class="btn btn-primary">Inscription</button>
      </div>
    </div>
  </div>
</template>
