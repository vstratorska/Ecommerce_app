import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const ManufacturerAdd = (props) => {

    const navigate = useNavigate()
    const [manufacturer, setManufacturer] = React.useState({
        name: "",
        description: "",
        country: ""
    })

    const handleChange = (e) =>
    {
        setManufacturer( {
                ...manufacturer,
                [e.target.name] : e.target.value
            }

        )
    }

    const formSubmited = (e) => {
        e.preventDefault();
        const name = manufacturer.name;
        const description = manufacturer.description;
        const country = manufacturer.country;


        props.onAdd(name, description, country);
        navigate("/manufacturers");
    }


    return (
        <form onSubmit={formSubmited}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input name="name" id="name" type="text" className="form-control" onChange={handleChange}
                       value={manufacturer.name}/>
            </div>

            <div className="mb-3">
                <label className="form-label">Description</label>
                <input name="description" id="description" type="text" className="form-control" onChange={handleChange}
                       value={manufacturer.description}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Country</label>
                <input name="country" id="country" type="text" className="form-control" onChange={handleChange}
                       value={manufacturer.country}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default ManufacturerAdd;