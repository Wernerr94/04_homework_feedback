import React, { useState } from 'react';
import css from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';

export default function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');
  const submitHandler = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };
  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <div>
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={submitHandler}>
          <button type="submit" className={css.button}>
            <span>
              <FcSearch style={{ fontSize: '30px' }} />
            </span>
          </button>

          <input
            className={css.input}
            type="text"
            value={value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    </div>
  );
}
