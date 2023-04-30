<script setup lang="ts">
import { OrderingLabelSchemeCard } from "@/types/Ordering";
defineProps<{
  schemeCard: OrderingLabelSchemeCard;
}>();
</script>

<template>
  <div class="scheme__card">
    <div class="scheme__image">
      <component :is="schemeCard.component" />
    </div>
    <div class="scheme__description">
      {{ schemeCard.description }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/_variables.scss";
.scheme {
  &__card {
    display: flex;
    row-gap: 1.25rem;
    flex-direction: column;
    align-items: center;
    padding: 0 0.75rem;
  }
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.3125rem solid #286690;
    border-radius: 50%;
    background-color: $color-accent;
    aspect-ratio: 1/1;
    width: 6.25rem;
  }
  &__description {
    color: $color-white;
    text-align: center;
  }
}
</style>
