import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../model/Product";
import "./ListProducts.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import { useTitle } from "../hooks/useTitle";

//const url = "http://localhost:9000/products";
const url = "http://localhost:9000/secure_products";

function ListProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const auth = useSelector((state: AppState) => state.auth);
  useTitle("List-Products")

  async function fetchProducts() {
    try {
      
      if(!auth.isAuthenticated){
        navigate("/login");
        return;
      }
      const headers = {"Authorization": `Bearer ${auth.accessToken}`}
      const response = await axios.get<Product[]>(url, {headers});
      setProducts(response.data);
      //console.log("products", products);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //      console.log("products", products);
  // }, [products]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function handleDelete(product: Product) {
    try {
      const deleteUrl = url + "/" + product.id;
      await axios.delete(deleteUrl);

      const copy = [...products];

      const index = copy.findIndex((item) => item.id === product.id);
      copy.splice(index, 1);
      setProducts(copy);
      //await fetchProducts();
    } catch {
      alert("Failed to delete");
    }
  }

  function handleEdit(product: Product) {
    navigate("/products/"+ product.id, {state: {product}});
    

    // navigate({
    //   pathname: "/products/" + product.id,
    // //   search: "?search=param",
    // //   hash: "#hash",
    //   state: { some: "" },
    // });
  }

  return (
    <div>
      <h3>List Products</h3>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
        }}
      >
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <p>Id: {product.id}</p>
              <p>Name: {product.name}</p>
              <p>Description: {product.description}</p>
              <p>Price: {product.price}</p>
              <div>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProductsPage;
