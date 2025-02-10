import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../Authentication/AuthContext";

const Order = (props) => {
    const navigate = useNavigate();
    const {userRoles} = useAuth();

    return (
        <div>
            <h1 className="text-center custom-title mb-4">Orders</h1>
            {props.orders.length === 0 && userRoles.includes("ROLE_USER") ? <h3 className="no-order">No orders yet? Quick, go make one now!</h3> :
                <table className={"table container table-hover"} style={{marginBottom: "400px"}}>
                    <thead className={"table"}>
                    <tr>
                        {userRoles.includes("ROLE_ADMIN") &&
                            <th>User</th>}
                        <th>Date and Time Created</th>
                        <th>Number of Products</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.orders.map(o =>
                        <tr style={{cursor: "pointer"}} onClick={() => {
                            props.selected(o.id)
                            navigate("/singleOrder")
                        }}>
                            {userRoles.includes("ROLE_ADMIN") &&
                                <td>{o.user.username}</td>}
                            <td>{new Date(o.date).toLocaleString()}</td>
                            <td>{o.products.length}</td>
                            <td>{o.total} EUR</td>
                        </tr>
                    )}
                    </tbody>
                </table>}
        </div>
    )
}

export default Order;