import { useEffect, useState } from 'react';

export const useDotAnimation = (numOfDots) => {
  const setTrail = () => {
    let dots = ''; 
    for(let i = 0; i < numOfDots; i++) {
      dots = dots + '.';
    }
    return dots;
  };

  const [display, setDisplay] = useState(false);
  const [dots, setDots] = useState(setTrail() + '>');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if(animate) {
      if(dots.length > 1) {
        setTimeout(() => {
          setDots(dots.slice(0, dots.length - 2) + '<');
        }, 10);
      } else {
        setDisplay(true);
      }
    } else {
      if(dots.length <= numOfDots) {
        setTimeout(() => {
          setDots('.' + dots);
        }, 7);
      } else {
        setDisplay(false);
      }
    }
  }, [dots, animate]);
  
  const handleClick = () => {
    if(!display) {
      setAnimate(true);
    } else {
      setDots('>');
      setAnimate(false);
    }
  };

  return { display, animate, dots, handleClick };

};
