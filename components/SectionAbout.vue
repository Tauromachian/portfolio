<template>
  <base-section id="about">
    <div class="justify-center flex-wrap mt-4">
      <div>
        <h2 class="mb-5 text-3xl text-5xl self-start text-left">
          {{ $t("about") }}
        </h2>
        <p class="p-width">
          {{ $t("aboutText1") }}
        </p>
        <p class="p-width mt-4">
          {{ $t("aboutText2") }}
        </p>
        <p class="p-width mt-4">
          {{ $t("aboutText3") }}
        </p>
      </div>
      <div class="flex jose-img" style="">
        <img
          class="w-80 h-80 rounded-full mt-5"
          src="/images/640/picture-man-min 1x1.jpg"
          :alt="$t('myPictureAlt')"
          style="box-shadow: 3px 3px 12px black"
        />
      </div>
    </div>
    <div class="flex flex-col justify-center sm:flex-row mt-32">
      <div class="flex flex-col md:flex-row">
        <base-card transparent class="w-full md:mr-1 py-4">
          <card-feature
            :title="$t('intuitive')"
            icon="mdiLightbulb"
            alt="Intuitive icon"
            :color="colorIcons"
          >
            <p class="md:text-center md:mx-3">
              {{ $t("intuitiveText") }}
            </p>
          </card-feature>
        </base-card>
        <base-card transparent class="w-full md:mx-1 py-4">
          <card-feature
            :title="$t('fast')"
            icon="mdiRocketLaunch"
            alt="Fast icon"
            :color="colorIcons"
          >
            <p class="md:text-center md:mx-3">
              {{ $t("fastText") }}
            </p>
          </card-feature>
        </base-card>
      </div>
      <div class="flex flex-col md:flex-row md:mt-2">
        <base-card transparent class="w-full md:mr-1 py-4">
          <card-feature
            :title="$t('responsive')"
            icon="mdiResponsive"
            alt="Responsive icon"
            :color="colorIcons"
          >
            <p class="md:text-center md:mx-3">
              {{ $t("responsiveText") }}
            </p>
          </card-feature>
        </base-card>
        <base-card transparent class="w-full md:mx-1 py-4">
          <card-feature
            :title="$t('reactive')"
            icon="mdiAlphaRCircle"
            alt="Reactive icon"
            :color="colorIcons"
          >
            <p class="md:text-center md:mx-3">
              {{ $t("reactiveText") }}
            </p>
          </card-feature>
        </base-card>
      </div>
    </div>
  </base-section>
</template>

<script>
export default {
  name: "SectionAbout",
  data() {
    return {
      colorIcons: "",
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

<style scoped>
.p-width {
  max-width: 700px;
}
.justify-center {
  display: flex;
  justify-content: center;
}
.jose-img {
  display: flex;
  justify-content: center;
  min-width: 320px;
  max-width: 700px;
  width: 50%;
}
</style>
