<script setup lang="ts">
import type { Link } from "@/types/Utilities";
defineProps<{
  hidden?: boolean;
}>();

const links: Link[] = [
  { title: "Бизнес", url: "#" },
  { title: "О нас", url: "#" },
  { title: "Цены", url: "#" },
  { title: "Оформить заказ", url: "#" },
];
</script>

<template>
  <div
    :class="[
      'header__links',
      {
        'hide-mobile': hidden,
      },
    ]"
  >
    <a
      v-for="link in links"
      :key="link.title"
      :href="link.url"
      class="header__link link"
      >{{ link.title }}</a
    >
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/_variables.scss";

.header {
  &__links {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &.hide-mobile {
      display: none;
      @media (min-width: $md) {
        display: flex;
      }
    }
    @media (min-width: $md) {
      flex-direction: row;
    }
    @media (min-width: $lg) {
      column-gap: 3.75rem;
    }
  }
}
</style>
