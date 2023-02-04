<template>
  <ul>
    <li
      v-for="(link, index) in links"
      :key="link.route + index"
      :class="{ inline: horizontal }"
    >
      {{ link.text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "AppLinks",
  props: {
    horizontal: {
      type: [Boolean, String],
      default: false,
    },
  },
  data() {
    return {
      links: [
        { route: "#", text: "Sobre mi" },
        { route: "#", text: "Portafolio" },
        { route: "#", text: "Redes sociales" },
        { route: "#", text: "Repositorios" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.inline {
  display: inline;
}
</style>
