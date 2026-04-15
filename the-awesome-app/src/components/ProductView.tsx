// <ProductView product={product}/>

import React from "react"
import type { Product } from "../model/Product"

type ProductViewProps = {
    product: Product
}

const ProductView: React.FC<ProductViewProps> = React.memo( ({product}) => {

    console.log("rendering productview ", product.id);
    return (
         <div className="product" key={product.id}>
              <p>Id: {product.id}</p>
              <p>Name: {product.name}</p>
              <p>Description: {product.description}</p>
              <p>Price: {product.price}</p>
              {/* <div>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(product);
                  }}
                >
                  Delete
                </button>
                &nbsp;
                <button
                  className="btn btn-info"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
              </div> */}
            </div>
    )
})

export default ProductView;