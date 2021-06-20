<template>
  <div class="relative inline-block text-left bg--primary">
    <div>
      <slot name="activator" v-bind="{ showDropdown }" />
    </div>

    <div
      class="menu absolute right-0 bottom-14 mt-2 rounded-md shadow-lg bg-white focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
      :class="{ show: isDropdownActive }"
    >
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseMenu',
  props: {
    text: {
      type: String,
      default: 'Options'
    }
  },
  data () {
    return {
      isDropdownActive: false,
      display: 'none'
    }
  },
  methods: {
    showDropdown () {
      this.isDropdownActive = !this.isDropdownActive
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  transition: opacity 0.3s linear;
  visibility: hidden;
  transition: visibility 0s 0.1s, opacity 0.1s linear;
  opacity: 0;
}
.show {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.1s linear;
}
</style>
