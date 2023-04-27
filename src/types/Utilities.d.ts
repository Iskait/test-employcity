import { FunctionalComponent, SVGAttributes } from "vue";

/** Ссылка */
export interface Link {
  /** Заголовок */
  title: string;
  /** Адрес */
  url: string;
}

/** Подвальная ссылка */
export interface FooterLink extends Link {
  component: FunctionalComponent<
    SVGAttributes,
    Record<string, ((...args: any[]) => any) | null>
  >;
}
