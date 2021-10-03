import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Drinks from './components/Drinks/Drinks';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import Details from './components/Details/Details';
import ReviewDrink from './components/ReviewDrink/ReviewDrink';
import { createContext, useState } from 'react';
import OrderComplete from './components/OrderComplete/OrderComplete';
import Footer from './components/Footer/Footer';


export const cartContext = createContext();

function App() {

  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={[cart, setCart]}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/drinks'>
            <Drinks />
          </Route>
          <Route path='/details/:id'>
            <Details />
          </Route>
          <Route path='/inventory'>
            <Inventory />
          </Route>
          <Route path='/review'>
            <ReviewDrink />
          </Route>
          <Route path='/completeOrder'>
            <OrderComplete />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
