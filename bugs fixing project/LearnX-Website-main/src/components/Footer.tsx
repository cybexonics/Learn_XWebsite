import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-teachGrow-dark text-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Learn X</h3>
            <p className="text-gray-300">
              India&apos;s newest platform for educators to teach online and grow their teaching business.
            </p>
            {/*<p className="mt-4 text-gray-300 text-sm">
              CIN: [Insert Company CIN]<br />
              GSTIN: [Insert GST Number if applicable]
            </p>*/}
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/#features" className="text-gray-300 hover:text-white">Features</Link></li>
              <li><Link to="/#how-it-works" className="text-gray-300 hover:text-white">How It Works</Link></li>
              <li><Link to="/#faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              <li><Link to="/register" className="text-gray-300 hover:text-white">Register</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: <a href="mailto:applearnx@gmail.com">applearnx@gmail.com</a></li>
              <li>Phone: +91 96049 02393</li>
              <li>Address: <br />
                Office no. 4 1st floor the vidya tower,<br/>
Pencil Chowk Baramati,<br/>
Dist: Pune, Maharashtra, India 413102
              </li>
              <li>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="hover:text-teachGrow-accent">Facebook</a>
                  <a href="#" className="hover:text-teachGrow-accent">Twitter</a>
                  <a href="#" className="hover:text-teachGrow-accent">Instagram</a>
                  <a href="#" className="hover:text-teachGrow-accent">YouTube</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Learn X. All rights reserved.</p>
          <p>
            Designed and Developed by{" "}
            <a
              href="https://cybexonics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:underline"
            >
              Cybexonics IT Consultants Pvt.Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
