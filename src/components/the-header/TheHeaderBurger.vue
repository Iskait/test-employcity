<script setup lang="ts">
defineProps<{
  isMobileMenuOpen: boolean;
}>();

const emit = defineEmits<{
  (event: "toggle-menu"): void;
}>();
</script>

<template>
  <button
    :class="['header__burger', { header__burger_active: isMobileMenuOpen }]"
    @click="emit('toggle-menu')"
  >
    <span />
  </button>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.header {
  &__burger {
    position: relative;
    cursor: pointer;
    width: 1.875rem;
    height: 1.125rem;
    @media (min-width: $md) {
      display: none;
    }
    span,
    &::before,
    &::after {
      position: absolute;
      left: 0;
      transition: all 0.3s ease 0s;
      background-color: $color-white;
      width: 100%;
      height: 10%;
    }
    &::before,
    &::after {
      content: "";
    }
    &::before {
      top: 0;
    }
    &::after {
      bottom: 0;
    }
    span {
      top: 50%;
      transform: scale(1) translate(0px, -50%);
    }
    &_active span {
      transform: scale(0);
    }

    &_active::before {
      top: 50%;
      transform: rotate(-45deg) translate(0px, -50%);
    }

    &_active::after {
      top: 50%;
      transform: rotate(45deg) translate(0px, 50%);
    }
  }
}
</style>
