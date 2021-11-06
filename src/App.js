import "./App.css";
import { Home } from "./pages/home/Home";
import { NavBar } from "./components/navbar/NavBar";
import { Announcement } from "./components/announcement/Announcement";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { ProductsList } from "./pages/products/ProductsList";
import { Product } from "./pages/products/Product";
import { Newsletter } from "./components/newsletter/Newsletter";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Cart } from "./pages/cart/Cart";

useState

function App() {
    return (
        <Router>
            <Announcement />
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/products" exact>
                    <ProductsList />
                </Route>
                <Route path="/products/1">
                    <Product />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
            <Newsletter bg="#e9ecef" />
            <Footer />
        </Router>
    );
}

export default App;
