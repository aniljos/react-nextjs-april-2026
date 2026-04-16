import AppBar from "./components/AppBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import LoginPage from "./pages/Login";
import ListProductsPage from "./pages/ListProducts";
import EditProduct from "./pages/EditProduct";
import GadgetStorePage from "./pages/GadgetStore";
import ViewCartPage from "./pages/ViewCart";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <AppBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Counter initCount={5}/>} />
            <Route path="/products" 
                element={<ProtectedRoute><ListProductsPage/></ProtectedRoute>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/products/:id" element={<ProtectedRoute><EditProduct/></ProtectedRoute>}/>
            <Route path="/gadgets" element={<ProtectedRoute><GadgetStorePage/></ProtectedRoute>}/>
            <Route path="/viewcart" element={<ViewCartPage/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
