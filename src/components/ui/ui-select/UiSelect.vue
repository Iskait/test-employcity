<script setup lang="ts">
import { ref } from "vue";
import ArrowChevronDown from "@/assets/ordering/arrow-chevron-down.svg?component";
import useClickOutside from "@/composables/useClickOutside";

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
  <div ref="uiSelect" class="ui-select">
    <input
      ref="input"
      type="text"
      required
      class="ui-select__hidden-input"
      :name="name"
    />
    <button type="button" class="ui-select__button" @click="isOpen = !isOpen">
      <span
        :class="[
          'ui-select__button-text',
          { 'ui-select__button-text_active': selectedOption.length },
        ]"
        >{{ selectedOption || "Выберите тип системы" }}</span
      >
      <ArrowChevronDown
        :class="[
          'ui-select__chevron-down',
          { 'ui-select__chevron-down_open': isOpen },
        ]"
      />
    </button>
    <Transition name="fade">
      <ul v-if="isOpen" class="ui-select__options">
        <li
          v-for="option in options"
          :key="option"
          class="ui-select__option"
          @click="changeOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/_variables.scss";

.ui-select {
  position: relative;
  border-radius: 0.25rem;
  background: rgba(255, 255, 255, 0.85);
  &__hidden-input {
    position: absolute;
    opacity: 0;
    z-index: -1;
    inset: 0px;
  }
  &__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    width: 100%;
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
    display: flex;
    position: absolute;
    row-gap: 0.75rem;
    flex-direction: column;
    margin-top: 0.25rem;
    border: 1px solid $color-white;
    border-radius: 0.5rem;
    background-color: $color-primary;
    padding: 1rem;
    width: 100%;
    max-height: 11.25rem;
    overflow-y: auto;
  }
  &__option {
    transition: color 0.3s ease;
    cursor: pointer;
    color: $color-white;
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
