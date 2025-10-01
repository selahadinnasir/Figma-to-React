import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Brand or note */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} MyWardrobe. All rights reserved.
        </p>

        {/* Middle: Figma link */}
        <a
          href="https://www.figma.com/design/cxB4coXKwrbu65ey1OUbGc/Ecomerce-Website--Community-?node-id=0-1&p=f&t=FFzo8RYMEhKYNHnx-0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-3xl hover:underline mt-4 md:mt-0"
        >
          View Original Figma Design →
        </a>
      </div>
    </footer>
  );
};

export default Footer;
