import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toGetResetStatus } from '../selectors/selectors';
import { resetDone } from '../actions/componentActions';

export const useDotAnimation = (numOfDots) => {
  const dispatch = useDispatch();
  const setTrail = () => {
    let dots = ''; 
    for(let i = 0; i < numOfDots; i++) {
      dots = dots + '.';
    }
    return dots;
  };
  const reset = useSelector(toGetResetStatus);
  const [display, setDisplay] = useState(false);
  const [dots, setDots] = useState(setTrail() + '>');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if(reset && display) {
      setDots('>');
      setAnimate(false);
    } else if(!display && reset) {
      setAnimate(true);
    }
    dispatch(resetDone());
  }, [reset]);

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
