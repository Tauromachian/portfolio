<template>
  <section class="flex flex-col md:flex-row mb-32 p-3 relative">
    <div class="flex h-full justify-center items-center hero--img-container">
      <img
        class="rounded-full w-full h-auto md:w-auto md:h-full hero--img"
        src="picture-man-min.jpg"
        alt="A picture of the owner of this portfolio"
      >
    </div>
    <div
      class="h-full w-full flex flex-col justify-center items-center md:items-start hero--information-container"
    >
      <h1 class="text-7xl md:text-8xl hero-content-name mr-24">
        José
      </h1>
      <h1 class="text-7xl md:text-8xl hero-content-last-name ml-16 md:ml-14">
        García
      </h1>
      <div class="mt-3" />
      <p>Web developer/ Fullstacker</p>
    </div>
    <div class="md:block left-0 right-0 bottom-0 text-center scroll-icon">
      <span class="mdi mdi-chevron-triple-down text-2xl" />
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
  flex-basis: 50%;
}

.hero--information-container {
  flex-basis: 50%;
}

.hero-content-last-name {
  margin-top: -0.25em;
}

.scroll-icon {
  animation: up-and-down 1s infinite ease-out;
}

@keyframes up-and-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
