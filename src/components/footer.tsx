
const Footer = () => {
    return (
      <footer className="container mx-auto flex justify-between items-center py-4 px-6 border-b-4 border-red-600 bg-gray-200">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex justify-between items-center">
            <ul className="flex space-x-6 text-sm text-gray-700">
              <li><a href="/" className="hover:text-red-600">Home</a></li>
              <li><a href="/company" className="hover:text-red-600">Company</a></li>
              <li><a href="/products" className="hover:text-red-600">Products</a></li>
              <li><a href="/quality" className="hover:text-red-600">Quality</a></li>
              <li><a href="/customers" className="hover:text-red-600">Customers</a></li>
              <li><a href="/contact" className="hover:text-red-600">Contact Us</a></li>
              <li><a href="/news" className="hover:text-red-600">News</a></li>
              <li><a href="/sitemap" className="hover:text-red-600">Sitemap</a></li>
            </ul>
            <p className="text-sm text-gray-600">
              Design By: <span className="font-semibold">Harshi Web Solutions</span>
            </p>
          </nav>
        </div>
      </footer>
    );
  };

export default Footer;
