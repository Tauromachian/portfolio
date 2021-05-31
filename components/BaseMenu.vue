<template>
  <div class="relative inline-block text-left">
    <div>
      <slot name="activator" v-bind="{ showDropdown }" />
    </div>

    <div
      class="absolute right-0 bottom-14 mt-2 w-56 rounded-md shadow-lg bg-white focus:outline-none hidden"
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
      this.isDropdownActive ? this.isDropdownActive = false : this.isDropdownActive = true
    }
  }
}
</script>

<style lang="scss" scoped>
.show {
  display: block;
}
</style>
