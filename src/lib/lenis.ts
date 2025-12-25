import Lenis from "@studio-freight/lenis";

let _lenis: Lenis | null = null;

export function getLenis() {
  return _lenis;
}

export function setLenis(lenis: Lenis | null) {
  _lenis = lenis;
}

export function scrollToY(y: number, immediate = true) {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(y, { immediate });
  } else {
    window.scrollTo(0, y);
  }
}

export function lenisScrollToTop(immediate = true) {
  scrollToY(0, immediate);
}
