import React from "react";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";
import ProductTerm from "../Products/ProductTerm/productTerm";
import ProductTermForCart from "../Products/ProductTerm/productTermForCart";

const ShoppingCart = (props) => {
    return (
        <div>
            <h1 className="text-center custom-title mb-4">My Shopping Cart</h1>
            <div>
                <div className="product-list row row-cols-1 row-cols-md-3 gap-4">
                    {props.products.map(p => <ProductTermForCart deleteProduct={props.deleteProduct} term={p}
                                                                 getProduct={props.getProduct}/>)}
                </div>
                <h1 className="total"><span>Total: </span>
                    {Math.round(props.products.map(p => p.price).reduce((accumulator, currentNumber) => accumulator + currentNumber, 0) * 100) / 100}
                    <span> EUR</span>
                </h1>

                <button className="btn btn-success order" onClick={() => {
                    props.order()
                }}><i class="bi bi-bag-heart"></i> Make Order
                </button>
            </div>
        </div>)
}

export default ShoppingCart;