<template>
  <section
    id="education"
    class="py-20 bg-gradient-to-b from-white to-slate-200 dark:from-bg-primary-900 dark:to-slate-900"
  >
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16 relative text-black dark:text-white">
        Educación
        <span
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-0.5 bg-primary-600 dark:bg-primary-400"
          aria-hidden="true"
        ></span>
      </h2>
      <div class="max-w-3xl mx-auto space-y-12">
        <div
          v-for="(education, index) in educations"
          :key="index"
          class="bg-slate-200 dark:bg-slate-700 rounded-lg shadow-lg p-6 relative"
        >
          <div
            class="absolute -left-3 top-6 w-6 h-6 bg-primary-600 dark:bg-primary-400 rounded-full"
          ></div>
          <div class="flex flex-col sm:flex-row">
            <div class="mb-4 sm:mb-0 sm:mr-6 flex justify-center">
              <component
                :is="education.icon"
                class="w-16 h-16 text-black dark:text-white"
                aria-hidden="true"
                :alt="`${education.institution} Icon`"
              ></component>
            </div>
            <div>
              <h3 class="text-xl font-bold text-primary-600 dark:text-primary-400">
                {{ education.title }}
              </h3>
              <h4 class="text-lg mb-1">{{ education.institution }}</h4>
              <p class="text-sm text-primary-800 dark:text-primary-200 mb-4 flex items-center">
                <font-awesome-icon class="mr-2" icon="fas fa-calendar" /> {{ education.period }}
              </p>
              <p class="mb-4">{{ education.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Importa los íconos específicos de educación
import TecnmIcon from '@/assets/icons/tecnm.vue'
import OneIcon from '@/assets/icons/one.vue'
// FontAwesomeIcon no necesita importarse localmente si está global en main.js

export default {
  name: 'EducationView',
  components: {
    TecnmIcon,
    OneIcon,
    // FontAwesomeIcon NO necesita estar aquí si está global
  },
  data() {
    return {
      educations: [
        {
          title: 'Ingeniería en Sistemas Computacionales',
          institution: 'Tecnologico Nacional de México campus Zacatepec',
          period: '2020 - 2025',
          description:
            'Estudios enfocados en programación, algoritmos, estructuras de datos y desarrollo de software.',
          icon: 'TecnmIcon',
        },
        {
          title: 'Programa Oracle One Education (ONE)',
          institution: 'Oracle + Alura Laram',
          period: '2024 (4 meses)',
          description:
            'Formación intensiva en desarrollo web, incluyendo HTML, CSS3, JavaScript, Java con Programación Orientada a Objetos.',
          icon: 'OneIcon',
        },
      ],
    }
  },
  methods: {
    showMore(education) {
      // Implementar lógica para mostrar más información
      console.log('Mostrar más información sobre:', education.title)
    },
  },
}
</script>

<style scoped>
/* Estilos específicos de la vista Educación si los hay, además de Tailwind */
</style>
