<template>
  <div
    class="w-full bg-primary text-left py-4 lg:px-4 rounded flex items-center"
    role="alert"
  >
    <span class="mr-3">
      <img v-if="type === 'success'" src="icons/check.svg" alt="Check icon" />
      <img v-else src="icons/alert.svg" alt="Alert icon" />
    </span>

    <span>
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "AppAlert",
  props: {
    type: {
      type: String,
      default: "success",
    },
    text: {
      type: String,
      default: "Success!",
    },
  },
};
</script>

<style></style>
