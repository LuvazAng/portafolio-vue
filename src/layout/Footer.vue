<template>
  <footer
    class="bg-gradient-to-b from-white to-slate-200 dark:from-bg-primary-900 dark:to-slate-900 py-12"
  >
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <h2 class="text-2xl font-bold mb-4 text-black dark:text-slate-300">LUVAZANG</h2>
          <p class="mb-6 text-black dark:text-slate-300">
            Desarrollador de aplicaciones web apasionado por crear soluciones digitales innovadoras
            y funcionales.
          </p>
          <div class="flex space-x-4">
            <a
              href="https://linkedin.com/in/luvazang"
              target="_blank"
              aria-label="Perfil de LinkedIn"
              class="w-10 h-10 hover:text-white bg-slate-300 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-400 dark:hover:bg-primary-500 transition-colors"
            >
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
            <a
              href="https://github.com/LuvazAng"
              target="_blank"
              aria-label="Perfil de GitHub"
              class="w-10 h-10 hover:text-white bg-slate-300 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-400 dark:hover:bg-primary-500 transition-colors"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4 text-black dark:text-slate-300">Enlaces Rápidos</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#home"
                class="text-black dark:text-slate-300 hover:text-gray-400 dark:hover:text-white transition-colors"
                >Inicio</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="text-black dark:text-slate-300 hover:text-gray-400 dark:hover:text-white transition-colors"
                >Sobre mí</a
              >
            </li>
            <li>
              <a
                href="#experience"
                class="text-black dark:text-slate-300 hover:text-gray-400 dark:hover:text-white transition-colors"
                >Experiencia</a
              >
            </li>
            <li>
              <a
                href="#skills"
                class="text-black dark:text-slate-300 hover:text-gray-400 dark:hover:text-white transition-colors"
                >Habilidades técnicas</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Contacto</h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <i class="fa-solid fa-envelope text-indigo-400 mr-3"></i>
              <span class="text-black dark:text-slate-300">luisvazquez1757@gmail.com</span>
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-location-dot text-indigo-400 mr-3"></i>
              <span class="text-black dark:text-slate-300">Cuernavaca, Morelos</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-slate-700 mt-8 pt-8 text-center text-black dark:text-slate-400">
        <p>&copy; {{ new Date().getFullYear() }} LuvazAng. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
// Elimina: import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'AppFooter',
  // Elimina FontAwesomeIcon de components:
  // components: {
  //   FontAwesomeIcon
  // }
  // No necesitas data ni methods a menos que el footer tenga lógica interactiva
}
</script>

<style scoped>
/* Puedes añadir estilos específicos si no usas solo clases de Tailwind */
</style>
