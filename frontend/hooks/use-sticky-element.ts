import { useMemo } from 'react';

import useIntersection from 'hooks/use-intersection';

export default function useStickyElement() {
  const { node: stickyTrigger, entry: stickyTriggerObserver } = useIntersection();

  const isSticky = useMemo(
    () => stickyTriggerObserver.boundingClientRect.top < 1,
    [stickyTriggerObserver],
  );

  return [isSticky, stickyTrigger];
}
