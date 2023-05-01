<script setup lang="ts">
import TheOrderingLabelScheme from "./the-ordering-label-scheme/TheOrderingLabelScheme.vue";
</script>

<template>
  <div class="ordering__label">
    <div class="ordering__header">
      <h2 class="ordering__title">
        Оформление <span class="text-accent">заказа</span>
      </h2>
      <p class="ordering__description">
        Перед заполнением формы ознакомьтесь с нашей схемой работы!
      </p>
    </div>
    <TheOrderingLabelScheme />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.ordering {
  &__label {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    align-items: center;

    @media (min-width: $md) {
      row-gap: 4rem;
    }

    @media (min-width: $lg) {
      row-gap: 5rem;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    @media (min-width: $lg) {
      row-gap: 2rem;
    }
  }

  &__title {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.2;
    color: $color-white;
    text-align: center;
    text-transform: uppercase;

    @media (min-width: $sm) {
      font-size: 2.25rem;
    }
  }

  &__description {
    font-size: 0.875rem;
    line-height: 1.2;
    color: $color-secondary;
    text-align: center;

    @media (min-width: $sm) {
      font-size: 1.125rem;
    }
  }
}
</style>
