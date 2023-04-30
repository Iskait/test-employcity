<script setup lang="ts">
import Banknote from "@/assets/ordering/banknote.svg?component";
import Mail from "@/assets/ordering/mail.svg?component";
import Percent from "@/assets/ordering/percent.svg?component";
import Search from "@/assets/ordering/search.svg?component";
import Subtract from "@/assets/ordering/subtract.svg?component";
import { OrderingLabelSchemeCard } from "@/types/Ordering";
import TheOrderingLabelSchemeCard from "./TheOrderingLabelSchemeCard.vue";

const schemeCards: OrderingLabelSchemeCard[] = [
  {
    component: Search,
    description: "Lorem ipsum dolorsit amet",
  },
  {
    component: Percent,
    description: "Сonsectetu radipiscing elit",
  },

  {
    component: Subtract,
    description: "Sed do eiusmod tempor",
  },
  {
    component: Mail,
    description: "Esse cillum doloreeu fugiat",
  },
  {
    component: Banknote,
    description: "Excepteur sint occaecat cupidatat non proident",
  },
];
</script>

<template>
  <div class="scheme">
    <TheOrderingLabelSchemeCard
      v-for="schemeCard in schemeCards"
      :key="schemeCard.description"
      :scheme-card="schemeCard"
    />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.scheme {
  z-index: 20;
  display: grid;
  gap: 1.75rem;
  max-width: 20rem;

  @media (min-width: $sm) {
    grid-template-columns: repeat(3, 1fr);
    max-width: none;
  }

  @media (min-width: $md) {
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
  }

  @media (min-width: $lg) {
    column-gap: 2rem;
  }
}
</style>
