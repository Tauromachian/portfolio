<template>
  <a class="mt-1 px-2">
    <span class="link">
      <svg-icon v-if="icon" type="mdi" :path="path" />
      <span>
        {{ text }}
      </span>
    </span>
  </a>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiLink } from '@mdi/js'

export default {
  name: 'BaseLink',
  components: {
    SvgIcon
  },
  props: {
    icon: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'lorem ipsum'
    }
  },
  data () {
    return {
      path: mdiLink
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  width: auto;
  display: flex;
}

div {
  transition: all ease 0.2s;
  border-color: var(--text-color-primary);
  border-top: 1px solid;
  transform: scale(0);
}

.link:hover div {
  transform: scale(1);
}
</style>
