import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import EcomService from "../../../repository/ecommercAppRepo";
import { useError } from "../../Errors/errorContext";


const ProductAdd = (props) => {

    const navigate = useNavigate()
    const { setError } = useError();
    const [product, setProduct] = React.useState({
        name: "",
        price: 0,
        description: "",
        image: "",
        quantity: 0,
        category: "",
        manufacturer: 1
    })

    const handleChange = (e) =>
    {
        setProduct( {
                ...product,
                [e.target.name] : e.target.value
            }

        )
    }


    const formSubmited = (e) => {
        e.preventDefault();
        const name = product.name;
        const price = product.price;
        const description = product.description;
        const image = product.image;
        const quantity = product.quantity;
        const category = product.category;
        const manufacturer = product.manufacturer;

        EcomService.addProduct(name, price, description, image, quantity, category, manufacturer)
            .then(() => {
                props.loadProducts()
                setError(null);
                navigate("/products");
            }).catch ((error) => {
            if (error.response) {
                setError(error.response.data.error);
            } else {
                setError("Something went wrong, please try again later.");
            }
        });
    }


    return (
        <form onSubmit={formSubmited}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input name="name" id="name" type="text" className="form-control" onChange={handleChange}
                       value={product.name}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input name="price" id="price" type="text" className="form-control" onChange={handleChange}
                       value={product.price}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input name="description" id="description" type="text" className="form-control" onChange={handleChange}
                       value={product.description}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Image</label>
                <input name="image" id="image" type="text" className="form-control" onChange={handleChange}
                       value={product.image}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input name="quantity" id="quantity" type="text" className="form-control" onChange={handleChange}
                       value={product.quantity}/>
            </div>

            <div className="mb-3">
                <label className="form-label">Category</label>
                <select name="category" className="form-select" onChange={handleChange}>
                    <option></option>
                    {props.categories.map(c => {
                        return <option value={c}>{c}</option>
                    })}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Manufacturer</label>
                <select name="manufacturer"  className="form-select" onChange={handleChange}>
                    <option></option>
                    {props.manufacturers.map(c => {
                        return <option value={c.id}>{c.manufacturerName}</option>
                    })}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default ProductAdd;