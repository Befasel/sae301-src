<script setup>
  // Import éléments de vue
  import { ref, onMounted } from 'vue';
  // Import éléments de routage
  import { useRouter } from 'vue-router';

  const router = useRouter()

  // Import pocketbase
  import PocketBase from 'pocketbase'

  // Détermination de l'URL de PocketBase selon l'environnement
  var pocketbase_ip;
  if (import.meta.env.MODE === "production")
    pocketbase_ip = "http://45.147.96.40/";
  else 
    pocketbase_ip = "http://127.0.0.1:8090/";

  const pb = new PocketBase(pocketbase_ip);
  
  // user connecté ? au départ faux
  let isConnected = ref(false)

  // Element de connexion
  let user = ref('')
  let psw = ref('')

  // User connecté
  let currentUser = ref(null)
  let avatar = ref(null)

  // Au montage du composant
  onMounted(async () => {
    // Vérifier que le user est déjà connecté
    refresh()
  })

  const refresh = () => {
    if (pb.authStore.isValid) {
      currentUser.value = pb.authStore.model
      isConnected.value = true

      avatar.value = 
        `${pocketbase_ip}/api/files/` // Adresse serveur et repertoire des fichiers image
        + `${currentUser.value.collectionId}/`  // Id ou name de la collection concernée
        + `${currentUser.value.id}/`  // Id de l'utilisateur connecté
        + `${currentUser.value.avatar}`  // Nom fichier image pocketbase
        + "?thumb=100x100"  // Taille par défaut     

    }
  }

  const connect = async () => {
    try {
      const authData = await pb.collection('users')
        .authWithPassword(user.value, psw.value)
      refresh()    
    } catch (error) {
      alert("Erreur d'identification : mauvais login et/ou mot de passe")
      user.value = ""
      psw.value = ""
    }
  }

  const deconnect = () => {
    pb.authStore.clear()
    isConnected.value = false
    avatar.value = null
    router.push({ name: "HomeView" })
  }
</script>

<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark nav_bg">
        <RouterLink class="navbar-brand" to="/">
            <img src="/tavue.svg" alt="Logo TaVue" style="max-width:100px;" />
        </RouterLink>
        <button class="navbar-toggler" 
          type="button" data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto" v-if="isConnected">
                <li class="nav-item">
                  <RouterLink class="nav-link" to="/">Accueil</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="/catalogue">Catalogue</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="/personnalisation">Personnalisation</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="/apropos">A propos</RouterLink>
                </li>
                <!-- Icône du panier modifiée -->
                <li class="nav-item align-self-center">
                  <RouterLink to="/panier"> <!-- RouterLink ajouté ici, ajustez le chemin comme nécessaire -->
                    <i class="fa fa-shopping-cart white-icon"></i>
                  </RouterLink>
                </li>
            </ul>

            <div class="ml-auto">              
              <span v-if="isConnected"> 
                <img :src="avatar" class="img-fluid rounded-circle mr-2" style="max-width:40px;" />
                <button class="btn btn-light mr-2">
                  {{ currentUser.name }}
                </button>              
                <button class="btn btn-light ml-auto" type="button" @click="deconnect">
                  <i class="fa fa-sign-out n" style="color: #1d1e56"></i>
                </button>
              </span>
                <form v-else class="form-inline input-group-sm ml-auto">
                  <input class="form-control mr-2" placeholder="Nom d'utilisateur" v-model="user">
                  <input type="password" class="form-control mr-2" placeholder="Mot de passe" v-model="psw">
                  <button class="btn btn-light ml-auto" type="button" @click.prevent="connect">
                    <i class="fa fa-power-off" style="color: #1d1e56"></i>
                  </button>
                </form>
            </div>
        </div>
    </nav>
  </div>
</template>
