<template>
  <section class="flex flex-col md:flex-row mb-32 p-3">
    <div class="flex flex-col basis-2/5 h-full justify-center align-center hero--img-container">
      <img
        class="rounded-full w-auto h-auto mx-auto hero--img"
        src="picture-man-min.jpg"
        alt="A picture of the owner of this portfolio"
      >
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

.hero--img-container {
  width: 50%;
}
</style>
