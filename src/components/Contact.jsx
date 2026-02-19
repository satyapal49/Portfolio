import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarked, FaPhone, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Contact = ()=>{
    return (
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1, ease: "easeOut"}}
        viewport={{once:false, amount: 0.2}}
        id="contact"
        className="py-20 bg-dark-200"
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4">Get In
                    <span className="text-orange"> Touch</span>
                </h2>
                <p className="text-grey-400 text-center max-w-2xl mx-auto mb-16">
                    Have a project in mind or want to collaborate? Let's talk!
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <div>
                        <form action="" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-grey-300 mb-2">Your Name</label>
                                <input type="text" id="name" className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-grey-300 mb-2">Email Address</label>
                                <input id="email" type="email" className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-grey-300 mb-2">Your Message</label>
                                <textarea type="text" id="message" className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"/>
                            </div>
                            <button type="submit" className="w-full px-6 py-3 bg-orange rounded-lg font-medium hover:bg-orange-700 rounded-lg transition duration-300 cursor-pointer">
                                Send
                            </button>
                            
                        </form>
                    </div>
                    {/* Contact info */}
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="text-orange text-2xl mr-4">
                                <FaMapMarked />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Location</h3>
                                <p className="text-grey-400">New Delhi, Laxmi Nagar</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="text-orange text-2xl mr-4">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Email</h3>
                                <p className="text-grey-400">satyapalraj49@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="text-orange text-2xl mr-4">
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                                <p className="text-grey-400">+91 9507842149</p>
                            </div>
                        </div>
                        {/* Follow ME */}
                        <div className="pt-4">
                        <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/satyapal49" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange hover:bg-orange hover:text-white transition duration-300">
                                <FaGithub/>
                            </a>
                             <a href="https://www.linkedin.com/in/satyapal-raj-/" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange hover:bg-blue hover:text-white transition duration-300">
                                <FaLinkedinIn/>
                            </a>
                             <a href="https://x.com/satyapall49" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange hover:bg-[#1e9ceb] hover:text-white transition duration-300">
                                <FaTwitter/>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact;