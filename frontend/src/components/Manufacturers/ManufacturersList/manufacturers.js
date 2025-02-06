import React from "react";
import ManufacturerTerm from "../ManufacturerTerm/manufacturerTerm";
import {Link} from "react-router-dom";
import {useAuth} from "../../Authentication/AuthContext";

const Manufacturers = (props) => {
    const { userRoles } = useAuth();
    return (

        <div>
            <h1>Manufacturers</h1>
            <table className={"table"}>
                <thead className={"table-primary"}>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Origin Country</th>
                </tr>
                </thead>
                <tbody>
                {props.manufacturers.map(m => {
                    return (<ManufacturerTerm term={m} onDelete={props.onDelete} getManufacturer={props.getManufacturer}/>)
                })}

                </tbody>
            </table>
            { userRoles.includes("ROLE_ADMIN") && <Link className="btn btn-dark" to={"/manufacturers/add"}>Add Manufacturer</Link>}
        </div>

    )
}


export default Manufacturers;