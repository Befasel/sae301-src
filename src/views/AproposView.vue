<script setup>
  import MapOsm from '../components/MapOsm.vue'
</script>

<template>
  <div class="container"> 
    <div class="about-section">
      <h1 style="margin-top: 50px;">Qui sommes nous?</h1>
      <p>TaVue est le symbole du chic français, fusionnant le meilleur de la tradition, du raffinement et de l'innovation pour donner naissance à des lunettes qui sont le reflet de votre individualité. Nous sommes résolument engagés en faveur du savoir-faire français, et cette dévotion à la qualité exceptionnelle est incarnée dans chaque paire que nous fabriquons. En somme, notre philosophie est claire : créer des lunettes qui allient élégance, simplicité et confort, et qui sont conçues pour résister à l'épreuve du temps. À TaVue, la personnalisation n'est pas une option, mais une nécessité, car nous pensons que chacun a le droit à des lunettes à son image. Découvrez notre variété de modèles pour tous les genres, adaptez-les selon vos préférences et laissez votre style prendre le devant de la scène. Vous êtes cordialement invités à entrer dans le monde de TaVue, où l'élégance éternelle se conjugue parfaitement avec la modernité.</p>
      <h1>D'où venons nous?</h1>
      <MapOsm />
      <p>
        TaVue est synonyme d'élégance et de raffinement, avec ses racines solidement ancrées dans la cité historique de Montbéliard en Franche-Comté. Notre profond attachement à cette splendide région du nord-est français est au cœur de notre engagement envers l'artisanat local. Montbéliard, qui se distingue par son histoire riche et sa tradition artisanale, est la source d'où jaillit notre inspiration créative. C'est dans cette ville que notre équipe de designers hautement qualifiés conçoit des lunettes qui marient harmonieusement tradition et avant-gardisme. Le riche patrimoine culturel et le dynamisme créatif de Montbéliard alimentent continuellement notre aspiration à l'excellence et à l'élégance. Plongez dans l'authenticité et le raffinement de Montbéliard à travers chaque création signée TaVue. Nous vous souhaitons la bienvenue dans l'univers de TaVue, où l'art de la lunetterie française prend toute son ampleur.
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Mulish:wght@400;700&display=swap');

.about-section {
  color: black;
  font-family: 'Mulish', sans-serif;
  padding: 30px;
}

.about-section h1 {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: #2C3E50;
}
</style>
