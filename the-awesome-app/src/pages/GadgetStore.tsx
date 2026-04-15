import { useDispatch } from "react-redux";
import { useProducts } from "../hooks/useProducts";
import {addToCart as addToReduxCart} from '../redux/gadgetsReducer';
import { CartItem } from "../model/CartItem";
import type { Product } from "../model/Product";

const url = "http://localhost:9000/products";
function GadgetStorePage(){

    const {products} = useProducts(url);
    const dispatch = useDispatch();

    function addToCart(product: Product): void {

        const action = addToReduxCart(new CartItem(product, 1));
        dispatch(action);
    }

    function renderProducts() {

        const productsView =  products.map((item) => {
           

            return (
                <div className="col" key={item.id} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button className="btn btn-primary" onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
    
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }


    return (
        <div>
            <h1>Gadget Store</h1>

            <div>
                {renderProducts()}
            </div>
        </div>

    );
}
export default GadgetStorePage;