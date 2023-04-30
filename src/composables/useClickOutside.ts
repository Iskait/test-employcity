import { Ref } from "vue";

export default function useClickOutside(
  target: Ref<HTMLElement | undefined>,
  handler: () => void
) {
  window.addEventListener("click", (e: Event) => {
    if (!e.composedPath().includes(target.value as HTMLElement)) {
      handler();
    }
  });
}
