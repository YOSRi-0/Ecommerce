import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home/Home';
import { NavBar } from './components/navbar/NavBar';
import { Announcement } from './components/announcement/Announcement';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { ProductsList } from './pages/products/ProductsList';
import { Product } from './pages/products/Product';
import { Newsletter } from './components/newsletter/Newsletter';

function App() {
    return (
        <Router>
            <Announcement />
            <NavBar />
            <Switch>
                <Route path="/">
                    {/* <ProductsList />; */}
                    {/* <Home/> */}
                    <Product />
                </Route>
            </Switch>
            <Newsletter />
            <Footer />
        </Router>
    );
}

export default App;
