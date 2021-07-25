import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/09/Home/Home'

// import NewArrivals from './pages/NewArrivals'
// import BestSellers from './pages/BestSellers'
// import Fashion from './pages/Fashion'
// import Electronics from './pages/Electronics'
// import Eyewear from './pages/Eyewear'
// import Watches from './pages/Watches'
// import Books from './pages/Books'
// import Accessories from './pages/Accessories'
// import Offers from './pages/Offers'

import Default from './pages/Default'

// import './App.scss'

// import { data } from './services/data'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// const components = {
//   NewArrivals,
//   BestSellers,
//   Fashion,
//   Electronics,
//   Eyewear,
//   Watches,
//   Books,
//   Accessories,
//   Offers,
// }

class App extends Component {
  render() {
    // const routeComponents = data.navLinks.map(({ id, url, component }) => (
    //   <Route exact path={url} component={components[component]} key={id} />
    // ))

    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* {routeComponents} */}
          <Route component={Default} />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
