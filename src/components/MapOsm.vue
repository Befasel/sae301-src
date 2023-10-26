<script setup>
  // Import éléments de Vue
  import { onMounted, ref } from 'vue';
  // Import Leaflet
  import * as Leaflet from 'leaflet';
  // CSS Leaflet
  import 'leaflet/dist/leaflet.css';

  // Canevas pour la carte
  let tileLayer = Leaflet.tileLayer;
  // Initialisation de la carte sous forme d'une ref
  let map = ref();
  
  // Coordonnées de l'utilisateur
  let coordMe = ref({
    latitude: 0,
    longitude: 0
  });

  // Lorsque le composant est monté dans la vue
  onMounted(async () => {
    // Caractéristiques de la carte
    tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    );

    // Création de la carte sur la div ayant l'id = 'map'
    map = Leaflet.map('map',
      {
        zoomControl: true,
        layers: [tileLayer],
        maxZoom: 18,
        minZoom: 12,
      })
      // Projection de la carte avec centrage aux coordonnées indiquées, avec facteur d'agrandissement
      .setView([47.510356, 6.798466], 16);
  });
</script>

<template>
  <div class="container-fluid">
    <div id="map"></div>
  </div>
</template>

<style scoped>
.container-fluid {
  padding: 0 20px;
}

#map {
  width: 80%;
  height: 70vh;
  margin: 0 auto;
}
</style>
