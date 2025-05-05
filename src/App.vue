<template>
  <div class="min-h-screen flex flex-col bg-slate-900 text-slate-200">
    <!-- Header Section -->
    <header class="sticky top-0 z-50 bg-bg-primary-900">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <div class="text-lg text-white">LuvazAng</div>
          <nav class="hidden md:block">
            <ul class="flex space-x-6">
              <li><a href="#home" class="hover:text-primary-500 transition-colors">Inicio</a></li>
              <li>
                <a href="#about" class="hover:text-primary-500 transition-colors">Sobre mí</a>
              </li>
              <li>
                <a href="#experience" class="hover:text-primary-500 transition-colors"
                  >Experiencia</a
                >
              </li>
              <li>
                <a href="#skills" class="hover:text-primary-500 transition-colors"
                  >Habilidades técnicas</a
                >
              </li>
              <li>
                <a href="#education" class="hover:text-primary-500 transition-colors">Educación</a>
              </li>
              <li><a href="#extras" class="hover:text-primary-500 transition-colors">Extras</a></li>
            </ul>
          </nav>
          <button
            class="md:hidden text-white cursor-pointer hover:text-primary-500 transition-colors"
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
      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="md:hidden bg-bg-primary-900">
        <ul class="py-3 px-4 space-y-3">
          <li>
            <a
              href="#home"
              @click="closeMenu"
              class="block hover:text-primary-500 transition-colors"
              >Inicio</a
            >
          </li>
          <li>
            <a
              href="#about"
              @click="closeMenu"
              class="block hover:text-primary-500 transition-colors"
              >Sobre mí</a
            >
          </li>
          <li>
            <a
              href="#experience"
              @click="closeMenu"
              class="block hover:text-primary-500 transition-colors"
              >Experiencia</a
            >
          </li>
          <li>
            <a
              href="#skills"
              @click="closeMenu"
              class="block hover:text-primary-500 transition-colors"
              >Habilidades técnicas</a
            >
          </li>
          <li>
            <a
              href="#education"
              @click="closeMenu"
              class="block hover:text-primary-500 transition-colors"
              >Educación</a
            >
          </li>
          <li>
            <a
              href="#extras"
              @click="closeMenu"
              class="block hover:text-primary-500 transition-colors"
              >Extras</a
            >
          </li>
        </ul>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Hero Section -->
      <section
        id="home"
        class="h-screen py-20 bg-gradient-to-b from-bg-primary-900 to-bg-slate-900 text-white flex items-center justify-center"
      >
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
              ¡Hola!, soy <span class="text-primary-400">Angel Carrillo</span>
            </h1>
            <h2 class="text-2xl md:text-3xl font-light mb-6">
              Ingeniero en Sistemas Computacionales
            </h2>
            <h2 class="text-xl md:text-2xl font-light mb-6">Desarrollador Full Stack</h2>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <div
                class="bg-primary-800 justify-center text-white border-0 p-2 text-base rounded-lg inline-flex items-center hover:bg-primary-700 transition-colors"
              >
                <font-awesome-icon icon="fas fa-envelope" class="mr-2" /> luisvazquez1757@gmail.com
              </div>
              <a
                href="/RESUME.pdf"
                target="_blank"
                class="py-3 px-8 bg-transparent border-2 border-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                ><font-awesome-icon class="mr-2" icon="fas fa-file-alt" /> CV</a
              >
            </div>
            <div class="mt-12 flex justify-center space-x-4">
              <a
                href="https://linkedin.com/in/luvazang"
                target="_blank"
                aria-label="Perfil de LinkedIn"
                class="text-2xl hover:text-primary-400 transition-colors"
                ><font-awesome-icon :icon="['fab', 'linkedin-in']"
              /></a>
              <a
                href="https://github.com/LuvazAng"
                target="_blank"
                aria-label="Perfil de GitHub"
                class="text-2xl hover:text-primary-400 transition-colors"
                ><font-awesome-icon :icon="['fab', 'github']"
              /></a>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-16 relative">
            Sobre mí
            <span
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-0.5 bg-primary-400"
            ></span>
          </h2>
          <div
            class="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto"
          >
            <div class="w-48 h-48 relative shrink-0">
              <img
                src="@/assets/img/2023-12-15_SPOT2_15.webp"
                alt="Mi foto"
                class="rounded-full object-cover w-full h-full shadow-lg"
              />
            </div>
            <div class="max-w-xl text-center md:text-left">
              <p class="text-lg">
                ¡Hola! Bienvenido/a a mi pequeño rincón digital. Soy Luis Angel Vazquez Carrillo
                <span class="text-primary-400 font-semibold"
                  >Ingeniero en Sistemas Computacionales</span
                >
                con especialidad en
                <span class="text-primary-400 font-semibold"> Desarrollo Web Empresarial</span>. Con
                2 años de experiencia en desarrollo de software, tengo un enfoque en la creación de
                aplicaciones web modernas y eficientes. Me apasiona aprender nuevas tecnologías y
                aplicarlas en proyectos nuevos
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="py-20 bg-gradient-to-b from-slate-900 to-bg-primary-900">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-16 relative">
            Experiencia profesional
            <span
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-0.5 bg-primary-400"
            ></span>
          </h2>
          <div class="max-w-3xl mx-auto space-y-12">
            <!-- SECCIÓN 1  -->
            <div class="bg-slate-700 rounded-lg shadow-lg p-6 relative">
              <div class="absolute -left-3 top-6 w-6 h-6 bg-primary-400 rounded-full"></div>
              <h3 class="text-xl font-bold text-primary-400">Tecnico informatico</h3>
              <h4 class="text-lg mb-1">
                Unidad Universitaria de Secuenciacion Masiva y Bioinformatica (UUSMB)
              </h4>
              <p class="text-sm text-primary-200 mb-4 flex items-center">
                <font-awesome-icon class="mr-2" icon="fas fa-calendar" />
                2025 - Presente
              </p>
              <p class="mb-4">
                Desarrollo de chatbot para la atención al cliente y soporte en la plataforma de
                cottización de costos en servicios de Secuenciacion.
              </p>
              <div class="flex flex-wrap gap-2 mt-3">
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >Next.js</span
                >
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >MongoDB</span
                >
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >FastAPI</span
                >
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >IA</span
                >
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >LLM</span
                >
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >Python</span
                >
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >ChromaDB</span
                >
              </div>
            </div>
            <!-- SECCIÓN 2  -->
            <div class="bg-slate-700 rounded-lg shadow-lg p-6 relative">
              <div class="absolute -left-3 top-6 w-6 h-6 bg-primary-400 rounded-full"></div>
              <h3 class="text-xl font-bold text-primary-400">Desarrollador full stack</h3>
              <h4 class="text-lg mb-1">
                Universidad de Investigación e Innovación de México (UIIX)
              </h4>
              <p class="text-sm text-primary-200 mb-4 flex items-center">
                <font-awesome-icon class="mr-2" icon="fas fa-calendar" />
                2024 AGO - 2024 DIC
              </p>
              <p class="mb-4">
                Desarrollo de un sistema de control de ingresos y notificaciones de adeudos
                economicos y reportes estudiantiles.
              </p>
              <div class="flex flex-wrap gap-2 mt-3">
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >Laravel</span
                >
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >PHP</span
                >
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >MySQL</span
                >
              </div>
            </div>
            <!-- SECCIÓN 3  -->
            <div class="bg-slate-700 rounded-lg shadow-lg p-6 relative">
              <div class="absolute -left-3 top-6 w-6 h-6 bg-primary-400 rounded-full"></div>
              <h3 class="text-xl font-bold text-primary-00">Verano de Investigación Científica</h3>
              <h4 class="text-lg mb-1">
                Centro Nacional de Investigación y Desarrollo Tecnológico (CENIDET)
              </h4>
              <p class="text-sm text-primary-200 mb-4 flex items-center">
                <font-awesome-icon class="mr-2" icon="fas fa-calendar" />
                2024 MAYO - 2024 JULIO
              </p>
              <p class="mb-4">
                Desarrollo de chatbot para el Instituto Tecnologico de Zacatepec (ITZ) para la
                resolución de dudas de los estudiantes del instituto
              </p>
              <div class="flex flex-wrap gap-2 mt-3">
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >HTML</span
                >
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >CSS</span
                >
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >JavaScript</span
                >
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >Flask (python)</span
                >
                <span
                  class="px-3 py-1 font-semibold bg-slate-600 text-slate-200 text-xs rounded-full"
                  >LLM</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="py-20 bg-gradient-to-b from-bg-primary-900 to-slate-900">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-16 relative text-white">
            Habilidades técnicas
            <span
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-0.5 bg-primary-400"
              aria-hidden="true"
            ></span>
          </h2>
          <div class="rounded-lg shadow-lg p-4 sm:p-6 max-w-4xl mx-auto">
            <ul
              class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 text-center"
            >
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <Html5Icon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="HTML5 Icon"
                ></Html5Icon>
                <p class="text-xs sm:text-sm text-white">HTML5</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <Css3Icon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="CSS3 Icon"
                ></Css3Icon>
                <p class="text-xs sm:text-sm text-white">CSS3</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <JsIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="JavaScript Icon"
                ></JsIcon>
                <p class="text-xs sm:text-sm text-white">JavaScript</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <VuejsIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="Vue.js Icon"
                ></VuejsIcon>
                <p class="text-xs sm:text-sm text-white">Vue.js</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <ReactIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="React Icon"
                ></ReactIcon>
                <p class="text-xs sm:text-sm text-white">React</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <BootstrapIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="Bootstrap Icon"
                ></BootstrapIcon>
                <p class="text-xs sm:text-sm text-white">Bootstrap</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <TailwindCssIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="Tailwind CSS Icon"
                ></TailwindCssIcon>
                <p class="text-xs sm:text-sm text-white">Tailwind CSS</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <JavaIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="Java Icon"
                ></JavaIcon>
                <p class="text-xs sm:text-sm text-white">Java</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <SpringIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="Spring Boot Icon"
                ></SpringIcon>
                <p class="text-xs sm:text-sm text-white">Spring Boot</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <PythonIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="Python Icon"
                ></PythonIcon>
                <p class="text-xs sm:text-sm text-white">Python</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <DjangoIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="Django Icon"
                ></DjangoIcon>
                <p class="text-xs sm:text-sm text-white">Django</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <PhpIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="PHP Icon"
                ></PhpIcon>
                <p class="text-xs sm:text-sm text-white">PHP</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <MongoDBIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="MongoDB Icon"
                ></MongoDBIcon>
                <p class="text-xs sm:text-sm text-white">MongoDB</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <MysqlIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="MySQL Icon"
                ></MysqlIcon>
                <p class="text-xs sm:text-sm text-white">MySQL</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <PostgresqlIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="PostgreSQL Icon"
                ></PostgresqlIcon>
                <p class="text-xs sm:text-sm text-white">PostgreSQL</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <GitIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="Git Icon"
                ></GitIcon>
                <p class="text-xs sm:text-sm text-white">Git</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <GithubIcon
                  class="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1"
                  aria-hidden="true"
                  alt="GitHub Icon"
                ></GithubIcon>
                <p class="text-xs sm:text-sm text-white">GitHub</p>
              </li>
              <li
                class="p-2 hover:bg-slate-700 rounded-lg transition-colors flex flex-col items-center justify-center"
              >
                <font-awesome-icon
                  :icon="['fas', 'terminal']"
                  class="text-white text-2xl sm:text-4xl mb-1"
                  aria-hidden="true"
                  title="Command Line Interface"
                />
                <p class="text-xs sm:text-sm text-white">CLI</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section id="education" class="py-20 bg-gradient-to-b from-slate-900 to-bg-primary-900">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-16 relative">
            Educación
            <span
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-0.5 bg-primary-400"
            ></span>
          </h2>
          <div class="max-w-3xl mx-auto space-y-8">
            <div class="bg-slate-700 rounded-lg shadow-lg p-6 flex flex-col sm:flex-row">
              <div class="mb-4 sm:mb-0 sm:mr-6 flex justify-center">
                <TecnmIcon
                  class="w-16 h-16 text-white"
                  aria-hidden="true"
                  alt="TecNM Icon"
                ></TecnmIcon>
              </div>
              <div>
                <h3 class="text-xl font-bold text-primary-400 mb-1 text-center sm:text-left">
                  Ingeniería en Sistemas Computacionales
                </h3>
                <h4 class="text-lg mb-1 text-center sm:text-left">
                  Tecnologico Nacional de México campus Zacatepec
                </h4>
                <p
                  class="text-sm text-primary-200 mb-4 flex items-center justify-center sm:justify-start"
                >
                  <font-awesome-icon class="mr-2" icon="fas fa-calendar" /> 2020 - 2025
                </p>
                <p class="text-center sm:text-left">
                  Estudios enfocados en programación, algoritmos, estructuras de datos y desarrollo
                  de software.
                </p>
              </div>
            </div>

            <div class="bg-slate-700 rounded-lg shadow-lg p-6 flex flex-col sm:flex-row">
              <div class="mb-4 sm:mb-0 sm:mr-6 flex justify-center">
                <OneIcon
                  class="w-16 h-16 text-white"
                  aria-hidden="true"
                  alt="Oracle One Icon"
                ></OneIcon>
              </div>
              <div>
                <h3 class="text-xl font-bold text-primary-400 mb-1 text-center sm:text-left">
                  Programa Oracle One Education (ONE)
                </h3>
                <h4 class="text-lg mb-1 text-center sm:text-left">Oracle + Alura Laram</h4>
                <p
                  class="text-sm text-primary-200 mb-4 flex items-center justify-center sm:justify-start"
                >
                  <font-awesome-icon class="mr-2" icon="fas fa-calendar" /> 2024 (4 meses)
                </p>
                <p class="text-center sm:text-left">
                  Formación intensiva en desarrollo web, incluyendo HTML, CSS3, JavaScript, Java con
                  Programación Orientada a Objetos Formación intensiva en el desarrollo web moderno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Extras Section -->
      <section id="extras" class="py-20 bg-gradient-to-b from-bg-primary-900 to-slate-900">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-16 relative">
            Extras
            <span
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-0.5 bg-primary-400"
            ></span>
          </h2>
          <div class="max-w-3xl mx-auto">
            <div class="bg-slate-700 rounded-lg shadow-lg p-6 w-full">
              <h3 class="text-xl font-bold mb-6 flex items-center">
                <i class="fa-solid fa-microphone-alt text-primary-400 mr-3 text-3xl"></i>
                Eventos y participaciones
              </h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <font-awesome-icon class="mr-2 mt-1" icon="fas fa-calendar" />
                  <div>
                    <h4 class="font-semibold text-md">Conferencia: Semana académica ITZ</h4>
                    <p class="text-md text-primary-200">Ponente, 2024</p>
                    <p class="text-md mt-1">
                      Fui ponente en la conferencia "Creación de un Chatbot para la atención de
                      dudas de usuarios" organizado por el Instituto Tecnologico de Zacatepec, donde
                      expliqué a los estudiantes del Departamento de Sistemas Computacionales el
                      proceso de desarrollo de un chatbot.
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <font-awesome-icon class="mr-2 mt-1" icon="fas fa-calendar" />
                  <div>
                    <h4 class="font-semibold text-md">Hackathon HackMorelos</h4>
                    <p class="text-md text-primary-200">Participante, 2024</p>
                    <p class="text-md mt-1">
                      Participé en el desarrollo de un prototipo de aplicación utilizando Machine
                      Learning e Inteligencia Artificial para predecir enfermedades basadas en el
                      estilo de vida del usuario. El desarrollo se completó durante un evento de 48
                      horas.
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <font-awesome-icon class="mr-2 mt-1" icon="fas fa-calendar" />
                  <div>
                    <h4 class="font-semibold text-md">
                      Verano Internacional de Investigación en Ciencia y Tecnología del TecNM
                      (VIICyT)
                    </h4>
                    <p class="text-md text-primary-200">Participante, 2024</p>
                    <p class="text-md mt-1">
                      Colaboré en un proyecto propuesto por CENIDET para desarrollar un chatbot que
                      atendiera las dudas de los usuarios del Instituto Tecnológico de Zacatepec,
                      con el objetivo de automatizar la resolución de consultas frecuentes y mejorar
                      la experiencia de los estudiantes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer Section -->
    <footer class="bg-gradient-to-b from-slate-900 to-bg-primary-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <h2 class="text-2xl font-bold mb-4">LUVAZANG</h2>
            <p class="mb-6 text-slate-300">
              Desarrollador de aplicaciones web apasionado por crear soluciones digitales
              innovadoras y funcionales.
            </p>
            <div class="flex space-x-4">
              <a
                href="https://linkedin.com/in/luvazang"
                target="_blank"
                aria-label="Perfil de LinkedIn"
                class="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
              <a
                href="https://github.com/LuvazAng"
                target="_blank"
                aria-label="Perfil de GitHub"
                class="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul class="space-y-2">
              <li>
                <a href="#home" class="text-slate-300 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#about" class="text-slate-300 hover:text-white transition-colors"
                  >Sobre mí</a
                >
              </li>
              <li>
                <a href="#experience" class="text-slate-300 hover:text-white transition-colors"
                  >Experiencia</a
                >
              </li>
              <li>
                <a href="#skills" class="text-slate-300 hover:text-white transition-colors"
                  >Habilidades técnicas</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Contacto</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <i class="fa-solid fa-envelope text-indigo-400 mr-3"></i>
                <span class="text-slate-300">luisvazquez1757@gmail.com</span>
              </li>
              <li class="flex items-center">
                <i class="fa-solid fa-location-dot text-indigo-400 mr-3"></i>
                <span class="text-slate-300">Cuernavaca, Morelos</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {{ new Date().getFullYear() }} LuvazAng. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Html5Icon from './assets/icons/html5.vue'
import Css3Icon from './assets/icons/css3.vue'
import JsIcon from './assets/icons/js.vue'
import VuejsIcon from './assets/icons/vuejs.vue'
import ReactIcon from './assets/icons/react.vue'
import BootstrapIcon from './assets/icons/bootstrap.vue'
import TailwindCssIcon from './assets/icons/tailwindcss.vue'
import JavaIcon from './assets/icons/java.vue'
import SpringIcon from './assets/icons/spring.vue'
import PythonIcon from './assets/icons/python.vue'
import DjangoIcon from './assets/icons/django.vue'
import PhpIcon from './assets/icons/php.vue'
import MongoDBIcon from './assets/icons/mongodb.vue'
import MysqlIcon from './assets/icons/mysql.vue'
import PostgresqlIcon from './assets/icons/postgresql.vue'
import GitIcon from './assets/icons/git.vue'
import GithubIcon from './assets/icons/github.vue'
import TecnmIcon from './assets/icons/tecnm.vue'
import OneIcon from './assets/icons/one.vue'

export default {
  components: {
    MysqlIcon,
    Html5Icon,
    Css3Icon,
    JsIcon,
    VuejsIcon,
    ReactIcon,
    BootstrapIcon,
    JavaIcon,
    SpringIcon,
    PythonIcon,
    DjangoIcon,
    PhpIcon,
    MongoDBIcon,
    GitIcon,
    GithubIcon,
    PostgresqlIcon,
    TailwindCssIcon,
    TecnmIcon,
    OneIcon,
  },
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    },
  },
}
</script>
