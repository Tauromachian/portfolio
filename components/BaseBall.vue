<template>
  <div
    class="rounded-full ball"
    :style="{ 'z-index': zIndex, top, bottom, left, right }"
    :class="{ small, medium, big }"
  />
</template>

<script>
export default {
  name: 'BaseBall',
  props: {
    zIndex: {
      type: Number,
      default: 0
    },
    big: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: true
    },
    small: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: 'initial'
    },
    bottom: {
      type: String,
      default: 'initial'
    },
    left: {
      type: String,
      default: 'initial'
    },
    right: {
      type: String,
      default: 'initial'
    }
  }
}
</script>

<style lang="scss" scoped>
.ball {
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  position: absolute;
}

.big {
  height: 150px;
  width: 150px;
}
.medium {
  height: 100px;
  width: 100px;
}
.small {
  height: 50px;
  width: 50px;
}
</style>
