<template>
  <base-section
    class="items-center justify-center"
    :title="$t('contacts')"
    title-alignment="self-center"
  >
    <div class="flex flex-wrap justify-center text-7xl md:text-8xl">
      <a
        v-for="(link, index) in socialLinks"
        :key="link + index"
        :title="link.alt"
        :href="link.link"
        class="social-link"
      >
        <div style="height: 80px; width: 80px">
          <SocialIconsBase
            height="80px"
            width="80px"
            :icon="link.icon"
            :color="colorIcons"
          />
        </div>
      </a>
    </div>
    <base-card class="mt-8 p-4">
      <h2 class="text-base sm:text-2xl font-bold">
        {{ $t("formTitle") }}
      </h2>
      <app-alert v-if="message.active" :message="message" class="mt-3" />
      <form
        id="form"
        name="contact"
        data-netlify="true"
        @submit.prevent="submitForm"
      >
        <div class="flex flex-col">
          <base-input-text
            v-model="form.name"
            :label="$t('form.name')"
            class="mt-3"
            required
            placeholder="John Doe"
            name="name"
          />
          <base-input-text
            v-model="form.from"
            :label="$t('form.email')"
            class="mt-3"
            type="email"
            required
            placeholder="john@mail.com"
            name="email"
          />
          <base-area-text
            v-model="form.body"
            :label="$t('form.message')"
            required
            placeholder="Write your message to me here"
            class="mt-3"
            name="message"
          />
          <base-button
            class="mt-3 self-start"
            :loading="loading"
            @click="submitForm"
          >
            {{ $t("button.send") }}
          </base-button>
        </div>
      </form>
    </base-card>
  </base-section>
</template>

<script>
export default {
  name: "SectionContacts",
  data() {
    return {
      colorIcons: "",
      socialLinks: [
        {
          link: "https://www.linkedin.com/in/dev-jose-garcia",
          icon: "mdiLinkedin",
          alt: "Linkedin icon",
        },
        {
          link: "https://stackoverflow.com/users/10824037/jogarcia",
          icon: "mdiStackOverflow",
          alt: "Stack Overflow icon",
        },
        {
          link: "https://github.com/Tauromachian",
          icon: "mdiGithub",
          alt: "Github icon",
        },
        {
          link: "https://t.me/BetanKore",
          icon: "telegram",
          alt: "Telegram icon",
        },
        {
          link: "https://www.reddit.com/user/BetanKore",
          icon: "mdiReddit",
          alt: "Reddit icon",
        },
      ],
      form: {
        from: "",
        name: "",
        subject: "Work for me",
        body: "",
      },
      message: { success: true, text: "", active: false },
      loading: false,
    };
  },
  created() {
    this.getIconColors();

    setInterval(() => {
      this.getIconColors();
    }, 400);
  },
  methods: {
    getIconColors() {
      const theme = "default";
      const themes = [
        { value: "default", text: "Default", iconColor: "#33bebc" },
        { value: "crazy", text: "Crazy", iconColor: "#33bebc" },
        { value: "dark", text: "Dark", iconColor: "#cc925c" },
      ];
      themes.map((e) => {
        if (e.value === theme) {
          this.colorIcons = e.iconColor;
        }
        return 0;
      });
    },
    async submitForm() {
      const runtimeConfig = useRuntimeConfig();

      this.loading = true;

      const body = {
        ...this.form,
        text: `${this.form.name}\n${this.form.body}`,
        to: runtimeConfig.targetEmail,
      };
      let response;
      try {
        response = await fetch(`${runtimeConfig.mailerUrl}contact-me`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        this.displayErrorMessage();
        return;
      }
      if (response.error) {
        this.displayErrorMessage();
        return;
      }
      this.displaySuccessMessage();
      this.loading = false;
    },
    displaySuccessMessage() {
      this.message.text = "Success! email sent correctly";
      this.message.type = "success";
      this.message.active = true;
      this.loading = false;
    },
    displayErrorMessage() {
      this.message.text = "Error there was a problem sending the email";
      this.message.type = "error";
      this.message.active = true;
      this.loading = false;
    },
  },
};
</script>

<style></style>
