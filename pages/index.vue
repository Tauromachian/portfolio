<template>
  <div class="container mx-auto">
    <!-- About -->
    <base-section
      id="about"
      class="items-center justify-center"
      :title="$t('about')"
    >
      <p class="md:mr-20 md:ml-20">
        {{ $t("aboutText") }}
      </p>
      <div class="flex flex-col md:flex-row">
        <card-feature
          :title="$t('intuitive')"
          icon="mdi-lightbulb-on-outline"
          class="mt-7"
        >
          <p class="md:text-center md:mx-3">
            {{ $t("intuitiveText") }}
          </p>
        </card-feature>
        <card-feature :title="$t('fast')" icon="mdi-rocket-launch" class="mt-7">
          <p class="md:text-center md:mx-3">
            {{ $t("fastText") }}
          </p>
        </card-feature>
        <card-feature
          :title="$t('responsive')"
          icon="mdi-responsive"
          class="mt-7"
        >
          <p class="md:text-center md:mx-3">
            {{ $t("responsiveText") }}
          </p>
        </card-feature>
        <card-feature
          :title="$t('reactive')"
          icon="mdi-alpha-r-circle"
          class="mt-7"
        >
          <p class="md:text-center md:mx-3">
            {{ $t("reactiveText") }}
          </p>
        </card-feature>
      </div>
    </base-section>

    <!-- Portfolio -->
    <base-section
      id="portfolio"
      class="items-center justify-center"
      :title="$t('portfolio')"
    >
      <chip-river :values="technologies" />
    </base-section>

    <!-- Projects -->
    <base-section
      class="flex flex-col items-center justify-center"
      :title="$t('projects')"
    >
      <div class="flex flex-col md:flex-row md:flex-wrap">
        <card-project
          v-for="(project, index) in projects"
          :key="project.src + index"
          class="flex-1 lg:mb-0"
          :title="project.title"
          :description="project.description"
          :site-url="project.link"
          :src="project.src"
          :class="{ 'mb-5': index !== projects.length - 1 }"
        />
      </div>
    </base-section>

    <!-- Contacts -->
    <base-section
      id="social-networks"
      class="items-center justify-center"
      :title="$t('contacts')"
    >
      <div class="flex text-7xl md:text-8xl">
        <a
          v-for="(link, index) in socialLinks"
          :key="link + index"
          :href="link.link"
          class="social-link"
        >
          <span :class="`mdi ${link.icon} color-primary`" />
        </a>
      </div>
      <div class="mt-8 shadow-lg p-4 rounded">
        <h2 class="text-base sm:text-2xl font-bold">
          {{ $t("formTitle") }}
        </h2>
        <form>
          <div class="flex flex-col">
            <base-input-text
              :label="$t('form.name')"
              class="mt-3"
              required
              placeholder="Jhon Doe"
            />
            <base-input-text
              :label="$t('form.email')"
              class="mt-3"
              type="email"
              required
              placeholder="jhon@mail.com"
            />
            <base-area-text
              :label="$t('form.name')"
              required
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              class="mt-3"
            />
            <base-button class="mt-3 self-start">
              {{ $t("button.send") }}
            </base-button>
          </div>
        </form>
      </div>
    </base-section>

    <!-- Repositories -->
    <base-section
      v-if="repositories"
      id="repositories"
      class="items-center justify-center"
      :title="$t('repositories')"
    >
      <div class="relative">
        <base-ball
          class="bg-primary"
          right="-30px"
          top="-20px"
          :z-index="-10"
          medium
        />
        <base-ball
          class="bg-primary"
          right="30px"
          top="20px"
          :z-index="-10"
          small
        />
        <base-card class="pb-8" glass>
          <card-text class="flex flex-col justify-center">
            <base-link
              v-for="(repository, index) in repositories"
              :key="repository.name + index"
              :href="repository.html_url"
              class="mt-1 px-2 rounded"
              :text="repository.name"
              icon
            />
          </card-text>
        </base-card>
        <base-ball
          class="bg-primary"
          left="30px"
          bottom="-20px"
          :z-index="-10"
          small
        />
      </div>
    </base-section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Index',
  async asyncData () {
    const token = process.env.NUXT_ENV_GITHUB_TOKEN
    let repositories
    try {
      const { data } = await axios.get(
        'https://api.github.com/users/tauromachian/repos',
        {
          headers: {
            authorization: `token ${token}`
          }
        }
      )
      repositories = data
    } catch (error) {
      console.error(error)
      repositories = null
    }
    return {
      repositories
    }
  },
  data () {
    return {
      technologies: [
        'Javascript',
        'Vue.js',
        'Laravel',
        'Express.js',
        'Bootstrap',
        'HTML5',
        'CSS',
        'SCSS',
        'MariaDB',
        'MySQL',
        'PostgreSQL',
        'MongoDB'
      ],
      socialLinks: [
        {
          link: 'https://www.linkedin.com/in/jose-garcia-888941180/',
          icon: 'mdi-linkedin'
        },
        {
          link: 'https://stackoverflow.com/users/10824037/jogarcia',
          icon: 'mdi-stack-overflow'
        },
        {
          link: 'https://github.com/Tauromachian',
          icon: 'mdi-github'
        },
        {
          link: 'https://t.me/BetanKore',
          icon: 'mdi-telegram'
        },
        {
          link: 'https://www.facebook.com/josecarlos.garciaalvarez.9083',
          icon: 'mdi-facebook'
        }
      ],

      projects: [
        {
          src: 'sancho.png',
          title: 'Sancho Restaurant',
          description:
            'Sancho Restaurant, especialidades de la deliciosa cocina creada con el ingenio y la pasión, inspirados en los fantásticos sabores de España. ',
          link: 'https://sancho-restaurant.herokuapp.com/'
        },
        {
          src: 'zaru.png',
          title: 'Zaru Arquitectura',
          description: 'Diseño de diferentes viviendas y decoraciones exteriores e interiores a la medida.',
          link: 'https://zaru-arquitectura.herokuapp.com/'
        },
        {
          src: 'kanpeki.png',
          title: 'Kanpeki',
          description: 'Proyecto Santiaguero que abarca la cultura pop asiática y occidental (se incluyen la cultura pop y tradicional japonesa, coreana, china,etc; además de  los videojuegos, comics, literatura en general, la cinefilia y la música de corte mundial)',
          link: 'https://kanpeki-sa.herokuapp.com/'
        }
      ]
    }
  }
}
</script>
