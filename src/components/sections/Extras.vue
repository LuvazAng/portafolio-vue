<template>
  <section
    id="extras"
    class="py-20 bg-gradient-to-b from-slate-200 to-white dark:from-slate-900 dark:to-bg-primary-900"
  >
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16 relative text-black dark:text-white">
        {{ $t('header.extras') }}
        <span
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-0.5 bg-primary-600 dark:bg-primary-400"
          aria-hidden="true"
        ></span>
      </h2>
      <div class="max-w-3xl mx-auto space-y-12">
        <div
          v-for="(item, index) in extraItems"
          :key="index"
          class="bg-slate-200 dark:bg-slate-700 rounded-lg shadow-lg p-6 relative"
        >
          <div
            class="absolute -left-3 top-6 w-6 h-6 bg-primary-600 dark:bg-primary-400 rounded-full"
          ></div>
          <h3 class="text-xl font-bold text-primary-600 dark:text-primary-400">
            {{ item.title }}
          </h3>
          <h4 class="text-lg mb-1">
            {{ item.role }}
          </h4>
          <p class="text-sm text-primary-800 dark:text-primary-200 mb-4 flex items-center">
            <font-awesome-icon class="mr-2" icon="fas fa-calendar" /> {{ item.year }}
          </p>
          <p class="mb-4">
            {{ item.description }}
          </p>
          <div class="flex flex-wrap justify-between items-start mt-3">
            <button
              class="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors text-sm flex items-center justify-center mt-5 md:mt-0 w-full md:w-auto"
              @click="showMore(item)"
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
  name: 'ExtrasView',
  computed: {
    extraItems() {
      return [
        {
          title: this.$t('extras.extra_1.title'),
          role: this.$t('extras.extra_1.role'),
          year: this.$t('extras.extra_1.date'),
          description: this.$t('extras.extra_1.description'),
        },
        {
          title: this.$t('extras.extra_2.title'),
          role: this.$t('extras.extra_2.role'),
          year: this.$t('extras.extra_2.date'),
          description: this.$t('extras.extra_2.description'),
        },
        {
          title: this.$t('extras.extra_3.title'),
          role: this.$t('extras.extra_3.role'),
          year: this.$t('extras.extra_3.date'),
          description: this.$t('extras.extra_3.description'),
        },
      ]
    },
  },
  methods: {
    showMore(item) {
      // Aquí puedes implementar la lógica para mostrar más información
      // Por ejemplo, abrir un modal o navegar a otra página
      console.log('Mostrar más información sobre:', item.title)
    },
  },
}
</script>
