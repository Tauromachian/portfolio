<template>
  <component
    :is="downloadLink ? 'a' : 'button'"
    :href="downloadLink"
    type="button"
    role="button"
    :title="text"
    class="transition rounded-lg bg-primary outline-none py-2 px-5 hover:bg-green-300 button"
    :class="{ ...buttonClasses, ...outlineClasses }"
    v-bind="$attrs"
    :download="!!downloadLink"
  >
    <div v-if="loading" class="flex justify-center items-center">
      <app-loader></app-loader>
      <span v-if="loadingText" class="ml-2">{{ loadingText }}</span>
      <span v-else class="ml-2">Loading...</span>
    </div>
    <slot v-else>
      {{ text }}
    </slot>
  </component>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
      default: "",
    },
    value: {
      type: Boolean,
      default: false,
    },
    isActivable: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: "",
    },
    isCallToAction: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    downloadLink: {
      type: String,
      default: "",
    },
  },
  computed: {
    buttonClasses() {
      const classes = {};
      if (this.icon) {
        classes.padding = 0;
        classes["icon-button"] = true;
      }
      if (this.isCallToAction) {
        classes["call-to-action"] = true;
      }
      if (this.outline) {
        classes.outline = true;
      }
      return classes;
    },
    outlineClasses() {
      if (this.outline) {
        return {
          outline: true,
        };
      }
      return {};
    },
  },
};
</script>

<style scoped>
.icon-button {
  background-color: transparent !important;
  border-radius: 50%;
  height: 2.3em;
  width: 2.3em;
  padding: 0.5em;
  margin: 0.2em;
}

.button:hover {
  background-color: var(--color-secondary) !important;
}

.border-top-primary {
  border-top-color: var(--color-primary) !important;
}

.call-to-action {
  font-size: 1.6rem;
  padding: 0.6em 1.6em;
  font-weight: bold;
}

.outline {
  border: 1px solid;
  background-color: transparent !important;
}
</style>
