import {Link} from 'react-router-dom';

function appBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          React
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gadgets">Gadget Store</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/viewcart">View Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default appBar;
