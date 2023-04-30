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
    flex-direction: column;
    row-gap: 1.25rem;
    align-items: center;
    padding: 0 0.75rem;
  }
  &__image {
    width: 6.25rem;
    aspect-ratio: 1/1;
    background-color: $color-accent;
    border-radius: 50%;
    border: 0.3125rem solid #286690;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__description {
    text-align: center;
    color: $color-white;
  }
}
</style>
