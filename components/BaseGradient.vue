<template>
  <div class="gradient"></div>
</template>

<style lang="scss" scoped>
.gradient {
  content: "";
  margin-bottom: -4em;
  height: 9em;
  background: linear-gradient(
    180deg,
    var(--color-primary) 0%,
    var(--color-primary) 20%,
    var(--bg-color-primary) 100%
  );
}
</style>
