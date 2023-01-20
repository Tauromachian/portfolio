<template>
  <base-section
    id="portfolio"
    class="items-center justify-center"
    :title="$t('skills')"
  >
    <div class="flex flex-col">
      <base-card class="bg-secondary mx-4 mt-4 md:mt-8">
        <card-text class="flex" no-padding>
          <div style="display: flex">
            <SocialIconsBase
              height="100px"
              width="100px"
              icon="mdiCodeTags"
              :color="colorIcons"
            />
          </div>

          <div class="flex flex-col">
            <h2>Frontend</h2>
            <p>{{ $t("frontendDescription") }}</p>
            <chip-river :values="frontendTechnologies" class="mt-2" />
          </div>
        </card-text>
      </base-card>
      <base-card class="bg-secondary mx-4 mt-4 md:mt-8">
        <card-text class="flex" no-padding>
          <div style="display: flex">
            <SocialIconsBase
              height="100px"
              width="100px"
              icon="mdiServer"
              :color="colorIcons"
            />
          </div>
          <div class="flex flex-col">
            <h2>Backend</h2>
            <p>{{ $t("backendDescription") }}</p>
            <chip-river :values="backendTechnologies" class="mt-2" />
          </div>
        </card-text>
      </base-card>
      <base-card class="bg-secondary mx-4 mt-4 md:mt-8">
        <card-text class="flex" no-padding>
          <div style="display: flex">
            <SocialIconsBase
              height="100px"
              width="100px"
              icon="mdiDatabase"
              :color="colorIcons"
            />
          </div>
          <div class="flex flex-col">
            <h2>{{ $t("database") }}</h2>
            <p>{{ $t("databaseDescription") }}</p>
            <chip-river :values="databaseTechnologies" class="mt-2" />
          </div>
        </card-text>
      </base-card>
      <base-card class="bg-secondary mx-4 mt-4 md:mt-8">
        <card-text class="flex" no-padding>
          <div style="display: flex">
            <SocialIconsBase
              height="100px"
              width="100px"
              icon="mdiTranslate"
              :color="colorIcons"
            />
          </div>
          <div class="flex flex-col">
            <h2>{{ $t("language") }}</h2>
            <p>{{ $t("languagesDescription") }}</p>
            <chip-river :values="languages" class="mt-2" />
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
      frontendTechnologies: [
        "HTML5",
        "CSS3",
        "SCSS",
        "Tailwind CSS",
        "Bootstrap",
        "Vuetify",
        "Javascript",
        "Vue.js",
        "Angular",
        "Nuxt.js",
      ],
      backendTechnologies: [
        "Javascript",
        "PHP",
        "Node.js",
        "Express.js",
        "Laravel",
      ],
      databaseTechnologies: ["MariaDB", "MySQL", "PostgreSQL", "MongoDB"],
      languages: ["English", "Español"],
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
