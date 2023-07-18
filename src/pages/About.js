import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="./images/about-img.jpg" />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg> */}
                                    <img style={{borderRadius:"50%"}} src='./images/12.jpg' alt='UPENDRA'/>
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Upendra Singh Bhadouria</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                                    <p className="text-base">Frontend Developer and Javascript Enthusiast, Who Loves Building Things In Javascript. 🔥 👨🏽‍💻🏅</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">eCommerce or electronic commerce is when a transaction occurs using the internet. An example is when a customer (the buyer) purchases one or more products or services online from a virtual storefront (the seller). eCommerce applications or e-commerce apps are design patterns of functionality needed to list items for purchase, facilitate a transaction by accepting payment methods, and initiate fulfillment of those purchases. </p>
                                <Link className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About
