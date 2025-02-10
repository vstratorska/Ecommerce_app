import {Link} from "react-router-dom";
import {useAuth} from "../../Authentication/AuthContext";
import makeCategoryToLower from "../../Category/category";
import React from "react";

const ProductTermForCart = (props) => {


    return (
        <div className="card col border-0" style={{width: "18rem"}}>
            <img src={props.term.image} alt={"Image not found"} className="card-img-top rounded-0"/>
            <div className="card-body p-2">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title font-weight-bold mb-1">{props.term.name}</h5>
                    <p className="card-text font-weight-bold mb-1">{props.term.price} EUR</p>
                </div>
                <p className="card-text mb-1">{props.term.description}</p>
                <p className="card-text mb-2">Manufacturer: {props.term.manufacturer.manufacturerName}</p>
                <button className={"btn btn-danger"} onClick={() => {
                    props.deleteProduct(props.term.id)
                }}>Remove from cart
                </button>
            </div>
        </div>
    )
}

export default ProductTermForCart;