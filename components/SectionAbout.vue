<template>
  <base-section class="container">
    <div class="flex justify-center flex-wrap">
      <div class="flex flex-col justify-center max-w-xl">
        <h2 class="mb-5 text-3xl text-5xl self-start text-left">
          {{ $t("about") }}
        </h2>
        <p>
          {{ $t("aboutText1") }}
        </p>
        <p class="mt-4">
          {{ $t("aboutText2") }}
        </p>
        <p class="mt-4">
          {{ $t("aboutText3") }}
        </p>
      </div>
      <div class="flex justify-center jose-img md:ml-20" style="">
        <picture class="w-80 h-fit">
          <source
            sizes="(min-width: 347px)"
            type="image/avif"
            srcset="
              /avif/1280/picture-man-min.avif 1280w,
              /avif/640/picture-man-min.avif   640w
            "
          />
          <source
            type="image/webp"
            sizes="(min-width: 347px)"
            srcset="
              /webp/1280/picture-man-min.webp 1280w,
              /webp/640/picture-man-min.webp   640w
            "
          />
          <img
            class="w-full h-auto rounded-full mt-10 lg:mt-0"
            decoding="async"
            loading="lazy"
            width="1256"
            height="1004"
            alt="An image of the owner of this portfolio"
            srcset="
              /images/1280/picture-man-min.jpg 1280w,
              /images/640/picture-man-min.jpg   640w
            "
          />
        </picture>
      </div>
    </div>
    <div class="flex flex-col justify-center sm:flex-row mt-16">
      <div class="flex flex-col md:flex-row">
        <base-card transparent class="w-full md:mr-1 py-4">
          <card-feature
            :title="$t('intuitive')"
            icon="mdiLightbulb"
            alt="Intuitive icon"
          >
            <p class="md:text-center md:mx-3">
              {{ $t("intuitiveText") }}
            </p>
          </card-feature>
        </base-card>
        <base-card transparent class="w-full md:mx-1 py-4">
          <card-feature
            :title="$t('fast')"
            icon="mdiRocketLaunch"
            alt="Fast icon"
          >
            <p class="md:text-center md:mx-3">
              {{ $t("fastText") }}
            </p>
          </card-feature>
        </base-card>
      </div>
      <div class="flex flex-col md:flex-row">
        <base-card transparent class="w-full md:mr-1 py-4">
          <card-feature
            :title="$t('responsive')"
            icon="mdiResponsive"
            alt="Responsive icon"
          >
            <p class="md:text-center md:mx-3">
              {{ $t("responsiveText") }}
            </p>
          </card-feature>
        </base-card>
        <base-card transparent class="w-full md:mx-1 py-4">
          <card-feature
            :title="$t('reactive')"
            icon="mdiAlphaRCircle"
            alt="Reactive icon"
          >
            <p class="md:text-center md:mx-3">
              {{ $t("reactiveText") }}
            </p>
          </card-feature>
        </base-card>
      </div>
    </div>
  </base-section>
</template>

<script>
export default {
  name: "SectionAbout",
};
</script>
