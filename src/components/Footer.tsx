import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-semibold text-white">Membedakan</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Platform informasi untuk membantu Anda membedakan berbagai produk dan fenomena dalam kehidupan sehari-hari.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@membedakan.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Kategori</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category/pertanian" className="text-gray-400 hover:text-white transition-colors">
                  Pertanian
                </Link>
              </li>
              <li>
                <Link to="/category/kuliner" className="text-gray-400 hover:text-white transition-colors">
                  Kuliner
                </Link>
              </li>
              <li>
                <Link to="/category/kesehatan" className="text-gray-400 hover:text-white transition-colors">
                  Kesehatan
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Tautan</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Syarat dan Ketentuan
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Berlangganan</h3>
            <p className="text-gray-400 mb-4">
              Dapatkan artikel terbaru langsung ke email Anda.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Membedakan. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;