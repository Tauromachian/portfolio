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
      <div class="flex md:flex-col">
        <base-card class="bg-secondary mx-4">
          <card-text class="flex">
            <span class="mdi mdi-code-tags text-8xl color-primary" />
            <div class="flex flex-col">
              <h2>Backend</h2>
              <p>Part of the app the user doesn't see.</p>
              <chip-river :values="frontendTechnologies" />
            </div>
          </card-text>
        </base-card>
        <base-card class="bg-secondary mx-4">
          <card-text class="flex">
            <span class="mdi mdi-server text-8xl color-primary" />
            <div class="flex flex-col">
              <h2>Frontend</h2>
              <p>The visuals the beauty of the project.</p>
              <chip-river :values="backendTechnologies" />
            </div>
          </card-text>
        </base-card>
        <base-card class="bg-secondary mx-4">
          <card-text class="flex">
            <span class="mdi mdi-database text-8xl color-primary" />
            <div class="flex flex-col">
              <h2>Database</h2>
              <p>They way you save data.</p>
              <chip-river :values="databaseTechnologies" />
            </div>
          </card-text>
        </base-card>
      </div>
    </base-section>

    <!-- Projects -->
    <base-section
      class="flex flex-col items-center justify-center"
      :title="$t('projects')"
    >
      <base-card class="w-full">
        <card-text>
          <project-carousel />
        </card-text>
      </base-card>
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
      <base-card class="mt-8 p-4">
        <h2 class="text-base sm:text-2xl font-bold">
          {{ $t("formTitle") }}
        </h2>
        <form
          id="form"
          name="contact"
          data-netlify="true"
          @submit.prevent="submitForm"
        >
          <div class="flex flex-col">
            <base-input-text
              v-model="form.name"
              :label="$t('form.name')"
              class="mt-3"
              required
              placeholder="John Doe"
              name="name"
            />
            <base-input-text
              v-model="form.email"
              :label="$t('form.email')"
              class="mt-3"
              type="email"
              required
              placeholder="john@mail.com"
              name="email"
            />
            <base-area-text
              v-model="form.message"
              :label="$t('form.message')"
              required
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              class="mt-3"
              name="message"
            />
            <base-button class="mt-3 self-start">
              {{ $t("button.send") }}
            </base-button>
          </div>
        </form>
      </base-card>
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
      repositories = null
    }
    return {
      repositories
    }
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      frontendTechnologies: [
        'HTML5',
        'CSS',
        'SCSS',
        'Tailwindcss',
        'Bootstrap',
        'Javascript',
        'Vue.js',
        'Nuxt.js'
      ],
      backendTechnologies: [
        'Javascript',
        'Express.js',
        'Laravel'
      ],
      databaseTechnologies: [
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
      ]
    }
  },
  methods: {
    async submitForm () {
      const data = new URLSearchParams(this.form).toString()
      await axios.post('/', { 'form-name': 'contact', data }, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
    }
  }
}
</script>
