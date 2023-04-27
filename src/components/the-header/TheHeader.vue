<script setup lang="ts">
import { ref, watch } from "vue";
import TheHeaderLinks from "./TheHeaderLinks.vue";
import TheHeaderBurger from "./TheHeaderBurger.vue";

const isMobileMenuOpen = ref(false);

watch(isMobileMenuOpen, () => {
  if (isMobileMenuOpen.value) {
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.touchAction = "none";
  } else {
    document.documentElement.style.overflow = "";
    document.documentElement.style.touchAction = "";
  }
});
</script>

<template>
  <div class="header">
    <div class="header__container container">
      <div class="header__row">
        <div class="header__logo">
          <span>LoremIpsum.</span><span class="text-accent-light">Net</span>
        </div>
        <TheHeaderLinks hidden />
        <TheHeaderBurger
          :is-mobile-menu-open="isMobileMenuOpen"
          @toggle-menu="isMobileMenuOpen = !isMobileMenuOpen"
        />
        <Transition name="fade">
          <div class="header__menu" v-if="isMobileMenuOpen">
            <div class="header__menu_container container">
              <TheHeaderLinks />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/_variables.scss";

.header {
  background: rgba(16, 16, 29, 0.9);
  position: sticky;
  top: 0;
  z-index: 50;
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    @media (min-width: $md) {
      padding: 2rem 0;
    }
  }

  &__logo {
    color: $color-white;
    font-family: $font-headline;
    font-size: 1.25rem;
    line-height: 1.2;
    text-transform: uppercase;
    font-weight: 800;
    @media (min-width: $sm) {
      font-size: 1.75rem;
      line-height: 1.15;
    }
  }

  &__menu {
    position: fixed;
    inset: 3.5rem 0 0 0;
    background: rgba(16, 16, 29, 0.9);
    padding: 1rem 0;
    overflow-y: auto;
    @media (min-width: $sm) {
      inset: 4rem 0 0 0;
    }
    @media (min-width: $md) {
      display: none;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transform: translateX(0);
  transition: transform 0.5s ease, opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-200%);
}
</style>
