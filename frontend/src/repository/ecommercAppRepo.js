import axios from "../custom-axios/axios";
import noAuth from "../custom-axios/axiosNoAuth";


const EcomService = {
    fetchManufacturers: () => {
        return axios.get("/manufacturers", { withCredentials: true });
    },

    fetchProducts: () => {
        return noAuth.get("/products");
    },
    fetchProductsForShoppingCart: () => {
        return axios.get("/shopping-cart");
    },
    // fetchCategories: () => {
    //     return axios.get("/categories",  { withCredentials: true });
    // },
    deleteProduct: (id) => {
        return axios.delete(`/products/delete/${id}`);
    },
    addProduct: (name, price, description, image, quantity, category, manufacturer) => {
        return axios.post("/products/add", {
            "name" : name,
            "price" : price,
            "description" : description,
            "image" : image,
            "quantity" : quantity,
            "category" : category,
            "manufacturerId" : manufacturer,
        })
    },
    editProduct: (id, name, price,description, image, quantity, category, manufacturer) => {
        return axios.put(`/products/edit/${id}`, {
            "id" : id,
            "name": name,
            "price": price,
            "description": description,
            "image": image,
            "quantity": quantity,
            "category": category,
            "manufacturerId": manufacturer,
        })
    },
    getProduct: (id) => {
        return axios.get(`/products/${id}`);
    },
    addManufacturer: (name, description, country) => {
        return axios.post("/manufacturers/add", {
            "manufacturerName" : name,
            "manufacturerDescription" : description,
            "manufacturerCountry" : country,
        })
    },
    editManufacturer: (id, name, description, country) => {
        return axios.put(`/manufacturers/edit/${id}`, {
            "id" : id,
            "manufacturerName": name,
            "manufacturerDescription": description,
            "manufacturerCountry": country,
        })
    },
    deleteManufacturer: (id) => {
        return axios.delete(`/manufacturers/delete/${id}`);
    },
    getManufacturer: (id) => {
        return axios.get(`/manufacturers/${id}`);
    },
    addProductToCart: (id) => {
        return axios.post(`/shopping-cart/add/${id}`)
    },
    deleteProductFromCart: (id) => {
        return axios.post(`/shopping-cart/remove/${id}`)
    },
    order: () => {
        return axios.get("/shopping-cart/order")
    },

    registerUser: (username, password, repeatPassword, name, surname) => {
        return axios.post("/register", {
            "username": username,
            "password": password,
            "repeatPassword": repeatPassword,
            "name" : name,
            "surname": surname
        })
    },
}

export default EcomService;