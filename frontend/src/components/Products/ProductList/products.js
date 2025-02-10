import React from "react";
import ProductTerm from "../ProductTerm/productTerm";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../Authentication/AuthContext";


const Products = (props) => {
    const {userRoles} = useAuth();
    const [search, setSearch] = React.useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const formSubmited = (e) => {
        e.preventDefault();
        props.search(search);
        setSearch("");
        navigate("/products");
    }

    return (
        <div>
            {!userRoles.includes("ROLE_ADMIN") &&
                <div>
                    <h1 className="text-center custom-title mb-4">Explore Our Products</h1>
                    <form className="d-flex justify-content-center mb-4" onSubmit={formSubmited}>
                        <input
                            className="form-control rounded-pill custom-search-bar"
                            type="search"
                            placeholder="Search product by name"
                            aria-label="Search"
                            value={search}
                            onChange={handleChange}
                        />
                    </form>
                </div>}
            {props.products.length === 0 && <h4 className="no-product">No products to show</h4>}

            {userRoles.includes("ROLE_ADMIN") &&
                <Link to={"/products/add"} className="btn btn-dark add-btn">Add new product</Link>}


            <div className="container ">
                <div className="row row-cols-5 gap-4 justify-content-center">
                    {props.products.map(product => <ProductTerm term={product} getProduct={props.getProduct}
                                                                onDelete={props.onDelete}
                                                                addProduct={props.addProduct}/>)}
                </div>
            </div>
            <hr className="mt-5"/>
        </div>
    )
}

export default Products;