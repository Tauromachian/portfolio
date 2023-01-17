<template>
  <base-section
    v-if="repositories && repositories.length"
    id="repositories"
    class="items-center justify-center"
    :title="$t('repositories')"
    title-alignment="self-center"
  >
    <div class="relative">
      <base-ball
        class="bg-primary"
        right="-30px"
        top="-20px"
        :z-index="-10"
        medium
      />
      <base-ball
        class="bg-primary"
        right="30px"
        top="20px"
        :z-index="-10"
        small
      />
      <base-card class="pb-8">
        <card-text class="flex flex-col justify-center">
          <base-link
            v-for="(repository, index) in repositories"
            :key="repository.name + index"
            :href="repository.html_url"
            class="mt-1 px-2 rounded"
            :text="repository.name"
            icon
          />
        </card-text>
      </base-card>
      <base-ball
        class="bg-primary"
        left="30px"
        bottom="-20px"
        :z-index="-10"
        small
      />
    </div>
  </base-section>
</template>

<script>
import axios from "axios";

export default {
  name: "SectionRepositories",
  data() {
    return {
      repositories: [],
    };
  },
  created() {
    this.loadRepositories();
  },
  methods: {
    async loadRepositories() {
      const token = this.$config.NUXT_ENV_GITHUB_TOKEN;
      if (!token) {
        return;
      }

      let repositories;
      try {
        const { data } = await axios.get(
          "https://api.github.com/users/tauromachian/repos",
          {
            headers: {
              authorization: `token ${token}`,
            },
          }
        );
        repositories = data;
      } catch (error) {
        repositories = [];
      }
      this.repositories = repositories;
    },
  },
};
</script>

<style></style>
