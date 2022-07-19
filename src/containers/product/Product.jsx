import React, { useContext, createContext, useState } from "react";

// import { TodoList } from '../index.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

// import product1 from '../../assets/img/product/product-1.jpg';
// import product2 from '../../assets/img/product/product-2.jpg';
// import product3 from '../../assets/img/product/product-3.jpg';
// import product4 from '../../assets/img/product/product-4.jpg';
// import product5 from '../../assets/img/product/product-5.jpg';
// import product6 from '../../assets/img/product/product-6.jpg';
// import product7 from '../../assets/img/product/product-7.jpg';
// import product8 from '../../assets/img/product/product-8.jpg';
// import product9 from '../../assets/img/product/product-9.jpg';

                    ////////////////
import product1 from '../../assets/img/img-bnc/products/VTTH/bang bo bot.PNG';
import product2 from '../../assets/img/img-bnc/products/VTTH/bang bo bot.PNG';
import product3 from '../../assets/img/img-bnc/products/VTTH/bang bo bot.PNG';
import product4 from '../../assets/img/img-bnc/products/VTTH/Bông băng.PNG';
import product5 from '../../assets/img/img-bnc/products/VTTH/Bông băng.PNG';
import product6 from '../../assets/img/img-bnc/products/VTTH/Bông băng.PNG';
import product7 from '../../assets/img/img-bnc/products/VTTH/Bông băng.PNG';
import product8 from '../../assets/img/img-bnc/products/VTTH/Bông băng.PNG';
import product9 from '../../assets/img/img-bnc/products/VTTH/Bông băng.PNG';
import { Header } from '../../components';
import { ProductsDetails } from '../../containers';

import './product.css';

const Product = () => {

    // const todoList= [
    //     {
    //         id: 1,
    //         title: 'Eat',
    //         status: 'completed'
    //     },
    //     {
    //         id: 2,
    //         title: 'Sleep',
    //         status: 'completed'
    //     },
    //     {
    //         id: 3,
    //         title: 'Code',
    //         status: 'new'

    //     },
    // ]

    return (
        <>{/* ======= Product Section ======= */}
            <section id="product" className="product">
                <div className="container" >
                <div className="section-header">    
                    <h2>Sản phẩm</h2>
                    <p>Danh mục sản phẩm</p>
                </div>
                <div className="row"  data-aos-delay={100}>
                    <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="product-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">Vật Tư Y Tế</li>
                        <li data-filter=".filter-card">Thiết Bị</li>
                        <li data-filter=".filter-web">Y Học Hạt Nhân</li>
                        <button className="btn">
                            <Link to='/all-products'> Xem thêm </Link>
                        </button>
                    </ul>
                    </div>
                </div>
                <div className="row gy-4 product-container"  data-aos-delay={200}>
                    <div className="col-lg-4 col-md-6 product-item filter-app">
                    <div className="product-wrap">
                        <img src={product1} className="img-fluid" alt="" />
                        <div className="product-info">
                        <h4>App 1</h4>
                        <p>App</p>
                        <div className="product-links">
                            <a href={product1} data-gallery="portfolioGallery" className="product-lightbox" title="App 1"><i className="bi bi-plus" /></a>
                            <a href="/product-1 " title="More Details"><i className="bi bi-link" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 product-item filter-web">
                    <div className="product-wrap">
                        <img src={product2} className="img-fluid" alt="" />
                        <div className="product-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <div className="product-links">
                            <a href="assets/img/product/product-2.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 3"><i className="bi bi-plus" /></a>
                            <a href="product-details.html" title="More Details"><i className="bi bi-link" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 product-item filter-app">
                    <div className="product-wrap">
                        <img src={product3} className="img-fluid" alt="" />
                        <div className="product-info">
                        <h4>App 2</h4>
                        <p>App</p>
                        <div className="product-links">
                            <a href="assets/img/product/product-3.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 2"><i className="bi bi-plus" /></a>
                            <a href="product-details.html" title="More Details"><i className="bi bi-link" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 product-item filter-card">
                    <div className="product-wrap">
                        <img src={product4} className="img-fluid" alt="" />
                        <div className="product-info">
                        <h4>Card 2</h4>
                        <p>Card</p>
                        <div className="product-links">
                            <a href="assets/img/product/product-4.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 2"><i className="bi bi-plus" /></a>
                            <a href="product-details.html" title="More Details"><i className="bi bi-link" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 product-item filter-web">
                    <div className="product-wrap">
                        <img src={product5} className="img-fluid" alt="" />
                        <div className="product-info">
                        <h4>Web 2</h4>
                        <p>Web</p>
                        <div className="product-links">
                            <a href="assets/img/product/product-5.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 2"><i className="bi bi-plus" /></a>
                            <a href="product-details.html" title="More Details"><i className="bi bi-link" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 product-item filter-app">
                    <div className="product-wrap">
                        <img src={product6} className="img-fluid" alt="" />
                        <div className="product-info">
                        <h4>App 3</h4>
                        <p>App</p>
                        <div className="product-links">
                            <a href="assets/img/product/product-6.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 3"><i className="bi bi-plus" /></a>
                            <a href="product-details.html" title="More Details"><i className="bi bi-link" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 product-item filter-card">
                    <div className="product-wrap">
                        <img src={product7} className="img-fluid" alt="" />
                        <div className="product-info">
                        <h4>Card 1</h4>
                        <p>Card</p>
                        <div className="product-links">
                            <a href="assets/img/product/product-7.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 1"><i className="bi bi-plus" /></a>
                            <a href="product-details.html" title="More Details"><i className="bi bi-link" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 product-item filter-card">
                    <div className="product-wrap">
                        <img src={product8} className="img-fluid" alt="" />
                        <div className="product-info">
                        <h4>Card 3</h4>
                        <p>Card</p>
                        <div className="product-links">
                            <a href="assets/img/product/product-8.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 3"><i className="bi bi-plus" /></a>
                            <a href="product-details.html" title="More Details"><i className="bi bi-link" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 product-item filter-web">
                    <div className="product-wrap">
                        <img src={product9} className="img-fluid" alt="" />
                        <div className="product-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <div className="product-links">
                            <a href="assets/img/product/product-9.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 3"><i className="bi bi-plus" /></a>
                            <a href="product-details.html" title="More Details"><i className="bi bi-link" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        {/* End Product Section */}
        </>
    );
}

export default Product;