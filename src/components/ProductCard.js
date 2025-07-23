import React from 'react'

import styles from './ProductCard.module.css';

export default function ProductCard({product}) {


  return (
    <article className={styles.Container}>
      <button
        className={styles.Favorite}
        >🤍</button>
      <h2>{product.title}</h2>
      <img src={product.imageSrc} alt={product.title} width={128} height={128}/>
      <p>
        Specifications : 
        <button>show/hide</button>
      </p>
      <ul className={styles.Specification}>
          {
            product.specification.map((spec,index)=>(
              <li key={index}>{spec}</li>
            ))
          }
        </ul>
      <p>Price : ${product.price}</p>
      
      {
        product.stockCount > 0 && (
          <>
              <button>Buy 1</button>
              <button>Buy 2</button>
          </>
        )
      }
    </article>
  )
}
