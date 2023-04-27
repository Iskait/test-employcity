<script setup lang="ts">
import { FooterLink } from "@/types/Utilities";

defineProps<{
  wallet: FooterLink;
}>();
</script>

<template>
  <div class="footer__wallet-item info-label">
    <component :is="wallet.component" />
    <a class="footer__wallet-item-link" :href="wallet.url">
      {{ wallet.title }}
    </a>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/_variables.scss";
.footer {
  &__wallet-item-link {
    color: $color-tertiary;
    &:hover {
      color: $color-accent-light;
    }
  }
}
</style>
