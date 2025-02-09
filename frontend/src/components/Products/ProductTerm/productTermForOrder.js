
import {Link} from "react-router-dom";
import {useAuth} from "../../Authentication/AuthContext";
import makeCategoryToLower from "../../Category/category";
import React from "react";

const ProductTermForOrder = (props) => {


    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.price}</td>
            <td>{props.term.description}</td>
            <td><img src={props.term.image} alt={"Image not found"}/></td>
            <td>{props.term.manufacturer.name}</td>
            <td>{makeCategoryToLower({c: props.term.category})}</td>
        </tr>
    )
}

export default ProductTermForOrder;