import React from 'react';
import './faq.css';
import { FaPlus } from "react-icons/fa6";


const FAQ = () => {
    return (
        <>
             <section class="faq-section">
        <div class="faqs-container">
            <div class="header">
                <div class="heading-text">
                    <h1 className='head1'>We know you have questions.</h1>
                </div>

                <div class="sub-text">
                    <p>So we’ve answered some of them.</p>
                </div>
            </div>

            <div class="question-container">
                <div class="text-and-icon">
                    <div class="text">
                        <h3>What is <b>Konectar about?</b></h3>
                    </div>

                    <div className="icon cursor-pointer">
                    <FaPlus />
                    </div>
                </div>

                <div class="answer">
                    <p>Konectar is a business-to-business (B2B) platform that connects farmers directly to business buyers in the fresh produce market, ensuring seamless, fair, and timely transactions</p>
                </div>
            </div>



            <div class="question-container">
                <div class="text-and-icon">
                    <div class="text">
                        <h3>How does <b>Konectar</b> work?</h3>
                    </div>

                    <div className="icon cursor-pointer">
                    <FaPlus />
                    </div>
                </div>

                <div class="answer">
                    <p>Konectar is a business-to-business (B2B) platform that connects farmers directly to business buyers in the fresh produce market, ensuring seamless, fair, and timely transactions</p>
                </div>
            </div>


            <div class="question-container">
                <div class="text-and-icon">
                    <div class="text">
                        <h3>Who can use <b>Konectar?</b></h3>
                    </div>

                    <div className="icon cursor-pointer">
                    <FaPlus />
                    </div>
                </div>

                <div class="answer">
                    <p>Konectar is a business-to-business (B2B) platform that connects farmers directly to business buyers in the fresh produce market, ensuring seamless, fair, and timely transactions</p>
                </div>
            </div>



            <div class="question-container">
                <div class="text-and-icon">
                    <div class="text">
                        <h3>What are the benefits of using<b>Konectar?</b></h3>
                    </div>

                    <div className="icon cursor-pointer">
                    <FaPlus />
                    </div>
                </div>

                <div class="answer">
                    <p>Konectar is a business-to-business (B2B) platform that connects farmers directly to business buyers in the fresh produce market, ensuring seamless, fair, and timely transactions</p>
                </div>
            </div>


            <div class="question-container">
                <div class="text-and-icon">
                    <div class="text">
                        <h3>How does <b>Konectar</b> ensure quality of products?</h3>
                    </div>

                    <div className="icon cursor-pointer">
                    <FaPlus />
                    </div>
                </div>

                <div class="answer">
                    <p>Konectar is a business-to-business (B2B) platform that connects farmers directly to business buyers in the fresh produce market, ensuring seamless, fair, and timely transactions</p>
                </div>
            </div>


            <div class="question-container">
                <div class="text-and-icon">
                    <div class="text">
                        <h3>How do I sign up as farmer or buyer?</h3>
                    </div>

                    <div className="icon cursor-pointer">
                    <FaPlus />
                    </div>
                </div>

                <div class="answer">
                    <p>Konectar is a business-to-business (B2B) platform that connects farmers directly to business buyers in the fresh produce market, ensuring seamless, fair, and timely transactions</p>
                </div>
            </div>


            <div class="question-container">
                <div class="text-and-icon">
                    <div class="text">
                        <h3>How are payments processed on <b>Konectar?</b></h3>
                    </div>

                    <div className="icon cursor-pointer">
                    <FaPlus />
                    </div>
                </div>

                <div class="answer">
                    <p>Konectar is a business-to-business (B2B) platform that connects farmers directly to business buyers in the fresh produce market, ensuring seamless, fair, and timely transactions</p>
                </div>
            </div>



        </div>
    </section>   
        </>
    );
};

export default FAQ;
