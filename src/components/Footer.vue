<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'Footer',
  components: {
    RouterLink
  }
};
</script>

<template>
  <footer class="footer_bg">
    <div class="footer-container">
      <!-- Première colonne : À propos de TaVue -->
      <div class="footer-col">
        <h2 class="nav_item">TaVue</h2>
        <p class="footer-text">
          TaVue est une marque de lunettes spécialisée dans la personnalisation. Notre objectif est de donner à nos clients la possibilité de créer des lunettes uniques qui reflètent leur style et leur personnalité. Avec une large gamme d'options de personnalisation, des montures aux verres, TaVue offre une expérience utilisateur originale, où vous pouvez concevoir votre paire de lunettes sur mesure.
        </p>
      </div>

      <!-- Deuxième colonne : Navigation -->
      <div class="footer-col">
        <h2 class="nav_item">Lunettes</h2>
        <ul class="footer-list">
          <li><RouterLink class="footer-link" to="/">Accueil</RouterLink></li>
          <li><RouterLink class="footer-link" to="/catalogue">Catalogue</RouterLink></li>
          <li><RouterLink class="footer-link" to="/personnalisation">Personnalisation</RouterLink></li>
          <li><RouterLink class="footer-link" to="/login">Connexion</RouterLink></li>
        </ul>
      </div>

      <!-- Troisième colonne : Réseaux sociaux -->
      <div class="footer-col">
        <h2 class="nav_item">Réseaux</h2>
        <div class="social-icons">
          <a href="#" class="footer-link"><i class="fa fa-twitter"></i></a>
          <a href="#" class="footer-link"><i class="fa fa-instagram"></i></a>
          <a href="#" class="footer-link"><i class="fa fa-facebook"></i></a>
        </div>
      </div>
    </div>

<div class="footer-bar"></div>

    <div class="footer-bottom">
      <p class="footer-text">&copy; 2023 TaVue Tous droits réservés</p>
      <div class="footer-logo">
        <RouterLink class="navbar-brand" to="/">
          <img src="/tavue.svg" alt="Logo TaVue" style="max-width:100px;" />
        </RouterLink>
      </div>
    </div>
  </footer>
</template>