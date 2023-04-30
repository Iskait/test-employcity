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
@import "@/styles/variables";

.ordering-form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: $md) {
    grid-template-columns: repeat(3, 1fr);
  }

  &__field {
    padding: 0.75rem;
    font-size: 1.125rem;
    line-height: 1.2;
    background: rgb(255 255 255 / 85%);
    border-radius: 0.25rem;
    outline: none;

    &::placeholder {
      color: $color-primary;
    }
  }

  &__range {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    justify-content: space-between;
    font-size: 1.125rem;
    line-height: 1.2;
    color: $color-white;

    @media (min-width: $md) {
      grid-column: span 2 / span 2;
    }
  }

  &__input-range {
    appearance: none;
    cursor: pointer;
    border-radius: 0.5rem;

    &::-webkit-slider-runnable-track {
      height: 0.375rem;
      background: #bdbdc0;
      border-radius: 0.5rem;
      appearance: none;
    }

    &::-webkit-slider-thumb {
      width: 1.5rem;
      height: 1.5rem;
      margin-top: -0.5rem;
      background-color: $color-accent-light;
      border: 3px solid $color-accent-dark;
      border-radius: 50%;
      appearance: none;
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
    position: relative;
    display: flex;
    padding: 0;
    background: $color-white;
  }

  &__label_invisible-input {
    display: flex;
    column-gap: 0.75rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.75rem;
    font-weight: 600;
    color: #272733;
    text-transform: uppercase;
    cursor: pointer;
  }

  &__input-file {
    position: absolute;
    inset: 0;
    z-index: -10;
    opacity: 0;
  }

  &__submit {
    padding: 1rem;
    color: $color-white;
    text-transform: uppercase;
    background: $color-accent;
    border: 1px solid $color-white;
    border-radius: 0.25rem;
    transition: background-color 0.3s ease;

    @media (min-width: $md) {
      grid-column-start: 2;
      margin-top: 0.625rem;
    }

    &:hover {
      background: #286690;
    }
  }
}
</style>
