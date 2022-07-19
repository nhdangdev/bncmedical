import React, { useContext, createContext, useState } from "react";

import {
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

//  <!-- Favicon -->
import '../src/assets/img/apple-touch-icon.png';
import '../src/assets/img/favicon.png';

//  <!-- Vendor CSS Files -->
import '../src/assets/libs/bootstrap-icons/bootstrap-icons.css';
import '../src/assets/libs/bootstrap/css/bootstrap.min.css';
import './App.css';
import { Contact, Footer, Header } from './components';
import {
  About, FAQ, Features, Introductions, Services, Possibility, Product, ProductsDetails, ServicesDetails,  Blog
} from './containers';

// import '../src/assets/libs/aos/aos.css'
// import '../src/assets/libs/remixicon/remixicon.css'
// import '../src/assets/libs/swiper/swiper-bundle.min.css'
// import '../src/assets/libs/glightbox/css/glightbox.min.css'

import logo from './assets/img/rv-logo.png';

import './assets/libs/bootstrap/css/bootstrap.min.css';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';


// const App () => {
function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = {
  //       _limit: 10,
  //     };
  //     const productsList = await productApi.getAll(params);
  //     console.log(productsList);
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div className ="App">
    <Switch>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React Paging Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to React Paging Tutorial</h2> <br/>
          <Switch>
          		<Route exact path='/' component={ Index } />
              <Route  path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Switch>
      

    </div>
  );
}

function AllProducts() {
  return (
    <div>
      <h2>AllProducts</h2>
    </div>
  );
}

export default App;


