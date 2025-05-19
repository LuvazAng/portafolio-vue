<template>
  <section
    id="contact"
    class="py-20 bg-gradient-to-b from-white to-slate-200 dark:from-bg-primary-900 dark:to-slate-900"
  >
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16 relative">
        {{ $t('labels.contact_me') }}
        <span
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-0.5 bg-primary-600 dark:bg-primary-400"
          aria-hidden="true"
        ></span>
      </h2>
      <!-- Contact info in a row -->
      <div
        class="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto mb-12 text-center"
      >
        <!-- Correo -->
        <div class="flex flex-col items-center gap-2">
          <span class="text-lg font-bold text-primary-600 dark:text-primary-400">{{
            $t('labels.email')
          }}</span>
          <a
            href="mailto:luisvazquez1757@gmail.com"
            class="text-black dark:text-white underline hover:text-primary-600 dark:hover:text-primary-400"
          >
            luisvazquez1757@gmail.com
          </a>
        </div>
        <!-- Redes Sociales -->
        <div class="flex flex-col items-center gap-2">
          <span class="text-lg font-bold text-primary-600 dark:text-primary-400">{{
            $t('labels.social_media')
          }}</span>
          <div class="flex gap-4">
            <a
              href="https://github.com/luisvazquez1757"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              class="text-2xl text-black dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a
              href="https://linkedin.com/in/luisvazquez1757"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              class="text-2xl text-black dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
            >
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
          </div>
        </div>
      </div>
      <!-- Frase motivadora al final -->
      <motion.div
        :initial="{ opacity: 0, scale: 0.5 }"
        :while-in-view="{ opacity: 1, scale: 1 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 1.5, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }"
        class="flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        <p class="text-xl font-semibold text-primary-700 dark:text-primary-300 mb-4 italic">
          "{{ $t('labels.phrase_author') }}"
        </p>
        <p class="text-base text-slate-700 dark:text-slate-300 w-full text-center">— Walt Disney</p>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { motion } from 'motion-v'
</script>

<script>
export default {
  name: 'ContactView',
}
</script>
