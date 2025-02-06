import React from "react";
import ProductTerm from "../ProductTerm/productTerm";
import {Link} from "react-router-dom";
import {useAuth} from "../../Authentication/AuthContext";

const Products = (props) => {
    const { userRoles } = useAuth();
    return(
        <div>
            <h1>Products</h1>
            <table className="table">
                <thead className={"table-primary"}>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Manufacturer</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {props.products.map(product => <ProductTerm term={product} getProduct={props.getProduct} onDelete={props.onDelete} addProduct={props.addProduct}/>)}
                </tbody>

            </table>
            { userRoles.includes("ROLE_ADMIN") && <Link to={"/products/add"} className="btn btn-dark">Add new product</Link>}

        </div>
    )
}

export default Products;