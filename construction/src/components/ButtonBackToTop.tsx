import React from 'react'

export default function ButtonBackToTop() {
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
      <button onClick={handleClick}>
        Voltar
      </button>
    )
  }
