import axios from "axios";
import { Product } from "../model/Product";
import "./ListProducts.css";
import { useNavigate } from "react-router-dom";

import { useTitle } from "../hooks/useTitle";
import { useProducts } from "../hooks/useProducts";
import { useCallback, useMemo, useState } from "react";
import ProductView from "../components/ProductView";

//const url = "http://localhost:9000/products";
const url = "http://localhost:9000/secure_products";

function ListProductsPage() {
  
  const {products, setProducts} = useProducts(url);
  const [isMessageVisible, setVisible] = useState(true);
  const navigate = useNavigate()
  useTitle("List-Products")



  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const  onProductDelete =useCallback((product: Product) => {
    try {
      const copy = [...products];

      const index = copy.findIndex((item) => item.id === product.id);
      copy.splice(index, 1);
      setProducts(copy);
      //await fetchProducts();
    } catch {
      alert("Failed to delete");
    }
  }, [products])

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const  handleEdit = useCallback((product: Product) => {
    navigate("/products/"+ product.id, {state: {product}});
  }, [])

  const totalPrice =useMemo( () => {

    console.log("calculating total price");
    let total = 0;
    products.forEach(p => {
      if(p.price)
        total += p.price
    })
    return total;

  }, [products])

  return (
    <div>
      <h3>List Products</h3>
      <div>Total Price: {totalPrice}</div>
      {isMessageVisible? <div className="alert alert-info">
                                  Demo for ListProducts</div> : null}

      <br />
      <button className="btn btn-info" 
            onClick={() => setVisible(!isMessageVisible)}>
              {isMessageVisible? "Hide": "Show"}
            </button>

      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
        }}
      >
        {products.map((product) => {
          return (
            <ProductView key={product.id} 
                          product={product} 
                          onDelete={onProductDelete}
                          onEdit={handleEdit}/>
            // <div className="product" key={product.id}>
            //   <p>Id: {product.id}</p>
            //   <p>Name: {product.name}</p>
            //   <p>Description: {product.description}</p>
            //   <p>Price: {product.price}</p>
            //   <div>
            //     <button
            //       className="btn btn-danger"
            //       onClick={() => {
            //         handleDelete(product);
            //       }}
            //     >
            //       Delete
            //     </button>
            //     &nbsp;
            //     <button
            //       className="btn btn-info"
            //       onClick={() => handleEdit(product)}
            //     >
            //       Edit
            //     </button>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProductsPage;
