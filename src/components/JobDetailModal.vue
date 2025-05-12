<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
    @click.self="$emit('close')"
    aria-modal="true"
    role="dialog"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <div
      class="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 w-full max-h-[100vh] overflow-y-auto relative text-gray-900 dark:text-gray-200 transform transition-all sm:align-middle max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
    >
      <button
        @click="$emit('close')"
        class="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 text-2xl font-bold leading-none outline-none focus:outline-none"
        aria-label="Cerrar modal"
      >
        <font-awesome-icon icon="fas fa-times" class="hover:text-primary-600 cursor-pointer" />
      </button>

      <div v-if="jobDetails">
        <h3 id="modal-title" class="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
          {{ jobDetails.title }}
        </h3>
        <div class="flex flex-col mb-4">
          <h4 class="text-md text-gray-700 dark:text-gray-300 mb-2">
            {{ jobDetails.company }}
          </h4>
          <div class="flex">
            <span
              class="inline-block px-3 py-1 bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
            >
              {{ jobDetails.period }}
            </span>
          </div>
        </div>

        <div v-if="jobDetails.detailedInfo" id="modal-description">
          <p v-if="jobDetails.detailedInfo.role" class="mb-3">
            <strong class="font-semibold">{{ $t('modal.role_label') || 'Rol:' }}</strong>
            {{ jobDetails.detailedInfo.role }}
          </p>

          <div
            v-if="
              jobDetails.detailedInfo.activities && jobDetails.detailedInfo.activities.length > 0
            "
            class="mb-3"
          >
            <strong class="font-semibold">{{
              $t('modal.activities_label') || 'Actividades principales:'
            }}</strong>
            <ul class="list-disc list-inside mt-1 ml-4 space-y-1">
              <li v-for="(activity, i) in jobDetails.detailedInfo.activities" :key="'act-' + i">
                {{ activity }}
              </li>
            </ul>
          </div>

          <div
            v-if="
              jobDetails.detailedInfo.objectives && jobDetails.detailedInfo.objectives.length > 0
            "
            class="mb-3"
          >
            <strong class="font-semibold">{{
              $t('modal.objectives_label') || 'Objetivos:'
            }}</strong>
            <ul class="list-disc list-inside mt-1 ml-4 space-y-1">
              <li v-for="(objective, i) in jobDetails.detailedInfo.objectives" :key="'obj-' + i">
                {{ objective }}
              </li>
            </ul>
          </div>

          <p v-if="jobDetails.detailedInfo.industry" class="mb-3">
            <strong class="font-semibold">{{ $t('modal.industry_label') || 'Industria:' }}</strong>
            {{ jobDetails.detailedInfo.industry }}
          </p>

          <p v-if="jobDetails.detailedInfo.sector" class="mb-3">
            <strong class="font-semibold">{{ $t('modal.sector_label') || 'Sector:' }}</strong>
            {{ jobDetails.detailedInfo.sector }}
          </p>

          <p
            v-if="
              jobDetails.description &&
              !jobDetails.detailedInfo.activities &&
              !jobDetails.detailedInfo.objectives
            "
            class="mb-3 text-sm text-gray-600 dark:text-gray-400 italic"
          >
            {{ jobDetails.description }}
          </p>

          <div v-if="jobDetails.skills && jobDetails.skills.length > 0" class="mt-4">
            <strong class="font-semibold">{{
              $t('modal.skills_label') || 'Tecnologías / Skills:'
            }}</strong>
            <div class="flex flex-wrap gap-2 mt-2">
              <span
                v-for="(skill, idx) in jobDetails.skills"
                :key="idx"
                class="px-3 py-1 font-semibold bg-slate-300 text-gray-800 dark:bg-slate-600 dark:text-slate-200 text-xs rounded-full"
              >
                {{ skill }}
              </span>
            </div>
          </div>
          <!-- Add close button at the bottom -->
          <div class="mt-6 flex justify-center">
            <button
              @click="$emit('close')"
              class="px-4 py-2 bg-primary-600 cursor-pointer hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 flex items-center justify-center gap-2"
            >
              <font-awesome-icon icon="fas fa-times" />
              {{ $t('labels.close') }}
            </button>
          </div>
        </div>
        <p v-else id="modal-description">
          {{ $t('modal.no_detailed_info') || 'No hay información detallada adicional disponible.' }}
        </p>
      </div>
      <p v-else id="modal-description">
        {{ $t('modal.loading_info') || 'Cargando información...' }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobDetailModal',
  props: {
    // Controla si el modal es visible
    isVisible: {
      type: Boolean,
      required: true,
    },
    // Objeto con los detalles de la experiencia a mostrar
    jobDetails: {
      type: Object,
      default: null, // Puede ser null inicialmente
    },
  },
  emits: ['close'], // Evento para notificar al padre que se cierre el modal
  watch: {
    // Observa el cambio en la visibilidad para manejar el scroll del body y el evento Escape
    isVisible(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden' // Evita el scroll del fondo
        document.addEventListener('keydown', this.handleEscape)
      } else {
        document.body.style.overflow = '' // Restaura el scroll
        document.removeEventListener('keydown', this.handleEscape)
      }
    },
  },
  methods: {
    // Maneja la pulsación de la tecla Escape para cerrar el modal
    handleEscape(event) {
      if (event.key === 'Escape' && this.isVisible) {
        this.$emit('close')
      }
    },
  },
  // Limpia el listener y el estilo del body antes de que el componente se desmonte
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleEscape)
    document.body.style.overflow = '' // Asegura que el scroll se restaure
  },
}
</script>
