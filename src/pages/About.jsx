
import React from "react";
import { motion } from "framer-motion";


import PageBanner from "../components/PageBanner";
import AboutBanner from "../assets/banners/about.jpg";
import who_we_are from "../assets/banners/who2.jpg";
import visionImg from "../assets/banners/vision3.jpg";
import missionImg from "../assets/banners/mission.jpg";
import premiumImg from "../assets/banners/gadgets.jpg";
import bestproductImg from "../assets/banners/bestProduct2.jpg";
import supportImg from "../assets/banners/support.jpg";




function About() {
    return (
        <>
            {/* Banner */}
            <PageBanner
                image={AboutBanner}
                title="About Us"
                subtitle="Find the best electronics at unbeatable prices"
                position="0px 1015px"
            />

            {/* ABOUT PAGE CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">

                {/* SECTION 1: WHO WE ARE */}
                <motion.div
                    className="grid md:grid-cols-2 gap-10 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={who_we_are}
                        className="rounded-2xl"
                        alt="Who We Are"
                    />

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We are a modern electronics store committed to providing premium gadgets at the best prices.
                            From mobile phones to laptops and accessories — we deliver quality products that match today’s
                            fast technology world.
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Our mission is simple: make technology accessible, affordable, and reliable for everyone.
                        </p>
                    </div>
                </motion.div>

                {/* SECTION 2: OUR MISSION */}
                <motion.div
                    className="grid md:grid-cols-2 gap-10 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We aim to provide top-quality electronics with transparent pricing, quick delivery,
                            and a smooth shopping experience.
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li>✔ Original & verified gadgets</li>
                            <li>✔ Fast delivery services</li>
                            <li>✔ Affordable & best market prices</li>
                            <li>✔ Trustworthy after-sales support</li>
                        </ul>
                    </div>

                    <img
                        src={missionImg}
                        className="rounded-2xl"
                        alt="Mission"
                    />
                </motion.div>

                {/* SECTION 3: OUR VISION */}
                <motion.div
                    className="grid md:grid-cols-2 gap-10 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={visionImg}
                        className="rounded-2xl"
                        alt="Vision"
                    />

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To become the most trusted and customer-centric electronics store by offering
                            unmatched quality products, reliable services, and future-ready technologies.
                        </p>
                    </div>
                </motion.div>

                {/* SECTION 4: WHY CHOOSE US */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* CARD 1 */}
                        <motion.div
                            className="p-6 bg-white shadow-xl rounded-2xl"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={premiumImg}
                                className="rounded-lg mb-4 w-full h-50 object-cover"
                                alt="Gadgets"
                            />
                            <h3 className="font-bold text-xl mb-2">Premium Gadgets</h3>
                            <p className="text-gray-600">Explore a range of top-quality electronics sourced from reliable and
                                globally trusted brands, ensuring durability, performance, and a superior user experience.
                            </p>
                        </motion.div>

                        {/* CARD 2 */}
                        <motion.div
                            className="p-6 bg-white shadow-xl rounded-2xl"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={bestproductImg}
                                className="rounded-lg mb-4 w-full h-50 object-cover"
                                alt="Support"
                            />
                            <h3 className="font-bold text-xl mb-2">Best Price Guarantee</h3>
                            <p className="text-gray-600"> Our pricing is carefully optimized to give you
                                the greatest value for every purchase. We continuously compare market rates
                                to ensure you always receive high-quality products at the best possible price.
                            </p>
                        </motion.div>

                        {/* CARD 3 */}
                        <motion.div
                            className="p-6 bg-white shadow-xl rounded-2xl"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={supportImg}
                                className="rounded-lg mb-4 w-full h-50 object-cover"
                                alt="Customer"
                            />
                            <h3 className="font-bold text-xl mb-2">24/7 Customer Support</h3>
                            <p className="text-gray-600"> We provide round-the-clock customer assistance
                                to ensure your shopping experience is smooth, hassle-free, and backed by
                                reliable support at every step.
                            </p>
                        </motion.div>
                    </div>





                </motion.div>

            </div>
        </>
    );
}

export default About;
