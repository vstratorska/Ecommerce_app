import React from "react";
import ProductTerm from "../ProductTerm/productTerm";
import {Link} from "react-router-dom";
import {useAuth} from "../../Authentication/AuthContext";

const Products = (props) => {
    const { userRoles } = useAuth();

    return(
        <div>
            <h1>Products</h1>
            <div className="container " >
                <div className="row row-cols-5 gap-4 justify-content-center">
                    {props.products.map(product => <ProductTerm term={product} getProduct={props.getProduct} onDelete={props.onDelete} addProduct={props.addProduct}/>)}
                </div>
            </div>
            { userRoles.includes("ROLE_ADMIN") && <Link to={"/products/add"} className="btn btn-dark">Add new product</Link>}
        </div>
    )
}

export default Products;