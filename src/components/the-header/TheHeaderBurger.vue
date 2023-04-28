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
    @click="emit('toggle-menu')"
    :class="['header__burger', { header__burger_active: isMobileMenuOpen }]"
  >
    <span />
  </button>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.header {
  &__burger {
    position: relative;
    width: 1.875rem;
    height: 1.125rem;
    cursor: pointer;
    @media (min-width: $md) {
      display: none;
    }
    span,
    &::before,
    &::after {
      position: absolute;
      left: 0;
      width: 100%;
      height: 10%;
      background-color: $color-white;
      transition: all 0.3s ease 0s;
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
