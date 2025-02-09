import React from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Order = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Orders</h1>
            <table className={"table container  table-hover"}>
                <thead className={"table-primary"}>
                <tr>
                    <th>User</th>
                    <th>Date Created</th>
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
                        <td>{o.user.username}</td>
                        <td>{o.date}</td>
                        <td>{o.products.length}</td>
                        <td>{o.total} MKD</td>
                    </tr>

                )}
                </tbody>
            </table>
        </div>
    )
}

export default Order;