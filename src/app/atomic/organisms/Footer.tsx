import React from "react";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#474747] text-white py-8 px-4">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <img src="../../resources/svg/japanese-food.svg" className="text-white" />
                    <img src="../../resources/image/Taste&ToastTitle.png" className="text-white" />
                    <h2 className="text-2xl font-italic mb-2">
                        Taste & Toast
                    </h2>
                    <p className="text-sm text-gray-400 mb-4">
                        In the new era of technology, we look towards the future with certainty and pride for our USFX university
                    </p>
                    <div className="flex space-x-2">
                        <Twitter size={24} />
                        <Facebook size={24} />
                        <Instagram size={24} />
                        <Github size={24} />
                    </div>
                </div>

                {/* Pages */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Pages</h3>
                    <ul className="text-sm">
                        <li><a href="#" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300">About</a></li>
                        <li><a href="#" className="hover:text-gray-300">Menu</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>

                {/* Instagram Feed */}
                <div className="w-full md:w-1/3">
                    <h3 className="text-lg font-semibold mb-2">Follow Us On Instagram</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <img src="/food-meal-1.png" alt="Food 1" className="rounded-lg" />
                        <img src="/food-meal-2.png" alt="Food 2" className="rounded-lg" />
                        <img src="/food-meal-3.png" alt="Food 3" className="rounded-lg" />
                        <img src="/food-meal-4.png" alt="Food 4" className="rounded-lg" />
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 text-sm text-gray-400">
                Copyright © 2024 Osmar & Polo. All Rights Reserved
            </div>
        </footer>
    );
}
export default Footer;