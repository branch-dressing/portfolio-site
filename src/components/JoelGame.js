import React from 'react';
import pixelJoel from '../assets/pixel-joel.png';
import { useSelector, useDispatch } from 'react-redux';
import { eatPizza, drinkCoffee, readBook, highFive } from '../actions/actions';
import { toGetControls, toGetStats } from '../selectors/selectors';
import { disableControls } from '../actions/controlActions';

export const JoelGame = () => {
  // const dispatch = useDispatch();
  // const controls = useSelector(toGetControls);
  // const { slices, coffees, books, fives } = useSelector(toGetStats);

  // const render = controls ? (
  //   <>
  //     <button onClick={() => {
  //       dispatch(eatPizza());
  //       dispatch(disableControls());
  //     }}>Pizza: {slices}</button>
  //     <button onClick={() => {
  //       dispatch(drinkCoffee());
  //       dispatch(disableControls());
  //     }}>Coffee: {coffees}</button>
  //     <button onClick={() => {
  //       dispatch(readBook());
  //       dispatch(disableControls());
  //     }}>Book: {books}</button>
  //     <button onClick={() => {
  //       dispatch(highFive());
  //       dispatch(disableControls());
  //     }}>High Five: {fives}</button>
  //   </>) : (
  //   <>
  //     <label htmlFor="slices">Slices</label>
  //     <progress id="slices" value={slices} max="5">Something?</progress>
  //     <br/>
  //     <label htmlFor="coffees">Coffees</label>
  //     <progress id="coffees" value={coffees} max="5"></progress>
  //     <br/>
  //     <label htmlFor="books">Books</label>
  //     <progress id="books" value={books} max="5"></progress>
  //     <br/>
  //     <label htmlFor="fives">Fives</label>
  //     <progress id="fives" value={fives} max="5"></progress>
      
  //   </>
  // );

  return (
    <section>
      <img style={{ width: '125px' }} src={pixelJoel} />
      {/* <div>
        {render}
      </div> */}
    </section>
  );
};
