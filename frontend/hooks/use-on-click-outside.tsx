import { useEffect } from 'react';

interface IUseOnClickOutsideOptions {
  shouldAddListeners: boolean;
}

export default function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void,
  { shouldAddListeners }: IUseOnClickOutsideOptions,
) {
  useEffect(() => {
    if (!shouldAddListeners) {
      return;
    }

    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, shouldAddListeners]);
}
