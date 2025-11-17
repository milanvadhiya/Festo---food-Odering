import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-#F0F0F5 text-gray-700 pt-10">
      <div className="max-w-[1250px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Swiggy Blog</a>
            </li>
            <li>
              <a href="#">Swiggy Super</a>
            </li>
            <li>
              <a href="#">Swiggy Corporate</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Safety & Security</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Report a Problem</a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Cancellation & Refund</a>
            </li>
          </ul>
        </div>

        {/* Social & App Download */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Connect with Us</h3>
          <div className="flex gap-3 mb-4">
            <a href="#">
              <FaFacebookF className="w-5 h-5 hover:text-blue-600" />
            </a>
            <a href="#">
              <FaTwitter className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a href="#">
              <FaInstagram className="w-5 h-5 hover:text-pink-500" />
            </a>
            <a href="#">
              <FaYoutube className="w-5 h-5 hover:text-red-500" />
            </a>
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Download the App</h3>
          <div className="flex flex-col gap-2">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm text-gray-500 py-6 border-t border-gray-200 mt-10">
        © {new Date().getFullYear()} Swiggy. All rights reserved.
      </div>
    </footer>
  );
}
