import React, { useEffect, useRef, useState } from 'react'

export default function ComponentHandleAnimation({ children }: any) {
  const renderScreenObserve = useRef<HTMLDivElement>(null);
  const [animationShow, setAnimationShow] = useState(false)

  useEffect(() => {  
    const observer = new IntersectionObserver(async (entries) => {
      setAnimationShow(entries[0]?.isIntersecting)
    });
    if (renderScreenObserve.current) {
      observer.observe(renderScreenObserve.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className={animationShow ? 'animationShow' : ''} ref={renderScreenObserve}>
      {children}
    </div>
  )
}
