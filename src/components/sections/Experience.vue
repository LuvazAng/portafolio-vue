<template>
  <section
    id="experience"
    class="py-20 bg-gradient-to-b from-white to-slate-200 dark:from-bg-primary-900 dark:to-slate-900"
  >
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16 relative text-black dark:text-white">
        Experiencia profesional
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
              class="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors text-sm flex items-center justify-center mt-5 md:mt-0 w-full md:w-auto"
              @click="showMore(job)"
            >
              <span>Más información</span>
              <font-awesome-icon :icon="['fas', 'angles-right']" class="pl-4"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceView',
  data() {
    return {
      experiences: [
        {
          title: 'Tecnico informatico',
          company: 'Unidad Universitaria de Secuenciacion Masiva y Bioinformatica (UUSMB)',
          period: '2025: ENE - Presente',
          description:
            'Desarrollo de chatbot para la atención al cliente y soporte en la plataforma de cottización de costos en servicios de Secuenciacion.',
          skills: ['Next.js', 'MongoDB', 'FastAPI', 'IA', 'LLM', 'Python', 'ChromaDB'],
          moreInfo: '', // Puedes agregar más información detallada aquí
        },
        {
          title: 'Desarrollador full stack',
          company: 'Universidad de Investigación e Innovación de México (UIIX)',
          period: '2024: AGO - 2024: DIC',
          description:
            'Desarrollo de un sistema de control de ingresos y notificaciones de adeudos economicis y reportes estudiantiles.',
          skills: ['Laravel', 'PHP', 'MySQL'],
          moreInfo: '',
        },
        {
          title: 'Verano de Investigación Científica',
          company: 'Centro Nacional de Investigación y Desarrollo Tecnológico (CENIDET)',
          period: '2024: MAY - 2024: JUL',
          description:
            'Desarrollo de chatbot para el Instituto Tecnologico de Zacatepec (ITZ) para la resolución de dudas de los estudiantes del instituto',
          skills: ['HTML', 'CSS', 'JavaScript', 'Flask (python)', 'LLM'],
          moreInfo: '',
        },
      ],
    }
  },
  methods: {
    showMore(job) {
      // Aquí puedes implementar la lógica para mostrar más información
      // Por ejemplo, abrir un modal o navegar a otra página
      console.log('Mostrar más información sobre:', job.title)
    },
  },
}
</script>
