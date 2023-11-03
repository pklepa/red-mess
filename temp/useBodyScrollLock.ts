// import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
// import { RefObject, useEffect, useRef } from 'react';

// const useBodyScrollLock = <T extends HTMLElement>(trigger: boolean): RefObject<T> => {
//   const ref = useRef<T>(null);

//   useEffect(() => {
//     if (ref.current === null) {
//       clearAllBodyScrollLocks();
//       return;
//     }

//     if (trigger === true) {
//       disableBodyScroll(ref.current);
//     } else {
//       enableBodyScroll(ref.current);
//     }

//     return () => {
//       if (ref.current !== null) {
//         enableBodyScroll(ref.current);
//       }
//     };
//   }, [trigger]);

//   return ref;
// };

// export default useBodyScrollLock;
