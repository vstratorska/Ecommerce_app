import React from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../../Authentication/AuthContext";
import makeCategoryToLower from "../../Category/category";

const ProductTerm = (props) => {
    const {userRoles} = useAuth();

    return (
        <div className="card col border-0" style={{width: "18rem"}}>
            <img
                src={props.term.image}
                alt={"Image not found"}
                className="card-img-top rounded-0"
            />
            <div className="card-body p-2">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title font-weight-bold mb-1">{props.term.name}</h5>
                    <p className="card-text font-weight-bold mb-1">{props.term.price} EUR</p>
                </div>
                <p className="card-text mb-1">{props.term.description}</p>
                <p className="card-text mb-2">Manufacturer: {props.term.manufacturer.manufacturerName}</p>
            </div>
            <div className="card-body buttons p-2">
                {userRoles.includes("ROLE_ADMIN") && (
                    <div className="d-flex mb-2">
                        <Link
                            className="btn btn-info btn-sm ml-2"
                            onClick={() => props.getProduct(props.term.id)}
                            to={`/products/edit/${props.term.id}`}>
                            Edit
                        </Link>
                        <button
                            className="btn btn-danger btn-sm ml-2"
                            onClick={() => props.onDelete(props.term.id)}>
                            Delete
                        </button>
                    </div>
                )}
                {userRoles.includes("ROLE_USER") && (
                    <button
                        className="btn btn-success rounded-pill btn-sm mt-2"
                        onClick={() => {
                            props.addProduct(props.term.id)
                            alert("Product added to your Shopping Cart!")
                        }}>
                        Add to Shopping Cart
                    </button>
                )}
            </div>
        </div>
    )
}

export default ProductTerm;