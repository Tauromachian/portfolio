<template>
  <vueper-slides
    class="w-full no-shadow"
    arrows-outside
    transition-speed="250"
    fixed-height="28em"
    bullets-outside
    :breakpoints="breakpoints"
    :gap="2"
  >
    <vueper-slide
      v-for="(project, index) in projects"
      :key="project.src + index"
    >
      <template #content>
        <card-project
          class="flex-1 h-full bg-secondary w-full"
          :title="project.title"
          :description="project.description"
          :site-url="project.link"
          :src="project.src"
        />
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    breakpoints: {
      4000: {
        visibleSlides: 3,
        slideMultiple: 3
      },
      1100: {
        visibleSlides: 2,
        slideMultiple: 2
      },
      690: {
        visibleSlides: 2,
        slideMultiple: 2,
        arrows: false
      },
      600: {
        arrows: false
      }
    }
  }),
  computed: {
    projects () {
      return [
        {
          src: 'queues.png',
          title: 'Waiting room',
          description: this.$t('projects.description.queues'),
          link: 'https://sancho-restaurant.herokuapp.com/'
        },
        {
          src: 'sancho.png',
          title: 'Sancho Restaurant',
          description: this.$t('projects.description.sanchoRestaurant'),
          link: 'https://sancho-restaurant.herokuapp.com/'
        },
        {
          src: 'zaru.png',
          title: 'Zaru Arquitectura',
          description: this.$t('projects.description.zaruArquitectura'),
          link: 'https://zaru-arquitectura.herokuapp.com/'
        },
        {
          src: 'kanpeki.png',
          title: 'Kanpeki',
          description: this.$t('projects.description.kanpeki'),
          link: 'https://kanpeki-sa.herokuapp.com/'
        },
        {
          src: 'flowers-site.png',
          title: 'Flowers',
          description: this.$t('projects.description.flowers'),
          link: 'https://kanpeki-sa.herokuapp.com/'
        }
      ]
    }
  }
}
</script>
