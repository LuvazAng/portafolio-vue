<template>
  <section
    id="about"
    class="py-20 bg-gradient-to-b from-slate-200 to-white dark:from-slate-900 dark:to-bg-primary-900"
  >
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16 relative">
        {{ $t('header.about') }}
        <span
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-0.5 bg-primary-600 dark:bg-primary-400"
          aria-hidden="true"
        ></span>
      </h2>
      <div class="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
        <div class="w-48 h-48 relative shrink-0">
          <img
            src="@/assets/img/2023-12-15_SPOT2_15.webp"
            alt="Mi foto"
            class="rounded-full object-cover w-full h-full shadow-lg"
          />
        </div>
        <div class="max-w-xl text-center md:text-left">
          <p class="text-lg text-black dark:text-white">
            {{ $t('description_1_about_me') }}
            <span class="text-primary-600 dark:text-primary-400 font-semibold">{{
              $t('carreer')
            }}</span>
            {{ $t('description_2_about_me') }}
            <span class="text-primary-600 dark:text-primary-400 font-semibold">
              {{ $t('specialty') }}</span
            >. {{ $t('description_3_about_me') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>
