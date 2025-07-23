
import ProductFilter from './components/ProductFilter';
import ProductList from './components/ProductList';

import styles from './App.module.css';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {

  return (
    <div className={styles.App}>


      <ProductList>
        {
          products.map((prod) => {
            return <ProductCard product={prod} key={prod.id}/>
          })
        }
        
      </ProductList>
      <ProductFilter/>
    </div>
  )
    ;

}

export default App;
