import React from 'react';
import { books, currentlyReading, } from '../data/books.js';
import { Book } from './Book.js'; 
import styles from './Books.css';
import { useSetBookInfo } from '../hooks/useSetBookInfo.js';

export const Books = () => {
  const { image, title, author, progress, pages, url } = currentlyReading;
  const { favTitle, favAuthor, showInfo, handleHover, handleMouseOut } = useSetBookInfo();

  const info = showInfo ? (
    <div className={styles.favinfo}>
      <p>{favTitle}</p>
      <p>by {favAuthor}</p>
    </div>
  ) : (
    <div className={styles.favinfo}>
      <br/>
      <br/>
    </div>
  );

  const bookElemets = books.map(book => (
    <Book key={book.title} title={book.title} author={book.author} image={book.image} url={book.url} handleHover={handleHover} handleMouseOut={handleMouseOut}/>
  ));

  return (
    <section className={styles.books}>
      <h2>Books</h2>
      <h3>Currently Reading</h3>
      <div className={styles.current}>
        <a href={url} rel="noopener noreferrer" target="_blank"><img src={image} alt={title} /></a>
        <div className={styles.info}>
          <h4>{title}</h4>
          <h5>by {author}</h5>
          <progress value={progress} max={pages} />
          <p>{progress} out of {pages} pages</p>
        </div>
      </div>
      <h3>Favorites</h3>
      {info}
      <ul>
        {bookElemets}
      </ul>
    </section>
  );
}