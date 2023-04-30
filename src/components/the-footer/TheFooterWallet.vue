<script setup lang="ts">
import { FooterLink } from "@/types/Utilities";

defineProps<{
  wallet: FooterLink;
}>();
</script>

<template>
  <div class="footer__wallet-item info-label">
    <component :is="wallet.component" />
    <button class="footer__wallet-item-link">
      {{ wallet.title }}
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.footer {
  &__wallet-item-link {
    color: $color-tertiary;
  }
}
</style>
