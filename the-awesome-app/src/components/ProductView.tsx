// <ProductView product={product}/>

import React from "react"
import type { Product } from "../model/Product"
import axios from "axios"

type ProductViewProps = {
    product: Product;
    //onDelete?: (product: Product) => Promise<void>
    onDelete?: (product: Product) => void
    onEdit?: (product: Product) => void
}

const ProductView: React.FC<ProductViewProps> =  ({product, onDelete, onEdit}) => {

    console.log("rendering productview ", product.id);

    async function handleDelete(){
        try {
            
            const url = import.meta.env.VITE_API_URL + "/secure_products/" + product.id;
            await axios.delete(url);
            if(onDelete){
                //equivalent to emitting the event
                onDelete(product);
            }

        } catch {
            alert("failed to delete");
        }
    }

    return (
         <div className="product" key={product.id}>
              <p>Id: {product.id}</p>
              <p>Name: {product.name}</p>
              <p>Description: {product.description}</p>
              <p>Price: {product.price}</p>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                &nbsp;
                <button
                  className="btn btn-info"
                  onClick={() => onEdit!(product)}>
                  Edit
                </button>
              </div>
            </div>
    )
}

export default ProductView;