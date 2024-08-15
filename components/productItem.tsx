
import React from 'react'
import { Product } from './dasboardProducts';

interface ProductItemProps {
  product : Product
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const {name, price} = product

  return (
    <div>
       <p>
        Nom : {name}
       </p>
       <p>
        prix :  {price}
       </p>
    </div>
  )
}

export default ProductItem;