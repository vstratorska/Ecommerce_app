import React from "react";
import ProductTerm from "../../Products/ProductTerm/productTerm";
import ProductTermForOrder from "../../Products/ProductTerm/productTermForOrder";
import {useAuth} from "../../Authentication/AuthContext";

const OrderTerm = (props) => {
    const {userRoles} = useAuth();

    return (
        <div className="order-term-container">
            {userRoles.includes("ROLE_ADMIN") && (
                <h1 className="order-title"><b>User:</b> {props.order.user.username}</h1>
            )}
            <h3 className="order-item"><b>Order id:</b> {props.order.id}</h3>
            <h3 className="order-item"><b>Date and time: </b>{new Date(props.order.date).toLocaleString()}</h3>
            <div className="order-products">
                <h3 className="order-products-title">Products:</h3>
                <div className="product-list row row-cols-1 row-cols-md-3 gap-4">
                    {props.order.products.map((p) => (
                        <ProductTermForOrder key={p.id} term={p}/>
                    ))}
                </div>
            </div>
            <h1 className="order-total">Total: {props.order.total} EUR</h1>
        </div>
    );
}

export default OrderTerm;
