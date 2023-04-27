import { FunctionalComponent, SVGAttributes } from "vue";

export interface OrderingLabelSchemeCard {
  component: FunctionalComponent<
    SVGAttributes,
    Record<string, ((...args: any[]) => any) | null>
  >;
  description: string;
}
