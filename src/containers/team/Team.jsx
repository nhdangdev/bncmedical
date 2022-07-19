import React from 'react';
import './team.css';
import client1 from '../../assets/img/clients/client-1.png';
import client2 from '../../assets/img/clients/client-2.png';
import client3 from '../../assets/img/clients/client-3.png';
import client4 from '../../assets/img/clients/client-4.png';
import client5 from '../../assets/img/clients/client-5.png';
import client6 from '../../assets/img/clients/client-6.png';
import client7 from '../../assets/img/clients/client-7.png';
import client8 from '../../assets/img/clients/client-8.png';

const Team = () => {
    return (
        <>{/* ======= Clients Section ======= */}
            <section id="clients" className="clients">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                    <h2>Khách hàng của chúng tôi</h2>
                    <p>Khách hàng đã và đang làm việc với chúng tôi</p>
                    </div>
                    <div className="clients-slider swiper-container">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide"><img src={ client1 } className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src={ client2 } className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src={ client3 } className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src={ client4 } className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src={ client5 } className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src={ client6 } className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src={ client7 } className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src={ client8 } className="img-fluid" alt="" /></div>
                    </div>
                    <div className="swiper-pagination" />
                    </div>
                </div>
            </section>
            {/* End Clients Section */}
        </>
    );
}

export default Team;