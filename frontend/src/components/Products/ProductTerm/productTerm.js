import React from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../../Authentication/AuthContext";

const ProductTerm = (props) => {
    const { userRoles } = useAuth();

    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.description}</td>
            <td>{props.term.price}</td>
            <td>{props.term.image}</td>
            <td>{props.term.quantity}</td>
            <td>{props.term.manufacturer.manufacturerName}</td>
            <td>{props.term.category}</td>
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
        </tr>
    )
}

export default ProductTerm;