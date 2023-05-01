<script setup lang="ts"></script>

<template>
  <section class="hero">
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
          <ul class="hero__list feature-list">
            <li class="feature-list__item">Totam rem aperiam eaque ipsa</li>
            <li class="feature-list__item">
              Sit voluptatem accusantium doloremque laudantium
            </li>
            <li class="feature-list__item">
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
  </section>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.hero {
  padding: 2rem 0;
  background-color: $color-gray;

  @media (min-width: $sm) {
    padding: 10rem 0 9rem;
    margin-top: -4.5rem;
    background-image: url("/hero/hero-image.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  @media (min-width: $md) {
    margin-top: -6rem;
  }

  @media (min-width: $lg) {
    padding: 12.5rem 0 12.75rem;
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
    max-width: 780px;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;

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
    font-weight: 700;
    line-height: 1.2;
    color: $color-black;

    @media (min-width: $sm) {
      font-size: 1.25rem;
      line-height: 1.2;
    }
  }

  &__order-info {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    column-gap: 2rem;

    @media (min-width: $sm) {
      flex-direction: row;
      column-gap: 2rem;
    }
  }

  &__button {
    width: 100%;
    padding: 1rem 2.5rem;
    font-size: 0.75rem;
    color: #2a2b30;
    text-transform: uppercase;
    background-color: $color-white;
    border: 1px solid #6f6d7b;
    border-radius: 0.25rem;
    transition: background-color 0.3s ease;

    @media (min-width: $sm) {
      max-width: 11.5rem;
    }

    &:hover {
      background-color: $color-secondary;
    }
  }

  &__button_accent {
    color: $color-white;
    background-color: $color-accent;
    border-color: $color-white;

    &:hover {
      background-color: $color-accent-dark;
    }
  }
}

.feature-list {
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;

  &__item {
    display: flex;
    column-gap: 0.75rem;
    align-items: center;
    padding-left: 0.75rem;
    font-size: 0.875;
    line-height: 1.2;

    &::before {
      display: inline-block;
      flex-shrink: 0;
      width: 0.3125rem;
      height: 0.125rem;
      content: "";
      background-color: $color-black;
    }

    @media (min-width: $sm) {
      font-size: 1.25rem;
    }
  }
}
</style>
