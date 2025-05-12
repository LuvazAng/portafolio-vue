<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-bg-primary-900">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <div class="text-lg text-black dark:text-white font-bold">LuvazAng</div>
        <nav class="hidden md:block">
          <ul class="flex space-x-6 items-center">
            <li>
              <a
                href="#home"
                class="text-black dark:text-white hover:text-primary-500 transition-colors"
                >{{ $t('header.home') }}</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="text-black dark:text-white hover:text-primary-500 transition-colors"
                >{{ $t('header.about') }}</a
              >
            </li>
            <li>
              <a
                href="#experience"
                class="text-black dark:text-white hover:text-primary-500 transition-colors"
                >{{ $t('header.experience') }}</a
              >
            </li>
            <li>
              <a
                href="#skills"
                class="text-black dark:text-white hover:text-primary-500 transition-colors"
                >{{ $t('header.skills') }}</a
              >
            </li>
            <li>
              <a
                href="#education"
                @click="closeMenu"
                class="text-black dark:text-white hover:text-primary-500 transition-colors"
                >{{ $t('header.education') }}</a
              >
            </li>
            <li>
              <a
                href="#extras"
                class="text-black dark:text-white hover:text-primary-500 transition-colors"
                >{{ $t('header.extras') }}</a
              >
            </li>
            <li class="flex items-center space-x-1">
              <button
                @click="setLanguage('en')"
                :class="{ 'font-bold underline': currentLocale === 'en' }"
                class="text-black dark:text-white hover:text-primary-500 transition-colors text-sm cursor-pointer"
              >
                EN
              </button>
              <span class="text-black dark:text-white text-sm">|</span>
              <button
                @click="setLanguage('es')"
                :class="{ 'font-bold underline': currentLocale === 'es' }"
                class="text-black dark:text-white hover:text-primary-500 transition-colors text-sm cursor-pointer"
              >
                ES
              </button>
            </li>
            <li>
              <button
                @click="toggleTheme"
                class="text-black dark:text-white cursor-pointer hover:text-primary-500 transition-colors"
                :aria-label="$t('button.theme_toggle')"
              >
                <font-awesome-icon :icon="simpleThemeIcon" class="text-sm" />
              </button>
            </li>
          </ul>
        </nav>
        <button
          class="md:hidden text-black dark:text-white cursor-pointer hover:text-primary-500 transition-colors"
          :aria-label="menuOpen ? $t('button.close_menu') : $t('button.open_menu')"
          @click="toggleMenu"
        >
          <font-awesome-icon
            :icon="menuOpen ? ['fas', 'times'] : ['fas', 'bars']"
            class="text-xl"
          />
        </button>
      </div>
    </div>
    <div v-if="menuOpen" class="md:hidden bg-white dark:bg-bg-primary-900">
      <ul class="py-3 px-4 space-y-3">
        <li>
          <a
            href="#home"
            @click="closeMenu"
            class="block text-black dark:text-white hover:text-primary-500 transition-colors"
            >{{ $t('header.home') }}</a
          >
        </li>
        <li>
          <a
            href="#about"
            @click="closeMenu"
            class="block text-black dark:text-white hover:text-primary-500 transition-colors"
            >{{ $t('header.about') }}</a
          >
        </li>
        <li>
          <a
            href="#experience"
            @click="closeMenu"
            class="block text-black dark:text-white hover:text-primary-500 transition-colors"
            >{{ $t('header.experience') }}</a
          >
        </li>
        <li>
          <a
            href="#skills"
            @click="closeMenu"
            class="block text-black dark:text-white hover:text-primary-500 transition-colors"
            >{{ $t('header.skills') }}</a
          >
        </li>
        <li>
          <a
            href="#education"
            @click="closeMenu"
            class="block text-black dark:text-white hover:text-primary-500 transition-colors"
            >{{ $t('header.education') }}</a
          >
        </li>
        <li>
          <a
            href="#extras"
            @click="closeMenu"
            class="block text-black dark:text-white hover:text-primary-500 transition-colors"
            >{{ $t('header.extras') }}</a
          >
        </li>
        <li class="flex items-center space-x-1">
          <span class="text-black dark:text-white mr-2">{{ $t('button.language_label') }}:</span>
          <button
            @click="setLanguage('en')"
            :class="{ 'font-bold underline': currentLocale === 'en' }"
            class="text-black dark:text-white hover:text-primary-500 transition-colors text-sm"
          >
            EN
          </button>
          <span class="text-black dark:text-white text-sm">|</span>
          <button
            @click="setLanguage('es')"
            :class="{ 'font-bold underline': currentLocale === 'es' }"
            class="text-black dark:text-white hover:text-primary-500 transition-colors text-sm"
          >
            ES
          </button>
        </li>
        <li class="flex items-center">
          <button
            @click="toggleTheme"
            class="block text-black dark:text-white hover:text-primary-500 transition-colors"
            :aria-label="$t('button.theme_toggle')"
          >
            <font-awesome-icon :icon="simpleThemeIcon" class="text-md mr-2" />
            <span>{{ $t('theme_name.' + theme) }}</span>
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
// Importa la función setLocale desde tu archivo i18n.js
import { setLocale } from '@/i18n' // Asegúrate de que la ruta sea correcta

export default {
  name: 'AppHeader',
  components: {}, // Si usas componentes aquí, asegúrate de listarlos
  data() {
    return {
      menuOpen: false, // Add theme state: 'light', 'dark', or 'system'
      theme: 'system', // Default to system preference
    }
  },
  mounted() {
    // On page load, determine the initial theme
    this.getInitialTheme()

    // Nota: El idioma inicial se carga en main.js al inicializar i18n
    // No necesitas hacer nada aquí para cargar el idioma guardado inicialmente.
  },
  watch: {
    // Watch for changes in the theme data property
    theme(newTheme) {
      this.applyTheme(newTheme)
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    }, // Method to get the theme from localStorage or system preference
    getInitialTheme() {
      // Esta lógica es para el tema, la de i18n ya está en i18n.js y main.js
      if (localStorage.theme) {
        this.theme = localStorage.theme
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.theme = 'system' // O 'dark' si prefieres que el default del sistema sea oscuro
      } else {
        this.theme = 'system' // O 'light' si prefieres que el default del sistema sea claro
      } // Apply the initial theme
      this.applyTheme(this.theme)
    }, // Method to apply the selected theme to the html element and save to localStorage
    applyTheme(theme) {
      // Esta lógica es para el tema
      const htmlElement = document.documentElement

      if (theme === 'dark') {
        htmlElement.classList.add('dark')
        localStorage.theme = 'dark'
      } else if (theme === 'light') {
        htmlElement.classList.remove('dark')
        localStorage.theme = 'light'
      } else {
        // theme === 'system'
        // Check system preference and apply accordingly
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          htmlElement.classList.add('dark')
        } else {
          htmlElement.classList.remove('dark')
        } // Remove theme from local storage to indicate system preference
        localStorage.removeItem('theme')
      }
    }, // Method to toggle the theme (e.g., light -> dark -> system -> light)
    toggleTheme() {
      // Esta lógica es para el tema
      switch (this.theme) {
        case 'light':
          this.theme = 'dark'
          break
        case 'dark':
          this.theme = 'system'
          break
        case 'system': // Check current system preference to decide if next is light or dark
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.theme = 'light' // System is dark, next is light
          } else {
            this.theme = 'dark' // System is light, next is dark
          }
          break
        default:
          this.theme = 'system'
      } // The watch property will call applyTheme when this.theme changes
    },

    // --- Lógica del Toggle de Idioma ---
    setLanguage(lang) {
      // Llama a la función setLocale que importamos desde i18n.js
      // Esta función cambia el locale global de vue-i18n y guarda en localStorage
      setLocale(lang)
      // No necesitas actualizar el estado local del componente,
      // ya que accederemos al locale global directamente via $i18n.locale
    },
    // --- Fin Lógica del Toggle de Idioma ---
  }, // Optional: Add computed property for button icon based on theme
  computed: {
    // --- Lógica del Toggle de Tema ---
    themeIcon() {
      if (this.theme === 'dark') {
        return ['fas', 'sun'] // Show sun when in dark mode
      } else if (this.theme === 'light') {
        return ['fas', 'moon'] // Show moon when in light mode
      } else {
        // For system, show something indicating system preference
        // You might need to determine actual system mode here if you want sun/moon
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        return isSystemDark ? ['fas', 'sun'] : ['fas', 'moon'] // Show opposite of system current
      }
    }, // Or a simpler icon toggle (sun/moon only)
    simpleThemeIcon() {
      return this.theme === 'dark' ? ['fas', 'sun'] : ['fas', 'moon']
    },
    // --- Fin Lógica del Toggle de Tema ---

    // --- Lógica del Toggle de Idioma ---
    currentLocale() {
      // Accede al locale actual de vue-i18n
      return this.$i18n.locale
    },
    // --- Fin Lógica del Toggle de Idioma ---
  },
  // Si usas Options API, puedes acceder a vue-i18n via `this.$i18n`
  // No necesitas una opción `setup()` si todo está en `data`, `methods`, `computed`.
}
</script>
