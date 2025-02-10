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
import Orders from "../Orders/OrdersList/orders";
import OrderTerm from "../Orders/OrderTerm/orderTerm";
import {ErrorContext} from "../Errors/errorContext"; // Import ErrorContext
class App extends Component {

    static contextType = ErrorContext;

    constructor(props) {
        super(props);
        this.state = {
            manufacturers: [],
            products: [],
            categories: [],
            selectedProduct: {},
            selectedManufacturer: {},
            productsForCart: [],
            orders: [],
            selectedOrder: {}
        }
    }

    render() {
        return (
            <AuthProvider>
                <Router className="container-fluid">
                    <main>
                        <Header makeOrder={this.loadOrders} getOrders={this.loadOrdersForUser}
                                categories={this.state.categories} getByCat={this.loadProductsByCategory}
                                getProducts={this.loadProducts}/>
                        <div>
                            <Routes>
                                <Route path={"/home"} element={<Home search={this.loadProductByName}/>}/>
                                <Route path={"/"} element={<Home search={this.loadProductByName}/>}/>
                                <Route path={"/login"} element={<Login onLoginSuccess={this.onLoginSuccess}/>}/>
                                <Route path={"/register"} element={<Register/>}/>
                                <Route path={"/manufacturers"}
                                       element={<Manufacturers manufacturers={this.state.manufacturers}
                                                               getManufacturer={this.getManufacturer}
                                                               onDelete={this.deleteManufacturer}/>}/>
                                <Route path={"/manufacturers/add"} element={<ProtectedRoute><ManufacturerAdd
                                    onAdd={this.addManufacturer}/></ProtectedRoute>}/>
                                <Route path={"/manufacturers/edit/:id"}
                                       element={<ProtectedRoute><ManufacturerEdit onEdit={this.editManufacturer}
                                                                                  manufacturer={this.state.selectedManufacturer}/></ProtectedRoute>}/>
                                <Route path={"/products/add"}
                                       element={<ProtectedRoute><ProductAdd manufacturers={this.state.manufacturers}
                                                                            categories={this.state.categories}
                                                                            loadProducts={this.loadProducts}/></ProtectedRoute>}/>
                                <Route path={"/products/edit/:id"}
                                       element={<ProtectedRoute><ProductEdit manufacturers={this.state.manufacturers}
                                                                             categories={this.state.categories}
                                                                             product={this.state.selectedProduct}
                                                                             loadProducts={this.loadProducts}/></ProtectedRoute>}/>
                                <Route path={"/products"}
                                       element={<Products products={this.state.products} getProduct={this.getProduct}
                                                          onDelete={this.deleteProduct}
                                                          addProduct={this.addProductToCart}
                                                          search={this.loadProductByName}/>}/>
                                <Route path={"/shoppingCart"}
                                       element={<ProtectedRoute><ShoppingCart products={this.state.productsForCart}
                                                                              getProduct={this.getProduct}
                                                                              deleteProduct={this.deleteProductFromCart}
                                                                              order={this.orderProducts}/></ProtectedRoute>}/>
                                <Route path={"/orders"} element={<ProtectedRoute><Orders orders={this.state.orders}
                                                                                         selected={this.selectOrder}/></ProtectedRoute>}/>
                                <Route path={"/singleOrder"} element={<ProtectedRoute><OrderTerm
                                    order={this.state.selectedOrder}/></ProtectedRoute>}/>
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
        this.loadCategories();
        this.loadManufacturers();

    }

    onLoginSuccess = () => {
        this.loadProductsForCart();
        this.loadProducts();
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

    loadProductsByCategory = (category) => {
        EcomService.fetchProductsByCategory(category).then((data) => {
            this.setState({
                products: data.data
            })
        })
    }

    loadProductByName = (name) => {
        const {setError} = this.context;
        EcomService.fetchProductByName(name).then((data) => {
            this.setState({
                products: data.data
            })
        }).catch((error) => {
            if (error.response) {
                setError(error.response.data.error);
                this.setState({
                    products: []
                })
            } else {
                setError("Something went wrong, please try again later.");
            }
        });
    }


    loadCategories = () => {
        EcomService.fetchCategories().then((data) => {
            this.setState({
                categories: data.data
            })
        })
    }

    loadOrders = () => {
        EcomService.fetchOrders().then((data) => {
            this.setState({
                orders: data.data
            })
        })
    }

    loadOrdersForUser = () => {
        this.setState({
            orders: []
        })
        EcomService.fetchOrdersForUser()
            .then((data) => {
                this.setState({
                    orders: data.data
                })
            }).catch((error) => {
            console.error("Error fetching orders:", error);
        });
    }


    getProduct = (id) => {
        const {setError} = this.context;

        EcomService.getProduct(id).then((data) => {
            this.setState({
                selectedProduct: data.data
            })
            setError(null)
        }).catch((error) => {
            if (error.response) {
                setError(error.response.data.error);
            } else {
                setError("Something went wrong, please try again later.");
            }
        });
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
            this.setState({
                selectedManufacturer: data.data
            })
        })
    }

    deleteManufacturer = (id) => {
        EcomService.deleteManufacturer(id).then(() => this.loadManufacturers())
    }

    loadProductsForCart = () => {
        const {setError} = this.context;

        EcomService.fetchProductsForShoppingCart().then((data) => {
            this.setState({
                productsForCart: data.data
            })
            setError(null)
        }).catch((error) => {
            if (error.response) {
                setError(error.response.data.error);
            } else {
                setError("Something went wrong, please try again later.");
            }
        });
    }

    addProductToCart = (id) => {
        const {setError} = this.context;

        EcomService.addProductToCart(id).then(() => {
            this.loadProductsForCart()
            setError(null);
        }).catch((error) => {
            if (error.response) {
                setError(error.response.data.error); // Backend error
            } else {
                setError("Something went wrong, please try again later.");
            }
        });
    }
    deleteProductFromCart = (id) => {
        const {setError} = this.context;

        EcomService.deleteProductFromCart(id).then(() => {
            this.loadProductsForCart()
            setError(null);
        }).catch((error) => {
            if (error.response) {
                setError(error.response.data.error); // Backend error
            } else {
                setError("Something went wrong, please try again later.");
            }
        });
    }
    orderProducts = () => {
        const {setError} = this.context;

        EcomService.order().then(() => {
            this.loadProductsForCart()
            this.loadProducts();
            alert("Thank you for making an order!")
            setError(null);
        }).catch((error) => {
            if (error.response) {
                setError(error.response.data.error);
            } else {
                setError("Something went wrong, please try again later.");
            }
        });
    }

    selectOrder = (id) => {
        this.setState({
            selectedOrder: this.state.orders.find(o => o.id === id)
        })
    }
}

export default App;
