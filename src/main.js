import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importa SOLO los iconos sólidos específicos que usas
import { faTimes, faBars, faEnvelope, faFileAlt, faCalendar, faTerminal } from '@fortawesome/free-solid-svg-icons';

// Importa SOLO los iconos de marcas específicos que usas
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


// Agrega SOLO los iconos importados a la librería
library.add(faTimes, faBars, faEnvelope, faFileAlt, faCalendar, faTerminal, faLinkedinIn, faGithub);


const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
