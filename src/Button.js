import React, { useState } from 'react';
import './Button.css';

function Button(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Cargar');

  const handleClick = () => {
    setIsLoading(true);
    setButtonText('Cargando');

    setTimeout(() => {
      setIsLoading(false);
      setButtonText('Cargar');
    }, 3000);
  };

  return (
    <button className="button" onClick={handleClick}>
      {isLoading ? <div className="loader"></div> : buttonText}
    </button>
  );
}

export default Button;
