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
              class="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors text-sm flex items-center justify-center mt-5 md:mt-0 w-full md:w-auto"
              @click="showMore(job)"
            >
              <span>{{ $t('button.information_label') }}</span>
              <font-awesome-icon :icon="['fas', 'angles-right']" class="pl-4" />
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
  computed: {
    experiences() {
      return [
        {
          title: this.$t('experience.experience_1.title'),
          company: this.$t('experience.experience_1.company'),
          period: this.$t('experience.experience_1.date'),
          description: this.$t('experience.experience_1.description'),
          skills: ['Next.js', 'MongoDB', 'FastAPI', 'IA', 'LLM', 'Python', 'ChromaDB'],
        },
        {
          title: this.$t('experience.experience_2.title'),
          company: this.$t('experience.experience_2.company'),
          period: this.$t('experience.experience_2.date'),
          description: this.$t('experience.experience_2.description'),
          skills: ['Laravel', 'PHP', 'MySQL'],
        },
        {
          title: this.$t('experience.experience_3.title'),
          company: this.$t('experience.experience_3.company'),
          period: this.$t('experience.experience_3.date'),
          description: this.$t('experience.experience_3.description'),
          skills: ['HTML', 'CSS', 'JavaScript', 'Flask (python)', 'LLM'],
        },
      ]
    },
  },
  methods: {
    showMore(job) {
      console.log('Mostrar más información sobre:', job.title)
    },
  },
}
</script>
