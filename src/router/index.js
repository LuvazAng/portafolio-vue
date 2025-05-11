// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';


const routes = [

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Usa historial del navegador (URLs limpias)
  routes, // Tus rutas definidas
});

export default router;
