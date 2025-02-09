import React from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../../Authentication/AuthContext";
import makeCategoryToLower from "../../Category/category";

const ProductTerm = (props) => {
    const { userRoles } = useAuth();


    return (
        <div className="card col" style={{width: "18rem"}}>
            <img src={props.term.image} alt={"Image not found"} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.term.name}</h5>
                <p className="card-text">{props.term.description}</p>
                <p className="card-text">Price: {props.term.price} MKD</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Category: {makeCategoryToLower({c: props.term.category})}</li>
                <li className="list-group-item">Manufacturer: {props.term.manufacturer.manufacturerName}</li>
                {userRoles.includes("ROLE_ADMIN") &&
                    <li className="list-group-item">{props.term.quantity}</li>}
            </ul>
            <div className="card-body">
                     { userRoles.includes("ROLE_ADMIN") && <div>
                     <Link className={"btn btn-info ml-2"}
                                   onClick={() => props.getProduct(props.term.id)}
                                   to={`/products/edit/${props.term.id}`}>
                                 Edit
                             </Link>
                     <td className={"btn btn-danger"} onClick={() => {
                                 props.onDelete(props.term.id)
                             }}>Delete
                     </td>
                     </div>
                     }

                     {userRoles.includes("ROLE_USER") &&
                         <button className={"btn btn-success ml-2"}
                                 onClick={() => {
                                     props.addProduct(props.term.id)
                                     alert("Product added to your Shopping Cart!")
                                 }}>Add to Shopping Cart
                     </button>}
            </div>
        </div>

    )
}

export default ProductTerm;