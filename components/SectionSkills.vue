<template>
  <base-section class="items-center justify-center" :title="$t('skills')">
    <div class="flex flex-col">
      <base-card
        v-for="(skill, index) in skills"
        :key="`skill-${index}`"
        class="bg-secondary mx-4 mt-4 md:mt-8"
      >
        <card-text class="flex" no-padding>
          <div>
            <SocialIconsBase
              height="100px"
              width="100px"
              class="w-20 md:w-32 color-primary"
              :icon="skill.icon"
              :color="colorIcons"
            />
          </div>

          <div class="flex flex-col">
            <h3>{{ skill.name }}</h3>
            <p>{{ $t(skill.description) }}</p>
            <chip-river :values="skill.technologies" class="mt-2" />
          </div>
        </card-text>
      </base-card>
    </div>
  </base-section>
</template>

<script>
export default {
  name: "SectionSkills",
  data() {
    return {
      colorIcons: "",
      skills: [
        {
          name: "Frontend",
          icon: "mdiCodeTags",
          description: "frontendDescription",
          technologies: [
            "HTML5",
            "CSS3",
            "SCSS",
            "Tailwind CSS",
            "Bootstrap",
            "Vuetify",
            "Javascript",
            "Typescript",
            "Vue.js",
            "Angular",
            "Nuxt.js",
            "Antdv",
          ],
        },
        {
          name: "Backend",
          icon: "mdiServer",
          description: "backendDescription",
          technologies: [
            "Javascript",
            "PHP",
            "Node.js",
            "Express.js",
            "Laravel",
          ],
        },
        {
          name: "Database",
          icon: "mdiDatabase",
          description: "databaseDescription",
          technologies: ["MariaDB", "MySQL", "PostgreSQL", "MongoDB"],
        },
        {
          name: "Testing",
          icon: "mdiBug",
          description: "testingDescription",
          technologies: ["Mocha", "Chai", "Jest"],
        },
        {
          name: "Languages",
          icon: "mdiTranslate",
          description: "languagesDescription",
          technologies: ["English", "Español"],
        },
      ],
    };
  },
  created() {
    this.getIconColors();

    setInterval(() => {
      this.getIconColors();
    }, 400);
  },
  methods: {
    getIconColors() {
      const theme = "default";
      const themes = [
        { value: "default", text: "Default", iconColor: "#33bebc" },
        { value: "crazy", text: "Crazy", iconColor: "#33bebc" },
        { value: "dark", text: "Dark", iconColor: "#cc925c" },
      ];
      themes.map((e) => {
        if (e.value === theme) {
          this.colorIcons = e.iconColor;
        }
        return 0;
      });
    },
  },
};
</script>

<style></style>
