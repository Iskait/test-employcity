<script setup lang="ts">
import { ref, watch } from "vue";
import TheHeaderBurger from "./TheHeaderBurger.vue";
import TheHeaderLinks from "./TheHeaderLinks.vue";

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
          <div v-if="isMobileMenuOpen" class="header__menu">
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
@import "@/styles/variables";

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgb(16 16 29 / 90%);

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    @media (min-width: $md) {
      padding: 2rem 0;
    }
  }

  &__logo {
    font-family: $font-headline;
    font-size: 1.25rem;
    font-weight: 800;
    line-height: 1.2;
    color: $color-white;
    text-transform: uppercase;

    @media (min-width: $sm) {
      font-size: 1.75rem;
      line-height: 1.15;
    }
  }

  &__menu {
    position: fixed;
    inset: 3.5rem 0 0;
    padding: 1rem 0;
    overflow-y: auto;
    background: rgb(16 16 29 / 90%);

    @media (min-width: $sm) {
      inset: 4rem 0 0;
    }

    @media (min-width: $md) {
      display: none;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s ease, opacity 0.3s ease;
  transform: translateX(0);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-200%);
}
</style>
