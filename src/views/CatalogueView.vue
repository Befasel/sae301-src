<script>
import { ref, onMounted, computed } from 'vue';
import PocketBase from 'pocketbase';

export default {
  name: 'CatalogueView',
  setup() {
    var pocketbase_ip;
  if (import.meta.env.MODE === "production")
    pocketbase_ip = "http://45.147.96.40";
  else 
    pocketbase_ip = "http://127.0.0.1:8090";

  const pb = new PocketBase(pocketbase_ip);
  
    const models = ref([]);
    const sortByPrice = ref(null);  // null: pas de tri, true: croissant, false: décroissant
    const sortByName = ref(false);

    const sortedModels = computed(() => {
      let sorted = [...models.value];

      if (sortByPrice.value === true) {
        sorted.sort((a, b) => a.prix - b.prix);
      }
      if (sortByPrice.value === false) {
        sorted.sort((a, b) => b.prix - a.prix);
      }
      if (sortByName.value) {
        sorted.sort((a, b) => a.nom.localeCompare(b.nom));
      }

      return sorted;
    });

    onMounted(async() => {
      try {
        const result = await pb.collection('modele').getFullList();
        if (Array.isArray(result)) {
          models.value = result;
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des modèles :", error);
      }
    });

    const getImageUrl = (model) => {
      return "http://127.0.0.1:8090/api/files/"
        + model.collectionId
        + "/"
        + model.id
        + "/"
        + model.image
    }

    return { sortedModels, sortByPrice, sortByName, getImageUrl };
  }
}
</script>

<template>
  <div class="container">
    <header>
      <h1 style="font-weight: bold; margin-top: 50px;">Liste des modèles</h1>
      <button class="sort-button" @click="sortByPrice = true">Trier par prix Croissant</button>
      <button class="sort-button" @click="sortByPrice = false">Trier par prix Décroissant</button>
      <button class="sort-button" @click="sortByName = !sortByName">Trier par nom</button>
    </header>
    <main>
      <div v-for="model in sortedModels" :key="model.id" class="model-item" style="padding-top:50px">
        <div class="model-details">
          <h2>{{ model.nom }}</h2>
          <p>{{ model.description }}</p>
          <div class="model-price"> 
            <del>{{ model.prix }}€</del>
            <strong>{{ model.prix * 0.8 }}€ TTC</strong>
          </div>
          <button class="add-to-cart">Ajouter au panier</button>
          <button class="buy-now">Acheter maintenant</button>
        </div>
        <img :src="getImageUrl(model)" alt="Image du modèle" class="model-image" />
      </div>
    </main>
    <footer style="margin-top: 50px;"></footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Mulish:wght@400;700&display=swap');

.container {
  padding-top: 20px;
  padding-bottom: 20px;
}

.model-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
}

.model-image {
  max-width: 400px;
  margin-left: 70px;
}

.model-details h2 {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
}

.model-details p {
  font-family: 'Mulish', sans-serif;
}

.model-price del {
  margin-right: 10px;
  color: grey;
}

.model-price strong {
  color: red;
}

button {
  font-family: 'Inter', sans-serif;
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  background-color: #1d1e56;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 10px;
}

button:last-child {
  margin-right: 0;
}

button:hover {
  background-color: #141538;
}

.sort-button {
  padding: 8px 12px;
  margin-bottom: 20px;
}

.add-to-cart {
  margin-right: 10px;
}

.buy-now {
  margin-left: 10px;
}
</style>
