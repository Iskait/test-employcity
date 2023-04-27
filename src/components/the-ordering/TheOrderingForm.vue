<script setup lang="ts">
import LabelDocument from "@/assets/ordering/document.svg?component";
import ArrowChevronDown from "@/assets/ordering/arrow-chevron-down.svg?component";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { ref } from "vue";

const range = ref(50);

const options = [
  "Sed ut perspiciatis",
  "Nemo enim ipsam",
  "Et harum quidem",
  "Temporibus autem",
  "Itaque earum rerum",
];

const selectedOption = ref("Выберите тип системы");

function sendRequest(event: Event) {
  const form = event.target as HTMLFormElement;

  const formData = new FormData(form);

  console.log(Object.fromEntries(formData.entries()));
}
</script>

<template>
  <form class="ordering-form" @submit.prevent="sendRequest">
    <div class="ordering-form__select">
      <Listbox v-slot="{ open }" v-model="selectedOption" name="system">
        <ListboxButton
          class="ordering-form__field ordering-form__field_select-button"
        >
          {{ selectedOption }}
          <ArrowChevronDown
            :class="[
              'ordering-form__chevron-down',
              { 'ordering-form__chevron-down_open': open },
            ]"
          />
        </ListboxButton>
        <Transition name="fade">
          <ListboxOptions class="ordering-form__options-list">
            <ListboxOption
              class="ordering-form__option"
              v-for="option in options"
              :key="option"
              :value="option"
            >
              {{ option }}
            </ListboxOption>
          </ListboxOptions>
        </Transition>
      </Listbox>
    </div>
    <input
      class="ordering-form__field"
      type="email"
      name="email"
      required
      placeholder="Ваш e-mail"
    />
    <input
      class="ordering-form__field"
      type="text"
      name="name"
      required
      placeholder="Ваше имя"
    />
    <div class="ordering-form__range">
      <div class="ordering-form__status">
        <p class="ordering-form__status-text">
          Sed ut perspiciatis, unde omnis iste natus
        </p>
        <p class="ordering-form__status-percentage">{{ range }}%</p>
      </div>
      <input
        class="ordering-form__input-range"
        type="range"
        name="range"
        required
        v-model="range"
      />
    </div>

    <div class="ordering-form__field ordering-form__field_invisible-input">
      <label
        class="ordering-form__label ordering-form__label_invisible-input"
        for="file"
      >
        <LabelDocument />
        <span>Прикрепить файл</span>
      </label>
      <input
        id="file"
        class="ordering-form__input-file"
        type="file"
        name="file"
        required
      />
    </div>
    <button class="ordering-form__submit" type="submit">Отправить</button>
  </form>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.ordering-form {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  @media (min-width: $md) {
    grid-template-columns: repeat(3, 1fr);
  }

  &__select {
    position: relative;
  }

  &__field {
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.85);
    outline: none;
    border-radius: 0.25rem;
    font-size: 1.125rem;
    line-height: 1.2;
    &::placeholder {
      color: #272733;
    }
    &_select-button {
      background: rgba(255, 255, 255, 0.85);
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
  }
  &__options-list {
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
  &__chevron-down {
    transition: transform 0.3s ease;
    &_open {
      transform: rotate(180deg);
    }
  }
  &__range {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    row-gap: 1rem;
    @media (min-width: $md) {
      grid-column: span 2 / span 2;
    }
    color: $color-white;
    font-size: 1.125rem;
    line-height: 1.2;
  }
  &__input-range {
    border-radius: 0.5rem;
    -webkit-appearance: none;
    cursor: pointer;
    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      height: 0.375rem;
      background: #bdbdc0;
      border-radius: 0.5rem;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 50%;
      background-color: $color-accent-light;
      border: 3px solid $color-accent-dark;
      margin-top: -0.5rem;
    }
  }
  &__status {
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;
  }
  &__status-percentage {
    font-weight: 700;
  }
  &__field_invisible-input {
    position: relative;
    padding: 0;
    background: $color-white;
    display: flex;
  }
  &__label_invisible-input {
    padding: 0.75rem;
    font-weight: 600;
    color: #272733;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    column-gap: 0.75rem;
    text-transform: uppercase;
    cursor: pointer;
  }
  &__input-file {
    opacity: 0;
    position: absolute;
    inset: 0;
    z-index: -10;
  }
  &__submit {
    background: $color-accent;
    padding: 1rem;
    border: 1px solid $color-white;
    text-transform: uppercase;
    color: $color-white;
    border-radius: 0.25rem;
    @media (min-width: $md) {
      grid-column-start: 2;
      margin-top: 0.625rem;
    }
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background: #286690;
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
