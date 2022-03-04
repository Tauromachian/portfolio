<template>
  <section class="flex flex-col mb-32 p-3">
    <img class="mt-12 rounded-full mx-auto" src="picture-man.jpg" alt="" width="384" height="512">

    <h1 class="mb-3 text-3xl text-5xl self-start sm:self-center" :class="titleAlignment">
      About
    </h1>
    <p class="md:mx-20 md:text-center">
      {{ $t("aboutText") }}
    </p>
    <div class="flex flex-col md:flex-row">
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
  </section>
</template>

<script>
export default {
  name: 'SectionHero'
}
</script>

<style>

</style>
