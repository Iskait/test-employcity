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
@import "@/styles/_variables.scss";
.ordering {
  &__label {
    display: flex;
    row-gap: 2rem;
    @media (min-width: $md) {
      row-gap: 4rem;
    }
    @media (min-width: $lg) {
      row-gap: 5rem;
    }
    align-items: center;
    flex-direction: column;
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
    text-transform: uppercase;
    font-weight: 800;
    font-size: 1.75rem;
    line-height: 1.2;
    text-align: center;
    color: $color-white;
    @media (min-width: $sm) {
      font-size: 2.25rem;
    }
  }
  &__description {
    color: $color-secondary;
    font-size: 0.875rem;
    line-height: 1.2;
    text-align: center;
    @media (min-width: $sm) {
      font-size: 1.125rem;
    }
  }
}
</style>
