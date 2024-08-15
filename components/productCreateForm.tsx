import React, { useState } from 'react';
import { Product } from './dasboardProducts';
import { Interface } from 'node:readline/promises';
import { v4 as uuidv4} from 'uuid'

interface ProductFormProps {
  onAddProduct: (product: Product)=> void;
};

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {_id : uuidv4() , name, price };
    onAddProduct(newProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
