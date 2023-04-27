<script setup lang="ts"></script>

<template>
  <div class="hero">
    <div class="hero__container container">
      <div class="hero__content">
        <h1 class="hero__title">
          <span class="text-accent">Lorem ipsum</span>
          dolor sit amet consectetur
          <span class="text-accent">adipiscing</span>
        </h1>
        <div class="hero__description">
          <h5 class="hero__sub-title">
            At vero eos et accusamus et iusto odio dignissimos ducimus!
          </h5>
          <ul class="hero__list">
            <li class="hero__list-item">Totam rem aperiam eaque ipsa</li>
            <li class="hero__list-item">
              Sit voluptatem accusantium doloremque laudantium
            </li>
            <li class="hero__list-item">
              Sed ut perspiciatis, unde omnis iste natus error
            </li>
          </ul>
        </div>
        <div class="hero__order-info">
          <button class="hero__button hero__button_accent">заказать</button>
          <button class="hero__button">подробнее</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/_variables.scss";
.hero {
  padding: 2rem 0 2rem 0;
  background-color: $color-gray;
  @media (min-width: $sm) {
    margin-top: -4.5rem;
    padding: 10rem 0 9rem 0;
    background-image: url("/hero/hero-image.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media (min-width: $md) {
    margin-top: -6rem;
  }
  @media (min-width: $lg) {
    padding: 13.5rem 0 12.75rem 0;
    margin-top: -6rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    @media (min-width: $lg) {
      row-gap: 5rem;
    }
  }
  &__title {
    text-transform: uppercase;
    font-weight: 700;
    max-width: 780px;
    font-size: 2rem;
    line-height: 1.2;
    @media (min-width: $sm) {
      font-size: 3rem;
    }
  }
  &__description {
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
  }

  &__sub-title {
    color: $color-black;
    font-weight: 700;
    line-height: 1.25;
    @media (min-width: $sm) {
      font-size: 1.25rem;
      line-height: 1.2;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
  }
  &__list-item {
    display: flex;
    column-gap: 0.75rem;
    align-items: center;
    line-height: 1.5;
    font-size: 0.875;
    line-height: 1.2;
    &::before {
      width: 0.3125rem;
      height: 0.125rem;
      content: "";
      background-color: $color-black;
      flex-shrink: 0;
    }
    @media (min-width: $sm) {
      font-size: 1.25rem;
    }
  }

  &__order-info {
    display: flex;
    column-gap: 2rem;
    row-gap: 1rem;
    flex-direction: column;
    @media (min-width: $sm) {
      flex-direction: row;
      column-gap: 2rem;
    }
  }
  &__button {
    background-color: $color-white;
    text-transform: uppercase;
    padding: 1rem 2.5rem;
    color: #2a2b30;
    border: 1px solid #6f6d7b;
    border-radius: 0.25rem;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.3s ease;
    @media (min-width: $sm) {
      max-width: 11.5rem;
    }
    &:hover {
      background-color: $color-secondary;
    }
  }
  &__button_accent {
    border-color: $color-white;
    background-color: $color-accent;
    color: $color-white;
    &:hover {
      background-color: $color-accent-dark;
    }
  }
}
</style>
