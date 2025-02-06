import React from "react";
import products from "../ProductList/products";
import {useNavigate} from "react-router-dom";

const ProductEdit = (props) => {

    const navigate = useNavigate()
    const [product, setProduct] = React.useState({
        name: "",
        price: 0,
        description: "",
        image: "",
        quantity: 0,
        category: "",
        manufacturer: 0
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
        const name = product.name !== "" ? product.name : props.product.name;
        const price = product.price !== 0 ? product.price : props.product.price;
        const description = product.description !== "" ? product.description : props.product.description;
        const image = product.image !== "" ? product.image : props.product.image;
        const quantity = product.quantity !== 0 ? product.quantity : props.product.quantity;
        const category = product.category !== "" ? product.category : props.product.category;
        const manufacturer = product.manufacturer !== 0 ? product.manufacturer : props.product.manufacturer.id;

        props.onEdit(props.product.id, name, price, description, image, quantity, category, manufacturer);
        navigate("/products");
    }

    return (
        <form onSubmit={formSubmited}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input name="name" id="name" type="text" className="form-control" onChange={handleChange}
                       placeholder={props.product.name}

                />
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input name="price" id="price" type="text" className="form-control" onChange={handleChange}
                       placeholder={props.product.price}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input name="description" id="description" type="text" className="form-control" onChange={handleChange}
                       placeholder={props.product.description}

                />
            </div>
            <div className="mb-3">
                <label className="form-label">Image</label>
                <input name="image" id="image" type="text" className="form-control" onChange={handleChange}
                       placeholder={props.product.image}

                />
            </div>
            <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input name="quantity" id="quantity" type="text" className="form-control" onChange={handleChange}
                       placeholder={props.product.quantity}

                />
            </div>
            <div className="mb-3">
                <label className="form-label">Category</label>
                <input name="category" id="category" type="text" className="form-control" onChange={handleChange}
                       placeholder={props.product.category}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Manufacturer</label>
                <select name="manufacturer" className="form-select" onChange={handleChange}>
                    {props.manufacturers.map(c => {
                        if (props.product.manufacturer !== undefined && props.product.manufacturer.id === c.id)
                            return <option selected={props.product.manufacturer.id} value={c.id}>{c.manufacturerName}</option>
                        else return <option value={c.id}>{c.manufacturerName}</option>
                    })}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default ProductEdit;