import React from "react";
import ProductTerm from "../../Products/ProductTerm/productTerm";
import ProductTermForOrder from "../../Products/ProductTerm/productTermForOrder";

const orderTerm = (props) => {
    return (
        <div>
            <h1>User: {props.order.user.username}</h1>
            <h3>Date: {props.order.date}</h3>
            <h3>Products: {props.order.products.map(p => <ProductTermForOrder term={p} />)}</h3>
            <h1>Total: {props.order.total}</h1>
        </div>
    )
}
export default orderTerm;