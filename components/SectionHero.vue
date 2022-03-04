<template>
  <section class="flex flex-col md:flex-row mb-32 p-3">
    <img class="mt-12 rounded-full mx-auto" src="picture-man.jpg" alt="" width="384" height="512">

    <div class="flex flex-col justify-center">
      <h1 class="my-3 md:mt-0 text-3xl text-5xl self-start" :class="titleAlignment">
        About
      </h1>
      <p>
        {{ $t("aboutText") }}
      </p>
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col">
          <card-feature
            :title="$t('intuitive')"
            icon="mdi-lightbulb-on-outline"
            class="mt-7"
          >
            <p class="md:text-center md:mx-3">
              {{ $t("intuitiveText") }}
            </p>
          </card-feature>
          <card-feature :title="$t('fast')" icon="mdi-rocket-launch" class="mt-7">
            <p class="md:text-center md:mx-3">
              {{ $t("fastText") }}
            </p>
          </card-feature>
        </div>
        <div class="flex flex-col">
          <card-feature
            :title="$t('responsive')"
            icon="mdi-responsive"
            class="mt-7"
          >
            <p class="md:text-center md:mx-3">
              {{ $t("responsiveText") }}
            </p>
          </card-feature>
          <card-feature
            :title="$t('reactive')"
            icon="mdi-alpha-r-circle"
            class="mt-7"
          >
            <p class="md:text-center md:mx-3">
              {{ $t("reactiveText") }}
            </p>
          </card-feature>
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

<style>

</style>
