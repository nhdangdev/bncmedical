import React, { useState } from 'react'
import './faq.css'

const FAQ = () => {

    const [desc, setDesc] = useState('accordion-button collapsed')
    const [showDesc, setShowDesc] = useState('accordion-collapse collapse')

    const handleClickDesc = () => {
        setDesc(desc === 'accordion-button collapsed' ? 'accordion-button' : 'accordion-button collapsed')
        || setShowDesc(showDesc === 'accordion-collapse collapse' ? 'accordion-collapse collapse show' : 'accordion-collapse collapse')
    }

    console.log('desc: ',desc);
    console.log('showDesc: ',showDesc);

    return (
         <>{/* ======= F.A.Q Section ======= */}
            <section id="faq" className="faq">
                    <div className="container" data-aos="fade-up">
                    <header className="section-header">
                        <h2>F.A.Q</h2>
                        <p>Các câu hỏi thường gặp</p>
                    </header>
                    <div className="row">
                        <div className="col-lg-6">
                        {/* F.A.Q List 1*/}
                        <div className="accordion accordion-flush" id="faqlist1">
                            <div className="accordion-item">


                {/* Button 1 */}
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1"
                                    onClick = {handleClickDesc}>
                                Câu hỏi 1?
                                </button>
                            </h2>
                {/* Button 2 */}
                            <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                                <div className="accordion-body">
                                Câu trả lời của câu hỏi 1.....
                                </div>
                            </div>
                            </div>



                            <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                Câu hỏi 2?
                                </button>
                            </h2>
                            <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                                <div className="accordion-body">
                                Câu trả lời của câu hỏi 2.....
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                Câu hỏi 3?
                                </button>
                            </h2>
                            <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                                <div className="accordion-body">
                                Câu trả lời của câu hỏi 3.....
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        {/* F.A.Q List 2*/}
                        <div className="accordion accordion-flush" id="faqlist2">
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-1">
                                Câu hỏi 4?
                                </button>
                            </h2>
                            <div id="faq2-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                                <div className="accordion-body">
                                Câu trả lời của câu hỏi 4.....
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-2">
                                Câu hỏi 5?
                                </button>
                            </h2>
                            <div id="faq2-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                                <div className="accordion-body">
                                Câu trả lời của câu hỏi 5.....
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-3">
                                Câu hỏi 6?
                                </button>
                            </h2>
                            <div id="faq2-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                                <div className="accordion-body">
                                Câu trả lời của câu hỏi 6.....
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>{/* End F.A.Q Section */}
        </>
    )
}

export default FAQ
