<template>
  <section
    id="experience"
    class="py-20 bg-gradient-to-b from-white to-slate-200 dark:from-bg-primary-900 dark:to-slate-900"
  >
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16 relative text-black dark:text-white">
        {{ $t('header.experience') }}
        <span
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-0.5 bg-primary-600 dark:bg-primary-400"
          aria-hidden="true"
        ></span>
      </h2>
      <div class="max-w-3xl mx-auto space-y-12">
        <div
          v-for="(job, index) in experiences"
          :key="index"
          class="bg-slate-200 dark:bg-slate-700 rounded-lg shadow-lg p-6 relative"
        >
          <div
            class="absolute -left-3 top-6 w-6 h-6 bg-primary-600 dark:bg-primary-400 rounded-full"
          ></div>
          <h3 class="text-xl font-bold text-primary-600 dark:text-primary-400">
            {{ job.title }}
          </h3>
          <h4 class="text-lg mb-1">
            {{ job.company }}
          </h4>
          <p class="text-sm text-primary-800 dark:text-primary-200 mb-4 flex items-center">
            <font-awesome-icon class="mr-2" icon="fas fa-calendar" />
            {{ job.period }}
          </p>
          <p class="mb-4">
            {{ job.description }}
          </p>
          <div class="flex flex-wrap justify-between items-start mt-3">
            <div class="flex flex-wrap gap-2 md:w-3/4">
              <span
                v-for="(skill, idx) in job.skills"
                :key="idx"
                class="px-3 py-1 font-semibold bg-slate-300 text-gray-800 dark:bg-slate-600 dark:text-slate-200 text-xs rounded-full"
                >{{ skill }}</span
              >
            </div>
            <button
              class="px-4 py-2 bg-primary-500 hover:bg-primary-600 cursor-pointer text-white rounded-md transition-colors text-sm flex items-center justify-center mt-5 md:mt-0 w-full md:w-auto"
              @click="showMore(job)"
            >
              <span>{{ $t('button.information_label') }}</span>
              <font-awesome-icon :icon="['fas', 'angles-right']" class="pl-4" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <JobDetailModal :isVisible="showModal" :jobDetails="selectedJobDetails" @close="closeModal" />
  </section>
</template>

<script>
import JobDetailModal from '@/components/JobDetailModal.vue' // Ajusta la ruta según tu estructura

export default {
  name: 'ExperienceView',
  components: {
    JobDetailModal, // Registra el componente modal
  },
  // Añade datos para controlar el estado del modal
  data() {
    return {
      showModal: false,
      selectedJobDetails: null, // Guardará la información del trabajo seleccionado
    }
  },
  computed: {
    experiences() {
      // **IMPORTANTE:** Aquí debes añadir la propiedad `detailedInfo`
      // a cada objeto de experiencia con los datos extra.
      return [
        {
          title: this.$t('experience.experience_1.title'),
          company: this.$t('experience.experience_1.company'),
          period: this.$t('experience.experience_1.date'),
          description: this.$t('experience.experience_1.description'),
          skills: ['Next.js', 'MongoDB', 'FastAPI', 'IA', 'LLM', 'Python', 'ChromaDB'],
          detailedInfo: {
            role: this.$t('experience.experience_1.detailedInfo.detailed_role'),
            activities: this.$t('experience.experience_1.detailedInfo.activities').split('\n'), // Suponiendo que es un string con saltos de línea
            objectives: this.$t('experience.experience_1.detailedInfo.objectives').split('\n'),
            industry: this.$t('experience.experience_1.detailedInfo.industry'),
            sector: this.$t('experience.experience_1.detailedInfo.sector'),
            // Puedes añadir más campos detallados aquí
          },
        },
        {
          title: this.$t('experience.experience_2.title'),
          company: this.$t('experience.experience_2.company'),
          period: this.$t('experience.experience_2.date'),
          description: this.$t('experience.experience_2.description'),
          skills: ['Laravel', 'PHP', 'MySQL'],
          detailedInfo: {
            // <-- Añade esto para cada experiencia
            role: this.$t('experience.experience_2.detailedInfo.detailed_role'),
            activities: this.$t('experience.experience_2.detailedInfo.activities').split('\n'),
            objectives: this.$t('experience.experience_2.detailedInfo.objectives').split('\n'),
            industry: this.$t('experience.experience_2.detailedInfo.industry'),
            sector: this.$t('experience.experience_2.detailedInfo.sector'),
          },
        },
        {
          title: this.$t('experience.experience_3.title'),
          company: this.$t('experience.experience_3.company'),
          period: this.$t('experience.experience_3.date'),
          description: this.$t('experience.experience_3.description'),
          skills: ['HTML', 'CSS', 'JavaScript', 'Flask (python)', 'LLM'],
          detailedInfo: {
            // <-- Añade esto para cada experiencia
            role: this.$t('experience.experience_3.detailedInfo.detailed_role'),
            activities: this.$t('experience.experience_3.detailedInfo.activities').split('\n'),
            objectives: this.$t('experience.experience_3.detailedInfo.objectives').split('\n'),
            industry: this.$t('experience.experience_3.detailedInfo.industry'),
            sector: this.$t('experience.experience_3.detailedInfo.sector'),
          },
        },
      ]
    },
  },
  methods: {
    showMore(job) {
      // Cuando se hace clic, guarda la información del trabajo y abre el modal
      this.selectedJobDetails = job
      this.showModal = true
    },
    closeModal() {
      // Método llamado por el modal para cerrarse
      this.showModal = false
      this.selectedJobDetails = null // Opcional: limpia los datos cuando se cierra
    },
  },
}
</script>
