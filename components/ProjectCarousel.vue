<template>
  <vueper-slides
    class="w-full no-shadow"
    arrows-outside
    transition-speed="250"
    fixed-height="28em"
    bullets-outside
    :breakpoints="breakpoints"
  >
    <vueper-slide
      v-for="(project, index) in projects"
      :key="project.src + index"
    >
      <template #content>
        <card-project
          class="flex-1 col-md-6 col-lg-4 h-full bg-secondary"
          :title="project.title"
          :description="project.description"
          :site-url="project.link"
          :src="project.src"
          :class="{ 'mb-5': index !== projects.length - 1 }"
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
      1200: {
        slideRatio: 1 / 5
      },
      1100: {
        slideRatio: 1 / 4
      },
      900: {
        slideRatio: 3 / 1
      },
      600: {
        slideRatio: 2 / 2,
        arrows: false,
        bulletsOutside: true
      }
    },
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
        description:
            'Diseño de diferentes viviendas y decoraciones exteriores e interiores a la medida.',
        link: 'https://zaru-arquitectura.herokuapp.com/'
      },
      {
        src: 'kanpeki.png',
        title: 'Kanpeki',
        description:
            'Proyecto Santiaguero que abarca la cultura pop asiática y occidental (se incluyen la cultura pop y tradicional japonesa, coreana, china,etc; además de  los videojuegos, comics, literatura en general, la cinefilia y la música de corte mundial)',
        link: 'https://kanpeki-sa.herokuapp.com/'
      }
    ]
  })

}
</script>
