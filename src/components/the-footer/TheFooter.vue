<script setup lang="ts">
import Mail from "@/assets/footer/mail.svg?component";
import QiwiWallet from "@/assets/footer/qiwi.svg?component";
import VK from "@/assets/footer/vk.svg?component";
import WebMoney from "@/assets/footer/web-money.svg?component";
import YandexMoney from "@/assets/footer/yandex-money.svg?component";
import TheFooterWallet from "@/components/the-footer/TheFooterWallet.vue";
import { FooterLink } from "@/types/Utilities";
import TheFooterSocialLink from "./TheFooterSocialLink.vue";

const wallets: FooterLink[] = [
  {
    component: QiwiWallet,
    title: "Qiwi wallet",
    url: "#",
  },
  {
    component: YandexMoney,
    title: "Yandex Money",
    url: "#",
  },
  {
    component: WebMoney,
    title: "Web Money",
    url: "#",
  },
];

const socialLinks: FooterLink[] = [
  {
    component: Mail,
    title: "info@ipsum228.com",
    url: "mailto:info@ipsum228.com",
  },
  {
    component: VK,
    title: "Мы вконтакте",
    url: "#",
  },
];
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__information">
        <p class="footer__copyright">
          © 2018 <span class="text-uppercase">«LoremIpsum.net»</span> Все права
          защищены.
        </p>
        <div class="footer__wallets">
          <TheFooterWallet
            v-for="wallet in wallets"
            :key="wallet.title"
            :wallet="wallet"
          />
        </div>
        <div class="footer__social">
          <TheFooterSocialLink
            v-for="socialLink in socialLinks"
            :key="socialLink.title"
            :social-link="socialLink"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.footer {
  background: #3d4050;

  &__information {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    justify-content: space-between;
    padding: 1rem 0;
    font-size: 0.75rem;
    line-height: 1.33;

    @media (min-width: $lg) {
      flex-direction: row;
      column-gap: 2rem;
      align-items: center;
    }

    @media (min-width: $xl) {
      column-gap: 2.5rem;
    }
  }

  &__copyright {
    order: 2;
    color: $color-white;
    text-align: center;

    @media (min-width: $lg) {
      order: 0;
      text-align: left;
    }
  }

  &__wallets {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: $lg) {
      column-gap: 1rem;
      padding: 0 1.5rem;
      border-right: 1px solid $color-tertiary;
      border-left: 1px solid $color-tertiary;
    }

    @media (min-width: $xl) {
      column-gap: 2.25rem;
      padding: 0 2.5rem;
    }
  }

  &__social {
    display: flex;
    column-gap: 2.25rem;
    justify-content: space-between;
  }
}
</style>
