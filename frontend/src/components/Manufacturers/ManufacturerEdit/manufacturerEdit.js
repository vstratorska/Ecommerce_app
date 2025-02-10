import React from "react";
import {useNavigate} from "react-router-dom";

const ManufacturerEdit = (props) => {

    const navigate = useNavigate()
    const [manufacturer, setManufacturer] = React.useState({
        name: "",
        description: "",
        country: "",
    })


    const handleChange = (e) => {
        setManufacturer({
                ...manufacturer,
                [e.target.name]: e.target.value
            }
        )
    }

    const formSubmited = (e) => {
        e.preventDefault();
        const name = manufacturer.name !== "" ? manufacturer.name : props.manufacturer.manufacturerName;
        const description = manufacturer.description !== "" ? manufacturer.description : props.manufacturer.manufacturerDescription;
        const country = manufacturer.country !== "" ? manufacturer.country : props.manufacturer.manufacturerCountry;


        props.onEdit(props.manufacturer.id, name, description, country);
        navigate("/manufacturers");
    }

    return (
        <div>
            <h1 className="text-center custom-title mb-4">Edit Manufacturer</h1>
            <form onSubmit={formSubmited} className="container mt-5">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input name="name" id="name" type="text" className="form-control" onChange={handleChange}
                           placeholder={props.manufacturer.manufacturerName}

                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input name="description" id="description" type="text" className="form-control"
                           onChange={handleChange}
                           placeholder={props.manufacturer.manufacturerDescription}

                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input name="country" id="country" type="text" className="form-control" onChange={handleChange}
                           placeholder={props.manufacturer.manufacturerCountry}

                    />
                </div>

                <button type="submit" className="btn btn-outline-warning mt-3 custom-submit">Submit</button>
            </form>
        </div>
    )
}

export default ManufacturerEdit;