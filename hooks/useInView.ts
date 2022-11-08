import { MutableRefObject, useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

export function useInView<T extends HTMLElement>(options: IntersectionObserverInit, reverse?: boolean): [MutableRefObject<T | null>, boolean] {
  const [inView, setInView] = useState<boolean>(false);
  const { elementRef } = useIntersectionObserver<T>((entries) => {
    if (entries[0].isIntersecting) {
      setInView(true);
    } else if (reverse) {
      setInView(false);
    }
  }, options);

  return [elementRef, inView];
}
