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
  <nav>
    <ul
      :class="[
        'header__navigation',
        {
          'hide-mobile': hidden,
        },
      ]"
    >
      <li v-for="link in links" :key="link.title">
        <a :href="link.url" class="header__link link">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.header {
  &__navigation {
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
