import { useEffect, useRef } from 'react';

export const useWindowResize = () => {
  const callbacks = useRef<Function[]>([]);
  useEffect(() => {
    const updateSize = (e: Event) => {
      for (let index = 0; index < callbacks.current.length; index++) {
        const callback = callbacks.current[index];
        callback(e);
      }
    };
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
      callbacks.current = [];
    };
  }, []);
  return (callback: (e: Event) => void) => {
    callbacks.current.push(callback);
  };
};
