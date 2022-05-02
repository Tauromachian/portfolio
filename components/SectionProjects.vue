<template>
  <base-section
    class="flex flex-col items-center justify-center"
    :title="$t('projects.title')"
  >
    <base-card class="w-full">
      <card-text>
        <project-carousel />
      </card-text>
    </base-card>
  </base-section>
</template>

<script>
export default {
  name: 'SectionProjects'
}
</script>

<style>

</style>
