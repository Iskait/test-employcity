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
  background: rgba(255, 255, 255, 0.85);
  border-radius: 0.25rem;
  &__hidden-input {
    opacity: 0;
    position: absolute;
    inset: 0px;
    z-index: -1;
  }
  &__button {
    padding: 0.75rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.125rem;
    line-height: 1.2;
    align-items: center;
    width: 100%;
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
    margin-top: 0.25rem;
    position: absolute;
    background-color: $color-primary;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
    padding: 1rem;
    max-height: 11.25rem;
    overflow-y: auto;
    border: 1px solid $color-white;
    border-radius: 0.5rem;
  }
  &__option {
    color: $color-white;
    transition: color 0.3s ease;
    cursor: pointer;
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
