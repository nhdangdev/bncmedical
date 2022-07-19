import React from 'react';
import { Routes, Route, Router, Link, Switch } from 'react-router-dom';

// import { Blog } from '../../containers/blog/Blog'
import logo from '../../assets/img/rv-logo.png';
import '../navbar/navbar.css';
import './header.css';
import { Product } from '../../containers';
import { Blog } from '../../containers';

const Home = () => {

    // const [name, setName] = useState('Developer-products');

    // useEffect(() => {
    //   fetch('http://localhost:8000/products')
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     setProducts(data)
    //   })
    // }, [])

    // const deleteProducts = (id) => {
    //   const newProducts = products.filter( products => products.id !== id)
    //   setProducts(newProductsList);
    // // }
    //   <Router>
    //       <div className="App">
    //           <Route path="/" exact component={Header} />
    //           <Route path="/about" component={Introductions} />
    //           <Route path="/products" component={Products} />
    //       </div>
    //   </Router>
    return (
         /* ======= Header ======= */
          <header id="header" className="header fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
              <a href="/" className="logo d-flex align-items-center">
                <img src={logo} alt="Logo" />
                <span>Medical Equipment</span>
              </a>
              <nav id="navbar" className="navbar">
                <ul>
                  <li><a className="nav-link scrollto active" href="#hero">Trang chủ</a></li>
                  <li><a className="nav-link scrollto" href="#about">Giới thiệu</a></li>
                  <li><a className="nav-link scrollto" href="#services">Dịch vụ</a></li>
                  <li><a className="nav-link scrollto" href="#product">Danh mục</a></li>

                  {/* <li><a className="nav-link scrollto" href="#team">Team</a></li> */}
                  {/* <li><a href="blog.html">Blog</a></li> */}
                  <li className="dropdown"><a href="/#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
                    <ul>
                      <li><a href="/#">Drop Down 1</a></li>
                      <li className="dropdown"><a href="/#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                        <ul>
                          <li><a href="/#">Deep Drop Down 1</a></li>
                          <li><a href="/#">Deep Drop Down 2</a></li>
                          <li><a href="/#">Deep Drop Down 3</a></li>
                          <li><a href="/#">Deep Drop Down 4</a></li>
                          <li><a href="/#">Deep Drop Down 5</a></li>
                        </ul>
                      </li>
                      <li><a href="/#">Drop Down 2</a></li>
                      <li><a href="/#">Drop Down 3</a></li>
                      <li><a href="/#">Drop Down 4</a></li>
                    </ul>
                  </li>
                  <li><a className="nav-link scrollto" href="#contact">Liên hệ</a></li>
                  <li><a className="getStarted scrollto" href="#about">Get Started</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle" />
              </nav>{/* .navbar */}
            </div>
            {/* {products && <ProductsList products ={products} title="All Article" deleteArticle = {deleteArticle} /> }
            <button className="getStarted scrollto" onClick = {() => setName('Đây là setName')}>Change Name Value</button>
            <p> {name} </p> */}
          </header>
          /* End Header */
      )
}

export default Home
