import React from 'react'

import styles from './ProductCard.module.css';

export default function ProductCard() {
  return (
    <article className={styles.Container}>
      <button>🤍</button>
      <h2>Iphone 15</h2>
      <img src="images/iphone.png" alt="iphone 15" width={128} height={128}/>
      <p>
        Specifications : ...
        <button>show/hide</button>
      </p>
      <ul className={styles.Specification}>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
      <p>Price : $125</p>
      <button>Buy 1</button>
      <button>Buy 2</button>
    </article>
  )
}
