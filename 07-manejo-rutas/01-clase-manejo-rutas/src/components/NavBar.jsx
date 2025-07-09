import { Link } from "react-router-dom"

 
 export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a> */}
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">
                                About Us
                            </a> */}
                            <Link to="/about" className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">
                                Store
                            </a> */}
                            <Link to="/store" className="nav-link">Store</Link>
                        </li>
                        <li className="nav-item">
                           {/*  <a className="nav-link" href="#">
                                Cart
                            </a> */}
                            <Link to="/cart" className="nav-link">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}