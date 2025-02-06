import React, {Component} from "react";
import './App.css';
import {BrowserRouter as Router, data, Route, Routes} from 'react-router-dom'
import EcomService from "../../repository/ecommercAppRepo";
import Header from "../Header/header";
import Manufacturers from "../Manufacturers/ManufacturersList/manufacturers";
import Products from "../Products/ProductList/products";
import Home from "../Home/home";
import Footer from "../Footer/footer";
import ProductAdd from "../Products/ProductAdd/productAdd";
import ProductEdit from "../Products/ProductEdit/productEdit";
import ManufacturerAdd from "../Manufacturers/ManufacturerAdd/manufacturerAdd";
import ManufacturerEdit from "../Manufacturers/ManufacturerEdit/manufacturerEdit";
import Register from "../Register/register";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Login from "../Authentication/login";
import ProtectedRoute from "../Authentication/ProtectedRoute";
import {AuthProvider} from "../Authentication/AuthContext";

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            manufacturers: [],
            products: [],
            categories: [],
            selectedProduct: {},
            selectedManufacturer: {},
            productsForCart: []
        }
    }

    render() {
        return(
            <AuthProvider>
            <Router className="container-fluid">
                <main>
                    <Header/>
                    <div >
                        <Routes >
                            <Route path={"/home"} element={<Home/>}/>
                            <Route path={"/"} element={<Home/>}/>
                            <Route path={"/login"} element={<Login onLoginSuccess={this.onLoginSuccess} />}/>
                            <Route path={"/register"} element={<Register reg={this.register}/>}/>
                            <Route path={"/manufacturers"} element={<ProtectedRoute><Manufacturers manufacturers = {this.state.manufacturers} getManufacturer={this.getManufacturer} onDelete={this.deleteManufacturer}/></ProtectedRoute>}/>
                            <Route path={"/manufacturers/add"} element={<ProtectedRoute><ManufacturerAdd onAdd={this.addManufacturer}/></ProtectedRoute>}/>
                            <Route path={"/manufacturers/edit/:id"} element={<ProtectedRoute><ManufacturerEdit onEdit={this.editManufacturer} manufacturer={this.state.selectedManufacturer}/></ProtectedRoute>}/>
                            <Route path={"/products/add"} element={<ProtectedRoute><ProductAdd manufacturers = {this.state.manufacturers} onAdd={this.addProduct}/></ProtectedRoute>}/>
                            <Route path={"/products/edit/:id"} element={<ProtectedRoute><ProductEdit manufacturers = {this.state.manufacturers} onEdit={this.editProduct} product={this.state.selectedProduct}/></ProtectedRoute>}/>
                            <Route path={"/products"} element={<Products products = {this.state.products} getProduct={this.getProduct} onDelete={this.deleteProduct}  addProduct={this.addProductToCart}/>}/>
                            <Route path={"/shoppingCart"} element={<ProtectedRoute><ShoppingCart products = {this.state.productsForCart} getProduct={this.getProduct} deleteProduct={this.deleteProductFromCart} order={this.orderProducts} /></ProtectedRoute>}/>

                        </Routes>
                    </div>
                    <Footer/>
                </main>
            </Router>
            </AuthProvider>
        )
    }

    componentDidMount() {
        this.loadProducts();
    }
    onLoginSuccess = () =>
    {
        this.loadManufacturers();
        this.loadProductsForCart();
    }

    register = (username, password, repeatPassword, name, surname) => {
        EcomService.registerUser(username, password, repeatPassword, name, surname).then(() => this.loadProducts())
    }

    loadManufacturers = () => {
        EcomService.fetchManufacturers().then((data) => {
            this.setState({
                manufacturers: data.data
            })
        })
    }

    loadProducts = () => {
        EcomService.fetchProducts().then((data) => {
            this.setState({
                products: data.data
            })
        })
    }

    addProduct = (name, price, description, image, quantity, category, manufacturer) => {
        EcomService.addProduct(name, price, description, image, quantity, category, manufacturer).then(() => this.loadProducts())
    }
    editProduct = (id, name, price, description, image, quantity, category, manufacturer) => {
        EcomService.editProduct(id, name, price, description, image, quantity, category, manufacturer).then(() => this.loadProducts())
    }
    getProduct = (id) => {
        EcomService.getProduct(id).then((data) => {
            this.setState( {
                selectedProduct: data.data
            })
        })
    }
    deleteProduct = (id) => {
        EcomService.deleteProduct(id).then(() => this.loadProducts())
    }

    addManufacturer = (name, description, country) => {
        EcomService.addManufacturer(name, description, country).then(() => this.loadManufacturers())
    }
    editManufacturer = (id, name, description, country) => {
        EcomService.editManufacturer(id, name, description, country).then(() => this.loadManufacturers())
    }
    getManufacturer = (id) => {
        EcomService.getManufacturer(id).then((data) => {
            this.setState( {
                selectedManufacturer: data.data
            })
        })
    }

    deleteManufacturer = (id) => {
        EcomService.deleteManufacturer(id).then(() => this.loadManufacturers())
    }

    loadProductsForCart = () => {
        EcomService.fetchProductsForShoppingCart().then((data) => {
            this.setState({
                productsForCart: data.data
            })
        })
    }

    addProductToCart = (id) => {
        EcomService.addProductToCart(id).then(() => this.loadProductsForCart())
    }
    deleteProductFromCart = (id) => {
        EcomService.deleteProductFromCart(id).then(() => this.loadProductsForCart())
    }
    orderProducts = () => {
        EcomService.order().then(() => this.loadProductsForCart())
    }

}

export default App;
