// src/main.js

import './assets/main.css'; // Tu CSS existente

import { createApp } from 'vue';
import App from './App.vue';

// *** IMPORTE DEL ROUTER ***
import router from './router'; // <--- Asegúrate de que la ruta sea correcta

// *** IMPORTE DE VUE-I18N ***
import i18n from './i18n'; // <--- Asegúrate de que la ruta a tu archivo i18n.js sea correcta


/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importa SOLO los iconos sólidos específicos que usas
import { faTimes, faBars, faEnvelope, faFileAlt, faCalendar, faTerminal, faSun, faMoon, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

// Importa SOLO los iconos de marcas específicos que usas
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


// Agrega SOLO los iconos importados a la librería
library.add(faTimes, faBars, faEnvelope, faFileAlt, faCalendar, faTerminal, faAngleDoubleRight, faMoon, faSun, faLinkedinIn, faGithub);


const app = createApp(App);

// *** USO DEL ROUTER ***
app.use(router); // <--- Añade esta línea después de crear la app

// *** USO DE VUE-I18N ***
app.use(i18n); // <--- Añade esta línea para usar i18n, generalmente va junto con otros plugins como router o pinia


app.component('font-awesome-icon', FontAwesomeIcon); // Tu componente de Font Awesome

app.mount('#app');
