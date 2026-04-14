import axios from "axios";
import { useEffect, useState, type ChangeEvent, type MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../model/Product";

function EditProduct() {
  const params = useParams();
  const [product, setProduct] = useState(new Product(0, "", 0, ""));
  const navigate = useNavigate();
  // const location = useLocation();
  // console.log("location", location)
  const id = params.id;

  async function fetchProduct() {
    try {
      const url = "http://localhost:9000/products/" + id;
      const response = await axios.get<Product>(url);
      setProduct(response.data);
      //console.log("products", products);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  async function handleSave(e: MouseEvent<HTMLButtonElement>) {
    try {
      e.preventDefault();
      const url = "http://localhost:9000/products/" + id;
      await axios.put(url, product);
      navigate(-1);
    } catch (error) {
      console.log(error);
      alert("Failed to save...");
    }
  }

  function handleCancel() {
    navigate(-1);
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>){

    // const value = e.target.value;
    // const copy = {...product};
    // copy.name = value;
    // setProduct(copy);

    setProduct({...product, name: e.target.value});
  }

//    function handleChange(e: ChangeEvent<HTMLInputElement>){

//     const value = e.target.value;
//     const propertyName = e.target.name;
//     const copy = {...product};
//     copy[propertyName] = value;
//     setProduct(copy);

    
//   }
  return (
    <div>
      <h3>Edit Product: {id}</h3>
      <form>
        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Product Name"
            value={product.name}
        
             onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="Price"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: e.target.valueAsNumber })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Cescription"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>
        <br />
        <button className="btn btn-success" onClick={handleSave}>
          Save
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-success"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
export default EditProduct;
