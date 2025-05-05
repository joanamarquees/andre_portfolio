import { useEffect, useState, RefObject } from 'react';

const useScroll_ = (scrollRef: RefObject<HTMLElement | null>) => {
  const [scrollState, setScrollState] = useState<"start" | "end" | "full" | "middle">("full");

  const handleScroll = () => {
    if (!scrollRef || !scrollRef.current) return;
    const el = scrollRef.current

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const atStart = scrollLeft <= 0;
    const atEnd = scrollLeft + clientWidth == scrollWidth;

    if (atStart && atEnd) setScrollState("full"); //when everything is fitting into view
    else if (atStart) setScrollState("start"); //when we are on the start of the scroll
    else if (atEnd) setScrollState("end"); //when we are at the end of the scroll
    else setScrollState("middle"); //when we are mid scrolling
  };

  useEffect(() => {
    if (!scrollRef || !scrollRef.current) return;
    const el = scrollRef.current

    //initial update
    handleScroll();

    //setup event listeners on mount
    el.addEventListener('scroll', handleScroll);

    //listener to get accurate size values from the scroll
    const resizeObserver = new ResizeObserver(handleScroll);
    resizeObserver.observe(el);

    //cleanup event listeners on unmount
    return () => {
      el.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, [scrollRef]);

  return scrollState
}

export default useScroll_;