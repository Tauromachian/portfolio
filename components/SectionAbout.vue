<template>
  <base-section
    id="about"
    :title="$t('about')"
    class="items-center justify-center"
  >
    <p class="p-width">
      {{ $t('aboutText1') }}
    </p>
    <p class="p-width mt-4">
      {{ $t('aboutText2') }}
    </p>
    <p class="p-width mt-4">
      {{ $t('aboutText3') }}
    </p>
    <div class="flex flex-col sm:flex-row mt-4">
      <div class="flex flex-col md:flex-row">
        <base-card transparent class="w-full md:mr-1 py-4">
          <card-feature
            :title="$t('intuitive')"
            icon="mdiLightbulb"
            alt="Intuitive icon"
            :color="colorIcons"
          >
            <p class="md:text-center md:mx-3">
              {{ $t('intuitiveText') }}
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
              {{ $t('fastText') }}
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
              {{ $t('responsiveText') }}
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
              {{ $t('reactiveText') }}
            </p>
          </card-feature>
        </base-card>
      </div>
    </div>
  </base-section>
</template>

<script>
export default {
  name: 'SectionAbout',
  data () {
    return {
      colorIcons: ''
    }
  },
  mounted () {
    this.getIconColors()

    setInterval(() => {
      this.getIconColors()
    }, 400)
  },
  methods: {
    getIconColors () {
      const theme = this.$store.state.theme
      const themes = this.$store.state.themes
      themes.map((e) => {
        if (e.value === theme) {
          this.colorIcons = e.iconColor
        }
        return 0
      })
    }
  }
}
</script>

<style scoped>
.p-width {
  max-width: 700px;
}
</style>
