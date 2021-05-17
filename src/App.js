import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";


// import Navbar from "./components/Navbar";
import Footer from './components/Footer'

import MainPage from "./pages/MainPage";

import NewArrivals from "./pages/NewArrivals";
import BestSellers from "./pages/BestSellers";
import Fashion from "./pages/Fashion";
import Electronics from "./pages/Electronics";
import Eyewear from "./pages/Eyewear";
import Watches from "./pages/Watches";
import Books from "./pages/Books";
import Accessories from "./pages/Accessories";
import Offers from "./pages/Offers";

import Default from "./pages/Default";

import "./App.scss";
import {data} from './services/data';

const Navbar = lazy(() => import('./components/Navbar'))

const components = {
  NewArrivals,
  BestSellers,
  Fashion,
  Electronics,
  Eyewear,
  Watches,
  Books,
  Accessories,
  Offers
};


class App extends Component {
  render() {

    const routeComponents = data.navLinks.map(({id, url, component}) => <Route exact path={url} component={components[component]} key={id} />);

    return (
      <React.Fragment>
        <Suspense fallback={<div className='loading'>stop! just loading...</div>} >
          <Navbar />
        </Suspense>
        
        <Switch>
          <Route exact path="/Yeshtery" component={MainPage} />
            {routeComponents}
          <Route component={Default} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
