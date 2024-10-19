import React from 'react';

interface HeaderProps {
  logoSrc: string;
  bannerSrc: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, bannerSrc }:HeaderProps) => {
  return (
    <header className="">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 border-b-4 border-red-600 bg-gray-200">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 ">
          {/* Logo Image */}
          <img src={logoSrc} alt="SQT Logo" className="w-20 h-auto" />
          <div>
            <h1 className="text-2xl font-bold text-red-600">Harshi Web Solutions</h1>
            <p className="text-sm text-gray-500">We Code For You</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex space-x-6 text-sm font-medium text-gray-700">
          <a href="/" className="hover:text-red-600">Home</a>
          <a href="/about-us" className="hover:text-red-600">About Us</a>
          <a href="/products" className="hover:text-red-600">Products</a>
          <a href="/investors" className="hover:text-red-600">Our Team</a>
          <a href="/quality" className="hover:text-red-600">Quality</a>
          <a href="/customers" className="hover:text-red-600">Customers</a>
          <a href="/contact" className="hover:text-red-600">Contact Us</a>
          <a href="/shigan-group" className="hover:text-red-600">Shigan Group</a>
        </nav>
      </div>

      {/* Banner Section */}
      <section className="">
        <div className="container mx-auto py-6 flex items-center">
          {/* Banner Image */}
          <img src={bannerSrc} alt="Quality Inspection" className="w-full h-auto" />
        
        </div>
      </section>
    </header>
  );
};

export default Header;
