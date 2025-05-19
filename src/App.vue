<template>
  <div class="min-h-screen flex flex-col bg-slate-200 dark:bg-slate-900 dark:text-slate-200">
    <!-- Header Section -->
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-grow">
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ExtrasSection />
      <ContactSection />
    </main>

    <!-- Footer Section -->
    <AppFooter />
  </div>
</template>

<script>
// Importa tus componentes de sección
import HomeSection from './components/sections/Home.vue'
import AboutSection from './components/sections/About.vue'
import ExperienceSection from './components/sections/Experience.vue'
import SkillsSection from './components/sections/Skills.vue'
import EducationSection from './components/sections/Education.vue'
import ExtrasSection from './components/sections/Extras.vue'
import ContactSection from './components/sections/contact.vue'

import AppHeader from './layout/Header.vue'
import AppFooter from './layout/Footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter,

    // Registra los componentes de sección
    HomeSection,
    AboutSection,
    ExperienceSection,
    SkillsSection,
    EducationSection,
    ExtrasSection,
    ContactSection,
  },
}
</script>
