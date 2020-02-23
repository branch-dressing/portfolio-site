import React from 'react';
import pixelJoel from '../assets/pixel-joel.png';
import { useSelector, useDispatch } from 'react-redux';
import { eatPizza, drinkCoffee, readBook, highFive } from '../actions/actions';
import { toGetControls, toGetStats } from '../selectors/selectors';
import { disableControls } from '../actions/controlActions';
import styles from './JoelGame.css';

export const JoelGame = () => {
  const dispatch = useDispatch();
  const controls = useSelector(toGetControls);
  const { slices, coffees, books, fives } = useSelector(toGetStats);

  return (
    <section className={styles.joelGame}>
      <p className={styles.hidden}>Aaaa! The walls are closing in!!!</p>
      <img className={styles.joel} src={pixelJoel} />
      {/* <div>
        <h5>Choose One:</h5>
        <p>give Joel a...</p>
        <button onClick={() => {
          dispatch(eatPizza());
          dispatch(disableControls());
        }}>Pizza: {slices}</button>
        <button onClick={() => {
          dispatch(drinkCoffee());
          dispatch(disableControls());
        }}>Coffee: {coffees}</button>
        <button onClick={() => {
          dispatch(readBook());
          dispatch(disableControls());
        }}>Book: {books}</button>
        <button onClick={() => {
          dispatch(highFive());
          dispatch(disableControls());
        }}>High Five: {fives}</button>
      </div> */}
    </section>
  );
};
