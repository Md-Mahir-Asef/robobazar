import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, X, Laptop } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 mt-8 sm:mt-12 lg:mt-20">
            <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-full-2xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-3 sm:mb-4">
                            <img
                                src="/images/logo.png"
                                alt="logo"
                                width={32}
                                height={32}
                                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                            />
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-300 ml-2">
                                Robobazar
                            </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 mb-3 sm:mb-4 max-w-xs sm:max-w-md">
                            Your trusted online marketplace for quality
                            products. We bring the best shopping experience
                            right to your doorstep.
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            <a
                                href="https://x.com/MdMahirAsef"
                                className="text-slate-400 hover:text-amber-300 transition-colors"
                                aria-label="Twitter/X"
                            >
                                <X size={16} />
                            </a>
                            <a
                                href="#"
                                className="text-slate-400 hover:text-amber-300 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={16} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-mahir-asef-dev/"
                                className="text-slate-400 hover:text-amber-300 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={16} />
                            </a>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/products"
                                    className="text-slate-300 hover:text-amber-300 transition-colors"
                                >
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-slate-300 hover:text-amber-300 transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-slate-300 hover:text-amber-300 transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/faq"
                                    className="text-slate-300 hover:text-amber-300 transition-colors"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                            Contact Info
                        </h4>
                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-center text-slate-300">
                                <Laptop
                                    size={14}
                                    className="mr-2 text-amber-300"
                                />
                                <a
                                    href="https://mdmahirasef.vercel.app/"
                                    className="hover:text-amber-300 transition-colors text-xs sm:text-sm"
                                >
                                    https://mdmahirasef.vercel.app/
                                </a>
                            </div>
                            <div className="flex items-center text-slate-300">
                                <Mail
                                    size={14}
                                    className="mr-2 text-amber-300"
                                />
                                <a
                                    href="mailto:mdmahirasef.dev@gmail.com"
                                    className="hover:text-amber-300 transition-colors text-xs sm:text-sm"
                                >
                                    mdmahirasef.dev@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center text-slate-300">
                                <Phone
                                    size={14}
                                    className="mr-2 text-amber-300"
                                />
                                <a
                                    href="tel:+8801832055053"
                                    className="hover:text-amber-300 transition-colors text-xs sm:text-sm"
                                >
                                    +8801832055053
                                </a>
                            </div>
                            <div className="flex items-start text-slate-300">
                                <MapPin
                                    size={14}
                                    className="mr-2 text-amber-300 mt-0.5"
                                />
                                <a
                                    href="https://maps.google.com/?q=Tejgaon, Dhaka-1208, Bangladesh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-amber-300 transition-colors text-xs sm:text-sm"
                                >
                                    Tejgaon, Dhaka-1208, Bangladesh
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-xs sm:text-sm">
                            © 2026 Robobazar. All rights reserved.
                        </p>
                        <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm">
                            <Link
                                to="/privacy"
                                className="text-slate-400 hover:text-amber-300 transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/terms"
                                className="text-slate-400 hover:text-amber-300 transition-colors"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                to="/shipping"
                                className="text-slate-400 hover:text-amber-300 transition-colors"
                            >
                                Shipping Info
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
