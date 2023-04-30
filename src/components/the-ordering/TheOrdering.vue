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
@import "@/styles/_variables.scss";
.ordering {
  background-image: url("/ordering/world-map.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #272733;
  padding: 4rem 0 4rem 0;
  @media (min-width: $md) {
    padding: 7.5rem 0 12.75rem 0;
  }
  &__block {
    display: flex;
    row-gap: 3.5rem;
    flex-direction: column;
    @media (min-width: $md) {
      row-gap: 5rem;
    }
  }
}
</style>
