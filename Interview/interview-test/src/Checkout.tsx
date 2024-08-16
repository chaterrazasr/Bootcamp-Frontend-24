import React, { useEffect, useState } from 'react';
import styles from './Checkout.module.css';
import { LoadingIcon } from './Icons';
import { getProducts } from './dataService';

type ProductType = {
  id: number;
  name: string;
  price: number;
  availableCount: number;
};

type ProductProps = ProductType & {
  orderedQuantity: number;
  onAdd: () => void;
  onRemove: () => void;
  total: number;
};

const Product = ({
  id,
  name,
  availableCount,
  price,
  orderedQuantity,
  onAdd,
  onRemove,
  total
}: ProductProps) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price.toFixed(2)}</td>
      <td>{orderedQuantity}</td>
      <td>${total.toFixed(2)}</td>
      <td>
        <button
          className={styles.actionButton}
          onClick={onAdd}
          disabled={orderedQuantity >= availableCount}
        >
          +
        </button>
        <button
          className={styles.actionButton}
          onClick={onRemove}
          disabled={orderedQuantity <= 0}
        >
          -
        </button>
      </td>
    </tr>
  );
};

const Checkout = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((loadedProducts) => {
      setProducts(loadedProducts);
      const initialQuantities = loadedProducts.reduce(
        (acc, product) => ({ ...acc, [product.id]: 0 }),
        {}
      );
      setQuantities(initialQuantities);
      setLoading(false);
    });
  }, []);

  const handleAdd = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleRemove = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) - 1,
    }));
  };

  const totalOrder = products.reduce(
    (acc, product) => acc + (quantities[product.id] || 0) * product.price,
    0
  );

  const discount = totalOrder > 1000 ? totalOrder * 0.1 : 0;
  const finalTotal = totalOrder - discount;

  return (
    <div>
      <header className={styles.header}>
        <h1>Electro World</h1>
      </header>
      <main>
        {loading ? (
          <LoadingIcon />
        ) : (
          <>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th># Available</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    availableCount={product.availableCount}
                    price={product.price}
                    orderedQuantity={quantities[product.id] || 0}
                    onAdd={() => handleAdd(product.id)}
                    onRemove={() => handleRemove(product.id)}
                    total={(quantities[product.id] || 0) * product.price}
                  />
                ))}
              </tbody>
            </table>
            <h2>Order summary</h2>
            <p>Total: ${finalTotal.toFixed(2)}</p>
          </>
        )}
      </main>
    </div>
  );
};

export default Checkout;
