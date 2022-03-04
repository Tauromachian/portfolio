<template>
  <section class="flex flex-col md:flex-row mb-32 p-3">
    <div class="flex flex-col basis-2/5 h-full justify-center align-center">
      <img
        class="rounded-full w-100% h-auto sm:h-96 md:h-auto mx-auto"
        src="picture-man-min.jpg"
        alt="A picture of the owner of this portfolio"
      >
    </div>

    <div class="flex flex-col justify-center lg:ml-10">
      <h1 class="my-3 md:mt-0 text-3xl text-5xl self-start">
        {{ $t("about") }}
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
  .basis-2\/5 {
    flex-basis: 40%;
  }
}
</style>
