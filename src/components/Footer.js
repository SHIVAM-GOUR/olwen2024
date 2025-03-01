// import React from "react";

// const Footer = () => {
//     return (
//         <footer className="bg-orange-10 text-gray-10 py-8">
//             <div className="container mx-auto px-4">

//                 <div className="flex flex-row justify-between items-start space-x-8">
//                     {/* Contact */}
//                     <div>
//                         <h4 className="text-xl font-General Sans font-semibold mb-4 text-white">Contact</h4>
//                         <ul className="space-y-2">
//                             <li>
//                                 <span className="font-medium text-base">123 Road, Dhaka, Bangladesh</span>

//                             </li>
//                             <li>
//                                 +88017010767000
//                             </li>
//                             <li>
//                                 sajiburdemo121@gmail.com
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Quick Links */}
//                     <div>
//                         <h4 className="text-xl font-General Sans font-semibold mb-4 text-white">Quick Links</h4>
//                         <ul className="space-y-2">
//                             <li><a href="/" className="hover:text-white">Home</a></li>
//                             <li><a href="/about" className="hover:text-white">About</a></li>
//                             <li><a href="/services" className="hover:text-white">Services</a></li>
//                             <li><a href="/careers" className="hover:text-white">Careers</a></li>
//                             <li><a href="/contact" className="hover:text-white">Contact</a></li>
//                         </ul>
//                     </div>

//                     {/* Specialties */}
//                     <div>
//                         <h4 className="text-xl font-General Sans font-semibold mb-4 text-white">Specialties</h4>
//                         <ul className="space-y-2">
//                             <li>Anesthesiology</li>
//                             <li>Psychiatry</li>
//                             <li>General Surgery</li>
//                             <li>Family Medicine</li>
//                             <li>Pediatrics</li>
//                         </ul>
//                     </div>

//                     {/* Services */}
//                     <div>
//                         <h4 className="text-xl font-General Sans font-semibold mb-4 text-white">Services</h4>
//                         <ul className="space-y-2">
//                             <li>Medical</li>
//                             <li>Operation</li>
//                             <li>Laboratory</li>
//                             <li>ICU</li>
//                             <li>Patient Ward</li>
//                         </ul>
//                     </div>

//                     {/* Social Media */}
//                     <div>
//                         <h4 className="text-xl font-General Sans font-semibold mb-4 text-white">Social Media</h4>
//                         <ul className="flex space-x-4">
//                             <li>
//                                 Facebook
//                             </li>
//                             <li>
//                                Linkedin
//                             </li>
//                             <li>
//                                 Instagram
//                             </li>
//                             <li>
//                            Youtube
//                             </li>
//                             <li>
                                
//                             </li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Copyright and Legal Links */}
//                 <div className="border-t border-white pt-4 text-center mt-8">
//                     <p className="text-sm">&copy; 2023 HEALTHY. All rights reserved.</p>
//                     <ul className="flex justify-center space-x-4 mt-2 text-sm">
//                         <li><a href="/terms-and-conditions" className="hover:text-white">Terms and Conditions</a></li>
//                         <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-orange-10 text-gray-10 py-8">
            <div className="container mx-auto px-4">

                <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
                    {/* Contact */}
                    <div>
                        <h4 className="text-xl font-General Sans font-semibold mb-4 text-white">Contact</h4>
                        <ul className="space-y-2">
                            <li>
                                <span className="font-medium text-base">123 Road, Dhaka, Bangladesh</span>
                            </li>
                            <li>
                                +88017010767000
                            </li>
                            <li>
                                sajiburdemo121@gmail.com
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-General Sans font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-white">Home</a></li>
                            <li><a href="/about" className="hover:text-white">About</a></li>
                            <li><a href="/services" className="hover:text-white">Services</a></li>
                            <li><a href="/careers" className="hover:text-white">Careers</a></li>
                            <li><a href="/contact" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Specialties */}
                    <div>
                        <h4 className="text-xl font-General Sans font-semibold mb-4 text-white">Specialties</h4>
                        <ul className="space-y-2">
                            <li>Anesthesiology</li>
                            <li>Psychiatry</li>
                            <li>General Surgery</li>
                            <li>Family Medicine</li>
                            <li>Pediatrics</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-General Sans font-semibold mb-4 text-white">Services</h4>
                        <ul className="space-y-2">
                            <li>Medical</li>
                            <li>Operation</li>
                            <li>Laboratory</li>
                            <li>ICU</li>
                            <li>Patient Ward</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-xl font-General Sans font-semibold mb-4 text-white">Social Media</h4>
                        <ul className="flex space-x-4">
                            <li>Facebook</li>
                            <li>Linkedin</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright and Legal Links */}
                <div className="border-t border-white pt-4 text-center mt-8">
                    <p className="text-sm">&copy; 2023 HEALTHY. All rights reserved.</p>
                    <ul className="flex justify-center space-x-4 mt-2 text-sm">
                        <li><a href="/terms-and-conditions" className="hover:text-white">Terms and Conditions</a></li>
                        <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
