import React from 'react';
import pixelJoel from '../assets/pixel-joel.png';
// import { useSelector, useDispatch } from 'react-redux';
// import { eatPizza, drinkCoffee, readBook, highFive } from '../actions/actions';
// import { toGetControls, toGetStats } from '../selectors/selectors';
// import { disableControls } from '../actions/controlActions';
import styles from './JoelGame.css';

export const JoelGame = () => {
  // const dispatch = useDispatch();
  // const { slices, coffees, books, fives } = useSelector(toGetStats);

  return (
    <section className={styles.joelGame}>
      <div>
        <p className={styles.hidden}>Aaaa! The walls are closing in!!!</p>
        <img className={styles.joel} src={pixelJoel} />
      </div>
      {/* <div>
        <p>give Joel a...</p>
        <button onClick={() => dispatch(eatPizza())}>Pizza: {slices}</button>
        <button onClick={() => dispatch(drinkCoffee())}>Coffee: {coffees}</button>
        <button onClick={() => dispatch(readBook())}>Book: {books}</button>
        <button onClick={() => dispatch(highFive())}>High Five: {fives}</button>
      </div> */}
    </section>
  );
};
