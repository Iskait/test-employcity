<script setup lang="ts">
import TheOrderingLabel from "./the-ordering-label/TheOrderingLabel.vue";
import TheOrderingForm from "./TheOrderingForm.vue";
</script>

<template>
  <section class="ordering">
    <div class="ordering__container container">
      <div class="ordering__block">
        <TheOrderingLabel />
        <TheOrderingForm />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.ordering {
  padding: 4rem 0;
  background-color: #272733;
  background-image: url("/ordering/world-map.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: $md) {
    padding: 7.5rem 0 12.75rem;
  }

  &__block {
    display: flex;
    flex-direction: column;
    row-gap: 3.5rem;

    @media (min-width: $md) {
      row-gap: 5rem;
    }
  }
}
</style>
