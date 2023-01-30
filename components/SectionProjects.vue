<template>
  <base-section
    class="flex flex-col items-center justify-center"
    :title="$t('projects.title')"
  >
    <div class="md:columns-3 gap-4 w-100">
      <card-project
        v-for="(project, index) in projects"
        :key="project.src + index"
        class="flex-1 w-full inline-block w-full mb-4"
        :title="project.title"
        :description="project.description"
        :site-url="project.link"
        :src="project.src"
        :alt="project.alt"
      />
    </div>
  </base-section>
</template>

<script>
export default {
  name: "SectionProjects",
  computed: {
    projects() {
      return [
        {
          src: "queues",
          title: "Waiting room",
          description: this.$t("projects.description.queues"),
          link: "https://myqueues.herokuapp.com/",
          alt: "Queues app picture",
        },
        {
          src: "johnson-turbine-support-website",
          title: "Johnson Turbine Support",
          description: this.$t("projects.description.johnson-turbine"),
          link: "https://www.johnsonturbine.com/",
          alt: "Jhonson Turbine company's portfolio site.",
        },
        {
          src: "sancho",
          title: "Sancho Restaurant",
          description: this.$t("projects.description.sanchoRestaurant"),
          link: "https://sancho-restaurant.herokuapp.com/",
          alt: "Site of hispanic food restaurant. Shancho Restaurant.",
        },
        {
          src: "zaru",
          title: "Zaru Arquitectura",
          description: this.$t("projects.description.zaruArquitectura"),
          link: "https://zaruarquitectura.onrender.com/",
          alt: "Site of architectural displays.",
        },
        {
          src: "kanpeki",
          title: "Kanpeki",
          description: this.$t("projects.description.kanpeki"),
          link: "https://kanpeki-sa.herokuapp.com/",
          alt: "Site of all asian culture fanatics",
        },
        {
          src: "flowers-site",
          title: "Flowers",
          description: this.$t("projects.description.flowers"),
          link: "https://kanpeki-sa.herokuapp.com/",
          alt: "Simple template of a possible flower store.",
        },
      ];
    },
  },
};
</script>

<style></style>
