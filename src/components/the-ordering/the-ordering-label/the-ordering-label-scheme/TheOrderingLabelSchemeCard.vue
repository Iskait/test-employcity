<script setup lang="ts">
import { OrderingLabelSchemeCard } from "@/types/Ordering";
defineProps<{
  schemeCard: OrderingLabelSchemeCard;
}>();
</script>

<template>
  <div class="scheme__item scheme-card">
    <div class="scheme-card__image">
      <component :is="schemeCard.component" />
    </div>
    <div class="scheme-card__description">
      {{ schemeCard.description }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.scheme-card {
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  align-items: center;
  padding: 0 0.75rem;

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.25rem;
    aspect-ratio: 1/1;
    background-color: $color-accent;
    border: 0.3125rem solid #286690;
    border-radius: 50%;
  }

  &__description {
    color: $color-white;
    text-align: center;
  }
}
</style>
