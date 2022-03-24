<template>
  <section class="flex flex-col md:flex-row mb-32 p-3">
    <div class="flex h-full justify-center items-center hero--img-container">
      <img
        class="rounded-full w-full h-auto md:w-auto md:h-full hero--img"
        src="picture-man-min.jpg"
        alt="A picture of the owner of this portfolio"
      >
    </div>
    <div class="h-full w-full flex flex-col justify-center hero--information-container">
      <h1 class="text-8xl hero-content-name">
        José
      </h1>
      <h1 class="text-8xl hero-content-name">
        García
      </h1>
      <div class="mt-3" />
      <p>Web developer/</p>
      <p>Fullstacker</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionHero'
}
</script>

<style scoped>
h1 {
  text-transform: uppercase;
}

@media screen and (min-width: 768px) {
  section {
    height: calc(100vh - 64px);
  }
  .basis-2\/5 {
    flex-basis: 40%;
  }
}

.hero--img-container {
  flex-basis: 50%;
}

.hero--information-container {
  flex-basis: 50%;
}
</style>
