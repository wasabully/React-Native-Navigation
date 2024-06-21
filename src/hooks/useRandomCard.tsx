import { useState, useEffect } from 'react';
import data from '../card/card';

const useRandomCard = () => {
  const [randomCard, setRandomCard] = useState([]);

  useEffect(() => {
    shuffleData();
  }, []);
  const shuffleData = () => {
    const randomCardArray = [...data].sort(() => Math.random() - 0.5);
    setRandomCard(randomCardArray);
  };
  return randomCard;
};
export default useRandomCard;
