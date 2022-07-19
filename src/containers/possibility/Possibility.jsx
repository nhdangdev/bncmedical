import React from 'react';
import './possibility.css'
// import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

class Possibility extends React.Component {

    data = {
        products: [
            {
                "id": 1,
                "title" : "Bộ phòng dịch ND Cấp độ 3",
                "titleEng": "Level 3 epidemic prevention suit",
                "description": "Gồm: 01 Bộ áo mũ liền quần (SMS45) 01 Đôi bao chân (SMS45) 01 Găng tay 01 Khẩu trang, Tấm kính chắn giọt bắn. Màu xanh",
                "src": [
                    "https://timviec365.com/pictures/images/vat-tu-y-te-la-gi-4.jpg",
                    "https://bvnguyentriphuong.com.vn/uploads/082021/images/th%C3%B4ng%20tin%20b%E1%BB%87nh%20vi%E1%BB%87n/v%E1%BA%ADt-t%C6%B0-y-t%E1%BA%BF-ti%C3%AAu-hao.jpg",
                    "https://timviec365.com/pictures/images/vat-tu-y-te-la-gi-4.jpg"
                    // "../../assets/img/values-1.png",
                    // "../../assets/img/values-2.png",
                    // "../../assets/img/values-3.png"
                ],
                "count": 1
            },
            {
                "id": 2,
                "title": "Bộ phòng dịch Lv4",
                "description": "Sub text của 2",
                "src": "https://i.ytimg.com/vi/ISpeaH7TOcw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC3sf_urrDr5aW1UH-4hXuUGAL80A",       
                "count": 2
            },
            {
                "id": 3,
                "title": "Khẩu trang y tế 4 lớp",
                "description": "Khẩu trang vải, có lớp giấy kháng khuẩn, 4 lớp, màu xanh, đạt chứng chỉ ISO 13485:2016",
                "src": "https://i.ytimg.com/vi/vuQR6Mj64jQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC1GaujF8fP1m8UEGufSyiy2oRfqw",       
                "count": 3
                
            }
            
        ]
    }
    render() {
        const { products } = this.data;
        // const { subtext } = "Thông tin kỹ thuật";
        console.log(products);
        return (
            <div>
                {/* <Header /> */} 
                {/* check lỗi Header */}
                <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section className="breadcrumbs">
                    <div className="container">
                    <ol>
                        <li><a href="index.html">Home</a></li>
                        <li>Thông tin sản phẩm</li>
                    </ol>
                    <h2>Thông tin sản phẩm</h2>
                    </div>
                </section>
                {/* End Breadcrumbs */}
                {/* ======= Product Details Section ======= */}
        {
            products.map(item => (

                
                <section id="product-details" className="product-details">
                    <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                        <div className="product-details-slider swiper-container">
                            <div className="swiper-wrapper align-items-center">
                                <div className="swiper-slide">
                                    <img src={item.src[0]} alt="" />
                                </div>
                            

                            </div>
                            <div className="swiper-pagination" />
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="product-info">
                            <h3>Thông tin sản phẩm</h3>
                            <ul>
                            <li><span className="product-desc">{item.titleEng}</span></li>
                            <li><strong>Tên sản phẩm</strong>: {item.title}</li>
                            {/* <li><strong>Client</strong>: ASU Company</li> */}
                            {/* <li><strong>Project URL</strong>: <a href="/home">www.bncmedical.com.vn</a></li> */}
                            </ul>
                        </div>
                        <div className="product-description">
                            <h2>Thông tin kỹ thuật</h2>
                            <p>{item.description}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            ))
        }
                {/* End Product Details Section */}
                </main>
                {/* End #main */}

                {/* ======= Footer ======= */}
                
                <Footer/>
                {/* End Footer */}
                <a href="/home" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
            </div>
        );
    };
}

export default Possibility;