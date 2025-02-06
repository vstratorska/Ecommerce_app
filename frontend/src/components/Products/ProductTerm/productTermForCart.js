
import {Link} from "react-router-dom";
import {useAuth} from "../../Authentication/AuthContext";

const ProductTermForCart = (props) => {

    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.price}</td>
            <td>{props.term.description}</td>
            <td>{props.term.image}</td>
            <td>{props.term.manufacturer.name}</td>
            <td>{props.term.category}</td>
            <td className={"btn btn-danger"} onClick={() => {
                props.deleteProduct(props.term.id)
            }}>Remove from cart
            </td>
        </tr>
    )
}

export default ProductTermForCart;