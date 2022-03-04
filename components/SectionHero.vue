<template>
  <section class="flex flex-col md:flex-row mb-32 p-3">
    <div class="basis-1/3 h-full">
      <img
        class="rounded-full h-full"
        src="picture-man.jpg"
        alt="A picture of the honor of this portfolio"
      >
    </div>

    <div class="flex flex-col justify-center">
      <h1 class="my-3 md:mt-0 text-3xl text-5xl self-start">
        About
      </h1>
      <p>
        {{ $t("aboutText") }}
      </p>
      <div class="flex flex-col mt-2">
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionHero'
}
</script>

<style scoped>
@media screen and (min-width: 768px) {
  section {
    height: calc(100vh - 64px);
  }
}

.basis-1\/3 {
  flex-basis: 40%;
}
</style>
