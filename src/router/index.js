import { createRouter, createWebHistory } from 'vue-router'
import CatalogueView from '../views/CatalogueView.vue'
import LoginView from '../views/LoginView.vue'
import PersonnalisationView from '../views/PersonnalisationView.vue'
import HomeView from '../views/HomeView.vue'
import PanierView from '../views/PanierView.vue'
import AproposView from '../views/AproposView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                     name: 'home',                        component: HomeView},
    { path: '/catalogue',            name: 'catalogue',                   component: CatalogueView},
    { path: '/login',                name: 'login',                       component: LoginView},
    { path: '/personnalisation',     name: 'personnalisation',            component: PersonnalisationView},
    { path: '/panier',               name: 'panier',                      component: PanierView},
    { path: '/apropos',              name: 'apropos',                     component: AproposView},
  ]
})

export default router
