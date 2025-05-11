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
                >Inicio</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="text-black dark:text-white hover:text-primary-500 transition-colors"
                >Sobre mí</a
              >
            </li>
            <li>
              <a
                href="#experience"
                class="text-black dark:text-white hover:text-primary-500 transition-colors"
                >Experiencia</a
              >
            </li>
            <li>
              <a
                href="#skills"
                class="text-black dark:text-white hover:text-primary-500 transition-colors"
                >Habilidades técnicas</a
              >
            </li>
            <li>
              <a
                href="#education"
                @click="closeMenu"
                class="text-black dark:text-white hover:text-primary-500 transition-colors"
                >Educación</a
              >
            </li>
            <li>
              <a
                href="#extras"
                class="text-black dark:text-white hover:text-primary-500 transition-colors"
                >Extras</a
              >
            </li>
            <li>
              <button
                @click="toggleTheme"
                class="text-black dark:text-white cursor-pointer hover:text-primary-500 transition-colors"
                aria-label="Cambiar tema"
              >
                <font-awesome-icon :icon="simpleThemeIcon" class="text-sm" />
              </button>
            </li>
          </ul>
        </nav>

        <button
          class="md:hidden text-black dark:text-white cursor-pointer hover:text-primary-500 transition-colors"
          aria-label="Abrir menú"
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
            >Inicio</a
          >
        </li>
        <li>
          <a
            href="#about"
            @click="closeMenu"
            class="block text-black dark:text-white hover:text-primary-500 transition-colors"
            >Sobre mí</a
          >
        </li>
        <li>
          <a
            href="#experience"
            @click="closeMenu"
            class="block text-black dark:text-white hover:text-primary-500 transition-colors"
            >Experiencia</a
          >
        </li>
        <li>
          <a
            href="#skills"
            @click="closeMenu"
            class="block text-black dark:text-white hover:text-primary-500 transition-colors"
            >Habilidades técnicas</a
          >
        </li>
        <li>
          <a
            href="#education"
            @click="closeMenu"
            class="block text-black dark:text-white hover:text-primary-500 transition-colors"
            >Educación</a
          >
        </li>
        <li>
          <a
            href="#extras"
            @click="closeMenu"
            class="block text-black dark:text-white hover:text-primary-500 transition-colors"
            >Extras</a
          >
        </li>
        <li class="flex items-center">
          <button
            @click="toggleTheme"
            class="block text-black dark:text-white hover:text-primary-500 transition-colors"
            aria-label="Cambiar tema"
          >
            <font-awesome-icon :icon="simpleThemeIcon" class="text-md mr-2" />
            <span
              >Tema: {{ theme === 'dark' ? 'Oscuro' : theme === 'light' ? 'Claro' : 'Claro' }}</span
            >
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  components: {},
  data() {
    return {
      menuOpen: false,
      // Add theme state: 'light', 'dark', or 'system'
      theme: 'system', // Default to system preference
    }
  },
  mounted() {
    // On page load, determine the initial theme
    this.getInitialTheme()
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
    },
    // Method to get the theme from localStorage or system preference
    getInitialTheme() {
      if (localStorage.theme) {
        this.theme = localStorage.theme
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.theme = 'system' // Or 'dark' if you prefer system default to just be dark
      } else {
        this.theme = 'system' // Or 'light' if you prefer system default to just be light
      }
      // Apply the initial theme
      this.applyTheme(this.theme)
    },
    // Method to apply the selected theme to the html element and save to localStorage
    applyTheme(theme) {
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
        }
        // Remove theme from local storage to indicate system preference
        localStorage.removeItem('theme')
      }
    },
    // Method to toggle the theme (e.g., light -> dark -> system -> light)
    toggleTheme() {
      switch (this.theme) {
        case 'light':
          this.theme = 'dark'
          break
        case 'dark':
          this.theme = 'system'
          break
        case 'system':
          // Check current system preference to decide if next is light or dark
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.theme = 'light' // System is dark, next is light
          } else {
            this.theme = 'dark' // System is light, next is dark
          }
          break
        default:
          this.theme = 'system'
      }
      // The watch property will call applyTheme when this.theme changes
    },
  },
  // Optional: Add computed property for button icon based on theme
  computed: {
    themeIcon() {
      if (this.theme === 'dark') {
        return ['fas', 'sun'] // Show sun when in dark mode
      } else if (this.theme === 'light') {
        return ['fas', 'moon'] // Show moon when in light mode
      } else {
        // For system, show something indicating system preference
        // You might need to determine actual system mode here if you want sun/moon
        // Let's just show a desktop icon for simplicity in 'system' mode
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        return isSystemDark ? ['fas', 'sun'] : ['fas', 'moon'] // Show opposite of system current
      }
    },
    // Or a simpler icon toggle (sun/moon only)
    simpleThemeIcon() {
      return this.theme === 'dark' ? ['fas', 'sun'] : ['fas', 'moon']
    },
  },
}
</script>
