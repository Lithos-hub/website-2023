import { useState, useEffect, useRef } from "react";

export const useIntersectionObserver = (
  options: IntersectionObserverInit = {},
  ref: React.RefObject<Element>
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) observer.current.observe(ref.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [options, ref]);

  return isIntersecting;
};
