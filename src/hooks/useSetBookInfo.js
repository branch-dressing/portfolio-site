import { useState } from 'react';

export const useSetBookInfo = () => {
  const [favTitle, setTitle] = useState('');
  const [favAuthor, setAuthor] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleHover = (title, author) => {
    setShowInfo(true);
    setTitle(title);
    setAuthor(author);
  };
  const handleMouseOut = () => setShowInfo(false);

  return { favTitle, favAuthor, showInfo, handleHover, handleMouseOut };
}