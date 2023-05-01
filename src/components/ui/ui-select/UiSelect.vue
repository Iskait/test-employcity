<script setup lang="ts">
import ArrowChevronDown from "@/assets/ordering/arrow-chevron-down.svg?component";
import useClickOutside from "@/composables/useClickOutside";
import { ref } from "vue";

defineProps<{
  options: string[];
  name: string;
}>();

const isOpen = ref(false);
const selectedOption = ref("");
const input = ref<HTMLInputElement>();

function changeOption(option: string) {
  isOpen.value = false;
  selectedOption.value = option;
  if (input.value) {
    input.value.value = option;
  }
}

const uiSelect = ref<HTMLElement>();

useClickOutside(uiSelect, () => {
  isOpen.value = false;
});
</script>

<template>
  <div ref="uiSelect" class="select">
    <input
      ref="input"
      type="text"
      required
      class="select__hidden-input"
      :name="name"
    />
    <button type="button" class="select__button" @click="isOpen = !isOpen">
      <span
        :class="[
          'select__button-text',
          { 'select__button-text_active': selectedOption.length },
        ]"
        >{{ selectedOption || "Выберите тип системы" }}</span
      >
      <ArrowChevronDown
        :class="[
          'select__chevron-down',
          { 'select__chevron-down_open': isOpen },
        ]"
      />
    </button>
    <Transition name="fade">
      <ul v-if="isOpen" class="select__options">
        <li
          v-for="option in options"
          :key="option"
          class="select__option"
          @click="changeOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.select {
  position: relative;
  background: rgb(255 255 255 / 85%);
  border-radius: 0.25rem;

  &__hidden-input {
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem;
    font-size: 1.125rem;
    line-height: 1.2;
  }

  &__button-text {
    color: $color-primary;

    &_active {
      color: $color-black;
    }
  }

  &__chevron-down {
    transition: transform 0.3s ease;

    &_open {
      transform: rotate(180deg);
    }
  }

  &__options {
    position: absolute;
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
    width: 100%;
    max-height: 11.25rem;
    padding: 1rem;
    margin-top: 0.25rem;
    overflow-y: auto;
    background-color: $color-primary;
    border: 1px solid $color-white;
    border-radius: 0.5rem;
  }

  &__option {
    color: $color-white;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: $color-accent;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
