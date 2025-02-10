import React from "react";
import homepageImage from '../../assets/homepage-image.jpg'
import {useNavigate} from "react-router-dom";

const Home = (props) => {
    const [search, setSearch] = React.useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const formSubmited = (e) => {
        e.preventDefault();
        props.search(search);
        navigate("/products");
    }
    return (
        <section className="container-fluid position-relative p-0">
            <img className="img-fluid homepage-image" src={homepageImage} alt="No image"/>
            <div className="text-overlay">
                <h1 className={"first"}>Dressify</h1><h1>Your Ultimate Fashion Destination</h1>
                <p>Welcome to Dressify, where fashion meets convenience!</p>
                <form className="d-flex" role="search" onSubmit={formSubmited}>
                    <input onChange={handleChange} className="form-control me-2 rounded-pill" type="search"
                           placeholder="Search product by name" aria-label="Search"/>
                </form>
            </div>
        </section>
    )
}

export default Home;