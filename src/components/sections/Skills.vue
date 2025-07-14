<template>
  <section
    id="skills"
    class="py-20 bg-gradient-to-b from-slate-200 to-white dark:from-slate-900 dark:to-bg-primary-900"
  >
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16 relative text-black dark:text-white">
        {{ $t('header.skills') }}
        <span
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-0.5 bg-primary-600 dark:bg-primary-400"
          aria-hidden="true"
        ></span>
      </h2>
      <div class="p-4 sm:p-6 max-w-4xl mx-auto">
        <ul
          class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 text-center"
        >
          <li
            v-for="(skill, idx) in skills"
            :key="idx"
            drag
            :dragConstraints="constraintsRef"
            :dragElastic="0.2"
            class="p-2 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
          >
            <component
              v-if="skill.component"
              :is="skill.component"
              class="w-8 h-8 sm:w-10 sm:h-10 text-black dark:text-white mb-1"
              aria-hidden="true"
              :alt="skill.alt"
            />
            <font-awesome-icon
              v-else
              :icon="skill.icon"
              class="text-black dark:text-white text-2xl sm:text-4xl mb-1"
              aria-hidden="true"
              :title="skill.alt"
            />
            <p class="text-xs sm:text-sm text-black dark:text-white font-semibold pt-2">
              {{ skill.name }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import Html5Icon from '@/assets/icons/html5.vue'
import Css3Icon from '@/assets/icons/css3.vue'
import JsIcon from '@/assets/icons/js.vue'
import VuejsIcon from '@/assets/icons/vuejs.vue'
import BootstrapIcon from '@/assets/icons/bootstrap.vue'
import TailwindCssIcon from '@/assets/icons/tailwindcss.vue'
import JavaIcon from '@/assets/icons/java.vue'
import SpringIcon from '@/assets/icons/spring.vue'
import PythonIcon from '@/assets/icons/python.vue'
import MysqlIcon from '@/assets/icons/mysql.vue'
import PostgresqlIcon from '@/assets/icons/postgresql.vue'
import GitIcon from '@/assets/icons/git.vue'
import GithubIcon from '@/assets/icons/github.vue'

const skills = [
  { name: 'HTML5', component: Html5Icon, alt: 'HTML5 Icon' },
  { name: 'CSS3', component: Css3Icon, alt: 'CSS3 Icon' },
  { name: 'JavaScript', component: JsIcon, alt: 'JavaScript Icon' },
  { name: 'Vue.js', component: VuejsIcon, alt: 'Vue.js Icon' },
  { name: 'Bootstrap', component: BootstrapIcon, alt: 'Bootstrap Icon' },
  { name: 'Tailwind CSS', component: TailwindCssIcon, alt: 'Tailwind CSS Icon' },
  { name: 'Java', component: JavaIcon, alt: 'Java Icon' },
  { name: 'Python', component: PythonIcon, alt: 'Python Icon' },
  { name: 'Spring Boot', component: SpringIcon, alt: 'Spring Boot Icon' },
  { name: 'MySQL', component: MysqlIcon, alt: 'MySQL Icon' },
  { name: 'PostgreSQL', component: PostgresqlIcon, alt: 'PostgreSQL Icon' },
  { name: 'Git', component: GitIcon, alt: 'Git Icon' },
  { name: 'GitHub', component: GithubIcon, alt: 'GitHub Icon' },
  { name: 'CLI', component: null, icon: ['fas', 'terminal'], alt: 'Command Line Interface' },
]
</script>

<script>
export default {
  name: 'SkillsView',
}
</script>
