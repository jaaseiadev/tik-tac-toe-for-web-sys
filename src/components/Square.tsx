import React from 'react';

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
