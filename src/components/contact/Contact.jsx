import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import './contact.css';
// import{ init } from 'emailjs-com';
// init("user_qwmEHFuWxg4SgZyEEhzBn");

const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_gmail', form.current, 'user_qwmEHFuWxg4SgZyEEhzBn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return (
        <div>
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact">
                    <div className="container">
                    <div className="section-header">
                        <h2>Liên hệ</h2>
                        <p>Liên hệ với chúng tôi</p>
                    </div>
                    <div className="row gy-4">
                        <div className="col-lg-6">
                        <div className="row gy-4">
                            <div className="col-md-6">
                            <div className="info-box">
                                <i className="bi bi-geo-alt" />
                                <h3>Địa chỉ</h3>
                                <p>Tầng trệt – 469 Điện Biên Phủ,<br />
                                Phường 03, Quận 03, Tp. Hồ Chí Minh<br /></p>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="info-box">
                                <i className="bi bi-telephone" />
                                <h3>Liên hệ</h3>
                                <p>(+84)941 868 790 - Mr.An<br />
                                (+84)348 316 452 - Ms.Huyền</p>
                                <br />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="info-box"> 
                                <i className="bi bi-envelope" />
                                <h3>Email</h3>
                                <p>info @bncmedical.com.vn<br />
                                contact @bncmedical.com.vn</p>
                                <br />
                                <br />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="info-box">
                                <i className="bi bi-clock" />
                                <h3>Giờ làm việc</h3>
                                <p>Thứ Hai - Thứ Sáu<br />8:30 AM - 05:00 PM</p>
                                <p>Thứ Bảy<br />8:30 AM - 12:00 AM</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        {/* <form action="../forms-contact/contact.php" method="post" className="php-email-form"> */}
                        <form className="php-email-form" ref={form} onSubmit={sendEmail}  >
                            <div className="row gy-4">
                            <div className="col-md-6">
                                <input type="text" className="form-control" name="name" placeholder="Tên của bạn (bắt buộc):" required />
                            </div>
                            <div className="col-md-6 ">
                                <input type="email" className="form-control" name="email" placeholder="Email của bạn (bắt buộc):" required />
                            </div>
                            <div className="col-md-12">
                                <input type="text" className="form-control" name="phone" placeholder="Số điện thoại" required />
                            </div>
                            <div className="col-md-12">
                                <input type="text" className="form-control" name="subject" placeholder="Tiêu đề" required />
                            </div>
                            <div className="col-md-12">
                                <textarea className="form-control" name="message" rows={6} placeholder="Nội dung ....." required defaultValue={""} />
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Tin nhắn của bạn đã được gửi.
                                Chúng tôi sẽ trả lời sớm nhất có thể trong vòng 24h. Xin cảm ơn!</div>
                                <button type="submit">Gửi tin nhắn</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </section>{/* End Contact Section */}
        </div>
    )
}

export default Contact
