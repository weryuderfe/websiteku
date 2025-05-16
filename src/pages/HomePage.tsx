import React from 'react';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';

const HomePage: React.FC = () => {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Featured Post */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Membedakan
            </h1>
            <p className="text-xl text-gray-600">
              Platform informasi untuk membantu Anda membedakan berbagai produk dan fenomena dalam kehidupan sehari-hari.
            </p>
          </div>

          {/* Featured Post */}
          <PostCard post={featuredPost} featured={true} />
        </div>
      </div>

      {/* Regular Posts Grid */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Artikel Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Dapatkan Artikel Terbaru
            </h2>
            <p className="text-blue-100 mb-8">
              Berlangganan newsletter kami untuk mendapatkan artikel terbaru langsung ke email Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Email Anda"
                className="px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 min-w-[300px]"
              />
              <button className="bg-blue-800 hover:bg-blue-900 transition-colors text-white font-medium px-6 py-3 rounded-lg">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;