import { useEffect, useRef } from 'react';

export interface UseIntersectionObserverReturn<T extends HTMLElement> {
  elementRef: React.MutableRefObject<T | null>;
  observerRef: React.MutableRefObject<IntersectionObserver | null>;
  rootRef: React.MutableRefObject<T | null>;
}

/**
 * Use the IntersectionObserver to track visibility of an element in the viewport.
 * @param {IntersectionObserverCallback} callback
 * @param {IntersectionObserverInit} options
 * @returns {UseIntersectionObserverReturn}
 */
function useIntersectionObserver<T extends HTMLElement>(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {},
): UseIntersectionObserverReturn<T> {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const rootRef = useRef<T>(null);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) {
      return undefined;
    }
    observerRef.current = new IntersectionObserver(callback, {
      root: rootRef.current,
      ...options,
    });
    observerRef.current.observe(elementRef.current);
    return () => {
      if (observerRef.current === null) {
        return;
      }
      observerRef.current.disconnect();
    };
  }, [callback, options]);

  return { elementRef, observerRef, rootRef };
}
export default useIntersectionObserver;
