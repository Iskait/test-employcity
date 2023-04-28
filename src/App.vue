<script setup lang="ts">
import TheHeader from "@/components/the-header/TheHeader.vue";
import TheHero from "@/components/TheHero.vue";
import TheOrdering from "@/components/the-ordering/TheOrdering.vue";
import TheFooter from "@/components/the-footer/TheFooter.vue";
</script>

<template>
  <div class="wrapper">
    <TheHeader />
    <main class="main">
      <TheHero />
      <TheOrdering />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss"></style>
