// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { DebounceSettings } from 'lodash';
// import debounce from 'lodash/debounce';
// import { useCallback, useEffect, useRef, useState } from 'react';

// function useDebouncedCallback<T extends (...args: any[]) => any>(
//   callback: T,
//   delay = 0,
//   options?: DebounceSettings,
// ): T & any {
//   return useCallback(debounce(callback, delay, options), [callback, delay, options]);
// }

// export function useDebounce<T>(value: T, delay = 0, options?: DebounceSettings): T {
//   const previousValue = useRef(value);
//   const [current, setCurrent] = useState(value);
//   const debouncedCallback = useDebouncedCallback((value: T) => setCurrent(value), delay, options);
//   useEffect(() => {
//     // does trigger the debounce timer initially
//     if (value !== previousValue.current) {
//       debouncedCallback(value);
//       previousValue.current = value;
//       // cancel the debounced callback on clean up
//       return debouncedCallback.cancel;
//     }
//   }, [value]);

//   return current;
// }
