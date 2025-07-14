<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-bg-primary-900">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <h1 class="text-lg text-black dark:text-white font-bold">LuvazAng</h1>
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
          ref="menuButton"
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
    <div v-if="menuOpen" ref="mobileMenu" class="md:hidden bg-white dark:bg-bg-primary-900">
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
export default {
  name: 'AppHeader',
  components: {},
  data() {
    return {
      menuOpen: false,
      theme: 'system', // Default to system preference
    }
  },
  mounted() {
    // On page load, determine the initial theme
    this.getInitialTheme()
  },
  watch: {
    theme(newTheme) {
      this.applyTheme(newTheme)
    },
    menuOpen(newValue) {
      if (newValue) {
        document.addEventListener('click', this.handleClickOutside)
      } else {
        document.removeEventListener('click', this.handleClickOutside)
      }
    },
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    },
    handleClickOutside(event) {
      const menuElement = this.$refs.mobileMenu
      const buttonElement = this.$refs.menuButton
      const target = event.target

      if (
        this.menuOpen &&
        buttonElement &&
        !buttonElement.contains(target) &&
        menuElement &&
        !menuElement.contains(target)
      ) {
        this.closeMenu()
      }
    },
    getInitialTheme() {
      if (localStorage.theme) {
        this.theme = localStorage.theme
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.theme = 'system'
      } else {
        this.theme = 'system'
      }
      this.applyTheme(this.theme)
    },
    applyTheme(theme) {
      const htmlElement = document.documentElement

      if (theme === 'dark') {
        htmlElement.classList.add('dark')
        localStorage.theme = 'dark'
      } else if (theme === 'light') {
        htmlElement.classList.remove('dark')
        localStorage.theme = 'light'
      } else {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          htmlElement.classList.add('dark')
        } else {
          htmlElement.classList.remove('dark')
        }
        localStorage.removeItem('theme')
      }
    },
    toggleTheme() {
      switch (this.theme) {
        case 'light':
          this.theme = 'dark'
          break
        case 'dark':
          this.theme = 'system'
          break
        case 'system':
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.theme = 'light'
          } else {
            this.theme = 'dark'
          }
          break
        default:
          this.theme = 'system'
      }
    },

    setLanguage(lang) {
      // Use the i18n instance directly instead of a separate function
      this.$i18n.locale = lang
      // Store the language preference in localStorage
      localStorage.setItem('locale', lang)
    },
  },
  computed: {
    themeIcon() {
      if (this.theme === 'dark') {
        return ['fas', 'sun']
      } else if (this.theme === 'light') {
        return ['fas', 'moon']
      } else {
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        return isSystemDark ? ['fas', 'sun'] : ['fas', 'moon']
      }
    },
    simpleThemeIcon() {
      return this.theme === 'dark' ? ['fas', 'sun'] : ['fas', 'moon']
    },
    currentLocale() {
      return this.$i18n.locale
    },
  },
}
</script>
