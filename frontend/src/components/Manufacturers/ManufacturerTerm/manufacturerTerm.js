import React from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../../Authentication/AuthContext";

const ManufacturerTerm = (props) => {
    const {userRoles} = useAuth();

    return (
        <tr>
            <td>{props.term.manufacturerName}</td>
            <td>{props.term.manufacturerDescription}</td>
            <td>{props.term.manufacturerCountry}</td>
            {userRoles.includes("ROLE_ADMIN") && <div>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.getManufacturer(props.term.id)}
                      to={`/manufacturers/edit/${props.term.id}`}>
                    Edit
                </Link>
                <button className="btn btn-danger" onClick={() => props.onDelete(props.term.id)}>Delete</button>
            </div>
            }
        </tr>

    )
}

export default ManufacturerTerm;