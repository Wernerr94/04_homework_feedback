import React from 'react';
import css from './Button.module.css';

export default function Button({ onLoad }) {
  return (
    <button className={css.button} type="button" onClick={onLoad}>
      Load more
    </button>
  );
}
