<script setup lang="ts">
import { FooterLink } from "@/types/Utilities";

defineProps<{
  socialLink: FooterLink;
}>();
</script>

<template>
  <div class="footer__social-item info-label">
    <component :is="socialLink.component" />
    <a class="link" :href="socialLink.url">{{ socialLink.title }}</a>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.footer {
  &__social-item {
    color: $color-white;
  }
}
</style>
