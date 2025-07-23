import React from 'react'
import styles from './ProductList.module.css';



export default function ProductList({children}) {
  return (
    <>
      <h2>Our Products</h2>
      <div className={styles.List}>
        {children}
      </div>
    </>
  )
}