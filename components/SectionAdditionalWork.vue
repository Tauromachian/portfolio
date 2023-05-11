<template>
  <base-section :title="$t('additionalWork.title')">
    <div class="sm:columns-2 md:columns-3 gap-4 w-100">
      <div
        v-for="(project, index) in projects"
        :key="`project-card-${index}`"
        class="inline-block"
      >
        <card-project
          class="w-full w-full mb-4"
          :title="project.title"
          :description="project.description"
          :site-url="project.link"
          :src="project.src"
          :alt="project.alt"
        />
      </div>
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
          src: "stack-overflow-profile",
          title: "StackOverflow",
          link: "https://stackoverflow.com/users/10824037/jogarcia",
          alt: "Profile picture to StackOverflow",
        },
        {
          src: "github-profile",
          title: "GitHub",
          link: "https://github.com/Tauromachian",
          alt: "Profile picture to GitHub",
        },
        {
          src: "medium-profile",
          title: "Medium",
          link: "https://medium.com/@jogarcia",
          alt: "Profile picture to Medium",
        },
      ];
    },
  },
};
</script>

<style></style>
