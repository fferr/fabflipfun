import { useEffect, useState } from 'react';
const useElementOnScreen = (options, targetRef) => {
  const [isVisible, setIsVisible] = useState();
  const callbackFunction = (entries) => {
    const [entry] = entries; //const entry = entries[0]
    setIsVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);
  return isVisible;
};
export default useElementOnScreen;
