<template>
  <section
    id="home"
    class="h-screen py-20 bg-gradient-to-b from-white to-slate-200 dark:from-bg-primary-900 dark:to-slate-900 flex items-center justify-center"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <motion.h1
          :initial="{ opacity: 0, y: -50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, type: 'spring', bounce: 0.5 }"
          class="text-4xl text-black dark:text-white md:text-6xl font-bold mb-6"
        >
          {{ $t('greeting') }}
          <motion.span
            :initial="{ opacity: 0, scale: 0.8 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ delay: 0.3, duration: 0.5, type: 'spring', bounce: 0.6 }"
            class="text-primary-600 dark:text-primary-400"
          >
            Angel Carrillo
          </motion.span>
        </motion.h1>

        <motion.h2
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.5, duration: 0.5 }"
          class="text-black dark:text-white text-2xl md:text-3xl font-light mb-6"
        >
          {{ $t('carreer') }}
        </motion.h2>

        <motion.h2
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.7, duration: 0.5 }"
          class="text-black dark:text-white text-xl md:text-2xl font-light mb-6"
        >
          {{ $t('developer') }}
        </motion.h2>

        <motion.div
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.5, duration: 0.5 }"
          class="flex flex-col sm:flex-row justify-center gap-4"
        >
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <div
              class="py-3 px-8 bg-primary-700 justify-center text-white border-0 p-2 text-base rounded-lg inline-flex items-center hover:bg-primary-900 transition-colors"
            >
              <font-awesome-icon icon="fas fa-envelope" class="mr-2" /> luisvazquez1757@gmail.com
            </div>
            <a
              href="/RESUME.pdf"
              target="_blank"
              class="py-3 px-8 bg-transparent border-2 text-black dark:text-white border-black dark:border-white font-semibold rounded-lg hover:bg-black/4 dark:hover:bg-white/10 transition-colors"
              ><font-awesome-icon class="mr-2" icon="fas fa-file-alt" />
              {{ $t('button.cv_label') }}</a
            >
          </div>
        </motion.div>

        <motion.div
          :initial="{ opacity: 0, y: 40 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 1.1, duration: 0.5 }"
          class="mt-12 flex justify-center space-x-4"
        >
          <motion.a
            :whileHover="{ scale: 1.2, rotate: -10 }"
            :transition="{ type: 'spring', stiffness: 400 }"
            href="https://linkedin.com/in/luvazang"
            target="_blank"
            aria-label="Perfil de LinkedIn"
            class="text-black dark:text-white hover:text-primary-600 dark:hover:text-primary-400 text-2xl transition-colors"
          >
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </motion.a>

          <motion.a
            :whileHover="{ scale: 1.2, rotate: 10 }"
            :transition="{ type: 'spring', stiffness: 400 }"
            href="https://github.com/LuvazAng"
            target="_blank"
            aria-label="Perfil de GitHub"
            class="text-black dark:text-white hover:text-primary-600 dark:hover:text-primary-400 text-2xl transition-colors"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { motion } from 'motion-v'
</script>

<script>
export default {
  name: 'HomeView',
}
</script>
