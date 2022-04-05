<template>
  <div class="container mx-auto">
    <!-- Hero -->
    <section-hero />

    <base-section :title="$t('about')" class="items-center justify-center">
      <p>
        {{ $t("aboutText") }}
      </p>
      <div class="flex flex-col sm:flex-row mt-2">
        <div class="flex flex-col md:flex-row">
          <base-card transparent class="w-full md:mr-1 py-4">
            <card-feature
              :title="$t('intuitive')"
              icon="mdi-lightbulb-on-outline"
            >
              <p class="md:text-center md:mx-3">
                {{ $t("intuitiveText") }}
              </p>
            </card-feature>
          </base-card>
          <base-card transparent class="w-full md:mx-1 py-4">
            <card-feature :title="$t('fast')" icon="mdi-rocket-launch">
              <p class="md:text-center md:mx-3">
                {{ $t("fastText") }}
              </p>
            </card-feature>
          </base-card>
        </div>
        <div class="flex flex-col md:flex-row md:mt-2">
          <base-card transparent class="w-full md:mr-1 py-4">
            <card-feature :title="$t('responsive')" icon="mdi-responsive">
              <p class="md:text-center md:mx-3">
                {{ $t("responsiveText") }}
              </p>
            </card-feature>
          </base-card>
          <base-card transparent class="w-full md:mx-1 py-4">
            <card-feature :title="$t('reactive')" icon="mdi-alpha-r-circle">
              <p class="md:text-center md:mx-3">
                {{ $t("reactiveText") }}
              </p>
            </card-feature>
          </base-card>
        </div>
      </div>
    </base-section>

    <!-- Portfolio -->
    <base-section
      id="portfolio"
      class="items-center justify-center"
      :title="$t('portfolio')"
    >
      <div class="flex flex-col">
        <base-card class="bg-secondary mx-4">
          <card-text class="flex" no-padding>
            <span
              class="mdi self-center md:self-auto mdi-code-tags text-8xl color-primary mr-2"
            />
            <div class="flex flex-col">
              <h2>Frontend</h2>
              <p>{{ $t("frontendDescription") }}</p>
              <chip-river :values="frontendTechnologies" class="mt-2" />
            </div>
          </card-text>
        </base-card>
        <base-card class="bg-secondary mx-4 mt-4 md:mt-8">
          <card-text class="flex" no-padding>
            <span
              class="mdi self-center md:self-auto mdi-server text-8xl color-primary mr-2"
            />
            <div class="flex flex-col">
              <h2>Backend</h2>
              <p>{{ $t("backendDescription") }}</p>
              <chip-river :values="backendTechnologies" class="mt-2" />
            </div>
          </card-text>
        </base-card>
        <base-card class="bg-secondary mx-4 mt-4 md:mt-8">
          <card-text class="flex" no-padding>
            <span
              class="mdi self-center md:self-auto mdi-database text-8xl color-primary mr-2"
            />
            <div class="flex flex-col">
              <h2>{{ $t("database") }}</h2>
              <p>{{ $t("databaseDescription") }}</p>
              <chip-river :values="databaseTechnologies" class="mt-2" />
            </div>
          </card-text>
        </base-card>
        <base-card class="bg-secondary mx-4 mt-4 md:mt-8">
          <card-text class="flex" no-padding>
            <span
              class="mdi self-center md:self-auto mdi-database text-8xl color-primary mr-2"
            />
            <div class="flex flex-col">
              <h2>{{ $t("language") }}</h2>
              <p>{{ $t("languagesDescription") }}</p>
              <chip-river :values="languages" class="mt-2" />
            </div>
          </card-text>
        </base-card>
      </div>
    </base-section>

    <!-- Projects -->
    <base-section
      class="flex flex-col items-center justify-center"
      :title="$t('projects.title')"
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
      title-alignment="self-center"
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
        <app-alert v-if="message.active" :text="message.text" class="mt-3" :type="message.type" />
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
              v-model="form.address"
              :label="$t('form.email')"
              class="mt-3"
              type="email"
              required
              placeholder="john@mail.com"
              name="email"
            />
            <base-area-text
              v-model="form.body"
              :label="$t('form.message')"
              required
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              class="mt-3"
              name="message"
            />
            <base-button class="mt-3 self-start" :loading="loading">
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
      title-alignment="self-center"
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
        <base-card class="pb-8">
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
        address: '',
        subject: 'Work for me',
        body: ''
      },
      message: { success: true, text: '', active: false },
      loading: false,
      frontendTechnologies: [
        'HTML5',
        'CSS3',
        'SCSS',
        'Tailwind CSS',
        'Bootstrap',
        'Vuetify',
        'Javascript',
        'Vue.js',
        'Angular',
        'Nuxt.js'
      ],
      backendTechnologies: [
        'Javascript',
        'PHP',
        'Node.js',
        'Express.js',
        'Laravel'
      ],
      databaseTechnologies: ['MariaDB', 'MySQL', 'PostgreSQL', 'MongoDB'],
      languages: ['English', 'Español'],
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
          link: 'https://www.reddit.com/user/BetanKore',
          icon: 'mdi-reddit'
        }
      ]
    }
  },
  methods: {
    async submitForm () {
      this.loading = true
      const emailServiceToken = process.env.NUXT_ENV_EMAIL_SERVICE_TOKEN
      const recipientEmail = process.env.NUXT_ENV_RECIPIENT

      const body = {
        ...this.form,
        token: emailServiceToken,
        recipient: recipientEmail
      }

      let response
      try {
        response = await fetch(
          'https://jts-email-service.herokuapp.com/api/email-service',
          {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
      } catch (error) {
        this.displayErrorMessage()
        return
      }
      if (response.error) {
        this.displayErrorMessage()
        return
      }
      this.displaySuccessMessage()
      this.loading = false
    },
    displaySuccessMessage () {
      this.message.success = true
      this.message.text = 'Success! email sent correctly'
      this.message.active = true
      this.loading = false
    },
    displayErrorMessage () {
      this.message.success = false
      this.message.text = 'Error there was a problem sending the email'
      this.message.active = true
      this.loading = false
    }
  }
}
</script>
