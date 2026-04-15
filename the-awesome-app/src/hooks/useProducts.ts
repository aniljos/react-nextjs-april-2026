import { useEffect, useState } from "react";
import type { Product } from "../model/Product";
import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function useProducts(url: string) {
    
  const [products, setProducts] = useState<Product[]>([]);
  const auth = useSelector((state: AppState) => state.auth);
  const navigate = useNavigate();

  async function fetchProducts() {
    try {
      if (!auth.isAuthenticated) {
        navigate("/login");
        return;
      }
      const headers = { Authorization: `Bearer ${auth.accessToken}` };
      const response = await axios.get<Product[]>(url, { headers });
      setProducts(response.data);
      //console.log("products", products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
      fetchProducts();
    }, []);

 return {products, setProducts, fetchProducts};
}
