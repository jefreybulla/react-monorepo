import styles from './product-list.module.scss';

/* eslint-disable-next-line */
export interface ProductListProps {}

export function ProductList(props: ProductListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProductList!</h1>
      <p>This is a change. 👋</p>
    </div>
  );
}

export default ProductList;
