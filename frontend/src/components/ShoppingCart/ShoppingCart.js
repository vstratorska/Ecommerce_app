import React from "react";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";
import ProductTerm from "../Products/ProductTerm/productTerm";
import ProductTermForCart from "../Products/ProductTerm/productTermForCart";

const ShoppingCart = (props) =>
{
    return (
        <div>
        <h1>My Shopping Cart</h1>
        <div>
            <table className="table">
                <thead className={"table-primary"}>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Manufacturer</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {props.products.map(p => <ProductTermForCart deleteProduct={props.deleteProduct} term={p} getProduct={props.getProduct} />)}
                </tbody>
            </table>
            <h1 style={{marginLeft: "1100px"}}>Total:
                {props.products.map(p => p.price).reduce((accumulator, currentNumber) => accumulator + currentNumber, 0)}
            </h1>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={() => {
                    props.order()
                    alert("Thank you for making an order!")
                }}>Order</button>
            </div>

        </div>
        </div>)
}

export default ShoppingCart;