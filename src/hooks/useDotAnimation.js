import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toGetResetStatus } from '../selectors/selectors';
import { resetDone, changeOpen } from '../actions/componentActions';

export const useDotAnimation = (numOfDots) => {
  const dispatch = useDispatch();
  const setTrail = () => {
    let dots = ''; 
    for(let i = 0; i < numOfDots; i++) {
      dots = dots + '.';
    }
    return dots;
  };
  const { reset, totalOpen} = useSelector(toGetResetStatus);
  const [display, setDisplay] = useState(false);
  const [dots, setDots] = useState(setTrail() + '>');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if(reset && display) {
      setDots('>');
      setAnimate(false);
    } 
    else if(!display && reset && totalOpen === 0) {
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
        dispatch(changeOpen(1));
      }
    } else if(display){
      if(dots.length <= numOfDots) {
        setTimeout(() => {
          setDots('.' + dots);
        }, 7);
      } else {
        setDisplay(false);
        dispatch(changeOpen(-1));
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
