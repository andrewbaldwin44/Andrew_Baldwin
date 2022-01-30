import { useRef, useEffect, useMemo, useState } from 'react';

interface IUseIntersection {
  threshold?: number | number[];
}

export interface IIntersectionObserverEntryInit {
  isIntersecting: boolean;
  boundingClientRect: {
    top: number;
  };
}

const defaultThreshold = Array.from(Array(100).keys(), i => i / 100);

const useIntersection = ({ threshold = defaultThreshold }: IUseIntersection = {}) => {
  const node: React.RefObject<any> = useRef();

  const isIntersectionObserverAvailable = useMemo(
    () =>
      typeof window !== 'undefined' &&
      'IntersectionObserver' in (window as any) &&
      'IntersectionObserverEntry' in (window as any) &&
      'intersectionRatio' in (window as any).IntersectionObserverEntry.prototype,
    [],
  );

  const [entry, updateEntry] = useState<IntersectionObserverEntry | IIntersectionObserverEntryInit>(
    {
      isIntersecting: false,
      boundingClientRect: { top: 1 },
    },
  );

  const observer = useMemo(
    () =>
      isIntersectionObserverAvailable &&
      new IntersectionObserver(([newEntry]: IntersectionObserverEntry[]) => updateEntry(newEntry), {
        threshold,
      }),
    [isIntersectionObserverAvailable, threshold],
  );

  useEffect(() => {
    observer && observer.disconnect();

    if (node.current && observer) {
      observer && observer.observe(node.current);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, [node, observer]);

  if (!isIntersectionObserverAvailable) {
    // if the intersection observer is not available on this browser
    // act as if the node is always being intersected
    return { node, entry: { ...entry, isIntersection: true } };
  }

  return { node, entry };
};

export default useIntersection;
