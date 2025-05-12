<template>
  <section
    id="education"
    class="py-20 bg-gradient-to-b from-white to-slate-200 dark:from-bg-primary-900 dark:to-slate-900"
  >
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16 relative text-black dark:text-white">
        {{ $t('header.education') }}
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
              <a
                v-if="education.link"
                :href="education.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
              >
                <font-awesome-icon class="mr-1" icon="fas fa-external-link-alt" />
                {{ $t('labels.link') }}
              </a>
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
  computed: {
    educations() {
      return [
        {
          title: this.$t('education.education_1.title'),
          institution: this.$t('education.education_1.institution'),
          period: this.$t('education.education_1.date'),
          description: this.$t('education.education_1.description'),
          icon: 'TecnmIcon',
        },
        {
          title: this.$t('education.education_2.title'),
          institution: this.$t('education.education_2.institution'),
          period: this.$t('education.education_2.date'),
          description: this.$t('education.education_2.description'),
          icon: 'OneIcon',
          link: this.$t('education.education_2.link'),
        },
      ]
    },
  },
}
</script>
