import React from "react";
import ManufacturerTerm from "../ManufacturerTerm/manufacturerTerm";
import {Link} from "react-router-dom";
import {useAuth} from "../../Authentication/AuthContext";

const Manufacturers = (props) => {
    const {userRoles} = useAuth();
    return (

        <div>
            {!userRoles.includes("ROLE_ADMIN") &&
                <h1 className="text-center custom-title mb-4">Our Manufacturers</h1>}
            {userRoles.includes("ROLE_ADMIN") &&
                <Link className="btn btn-dark add-btn" to={"/manufacturers/add"}>Add Manufacturer</Link>}
            <table className={"table container mt-3"} style={{marginBottom: "100px"}}>
                <tbody>
                {props.manufacturers.map(m => {
                    return (
                        <ManufacturerTerm term={m} onDelete={props.onDelete} getManufacturer={props.getManufacturer}/>)
                })}

                </tbody>
            </table>
        </div>


    )
}


export default Manufacturers;