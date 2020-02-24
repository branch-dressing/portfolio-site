import React from 'react';
import { books } from '../data/books.js';
import { Book } from './Book.js'; 
import styles from './Books.css';
import { useSetBookInfo } from '../hooks/useSetBookInfo.js';

export const Books = () => {
  const { favTitle, favAuthor, showInfo, handleHover, handleMouseOut } = useSetBookInfo();

  const info = showInfo ? (
    <span className={styles.favinfo}>{favTitle} by {favAuthor}</span>
  ) : (
    <span></span>
  );

  const bookElemets = books.map(book => (
    <Book key={book.title} title={book.title} author={book.author} image={book.image} url={book.url} handleHover={handleHover} handleMouseOut={handleMouseOut}/>
  ));

  return (
    <section className={styles.books}>
      <h2>Books {info}</h2>
      <ul>
        {bookElemets}
      </ul>
    </section>
  );
}