<script setup lang="ts">
import LabelDocument from "@/assets/ordering/document.svg?component";
import { ref } from "vue";
import UiSelect from "../ui/ui-select/UiSelect.vue";

const range = ref(50);

const options = [
  "Sed ut perspiciatis",
  "Nemo enim ipsam",
  "Et harum quidem",
  "Temporibus autem",
  "Itaque earum rerum",
];

function sendRequest(event: Event) {
  const form = event.target as HTMLFormElement;

  const formData = new FormData(form);

  console.log(Object.fromEntries(formData.entries()));
}
</script>

<template>
  <form class="ordering-form" @submit.prevent="sendRequest">
    <UiSelect :options="options" name="system" />
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
        v-model="range"
        class="ordering-form__input-range"
        type="range"
        name="range"
        required
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
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: $md) {
    grid-template-columns: repeat(3, 1fr);
  }
  &__field {
    outline: none;
    border-radius: 0.25rem;
    background: rgba(255, 255, 255, 0.85);
    padding: 0.75rem;
    font-size: 1.125rem;
    line-height: 1.2;
    &::placeholder {
      color: $color-primary;
    }
  }
  &__range {
    display: flex;
    row-gap: 1rem;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: $md) {
      grid-column: span 2 / span 2;
    }
    color: $color-white;
    font-size: 1.125rem;
    line-height: 1.2;
  }
  &__input-range {
    -webkit-appearance: none;
    cursor: pointer;
    border-radius: 0.5rem;
    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      border-radius: 0.5rem;
      background: #bdbdc0;
      height: 0.375rem;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      margin-top: -0.5rem;
      border: 3px solid $color-accent-dark;
      border-radius: 50%;
      background-color: $color-accent-light;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  &__status {
    display: flex;
    column-gap: 1rem;
    justify-content: space-between;
  }
  &__status-percentage {
    font-weight: 700;
  }
  &__field_invisible-input {
    display: flex;
    position: relative;
    background: $color-white;
    padding: 0;
  }
  &__label_invisible-input {
    display: flex;
    column-gap: 0.75rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0.75rem;
    width: 100%;
    color: #272733;
    font-weight: 600;
    text-transform: uppercase;
  }
  &__input-file {
    position: absolute;
    opacity: 0;
    z-index: -10;
    inset: 0;
  }
  &__submit {
    border: 1px solid $color-white;
    border-radius: 0.25rem;
    background: $color-accent;
    padding: 1rem;
    color: $color-white;
    text-transform: uppercase;
    @media (min-width: $md) {
      grid-column-start: 2;
      margin-top: 0.625rem;
    }
    transition: background-color 0.3s ease;
    &:hover {
      background: #286690;
    }
  }
}
</style>
