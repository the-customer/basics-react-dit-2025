import ProductCard from './components/ProductCard';
import ProductFilter from './components/ProductFilter';
import ProductList from './components/ProductList';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <ProductList/>
      <ProductCard/>
      <ProductFilter/>
    </div>
  )
    ;

}

export default App;
