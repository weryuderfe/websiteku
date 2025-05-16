import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { getPostByPermalink, getRelatedPosts } from '../data/posts';
import TagBadge from '../components/TagBadge';
import RelatedPosts from '../components/RelatedPosts';

const PostPage: React.FC = () => {
  const { year, month, slug } = useParams<{ year: string; month: string; slug: string }>();
  const navigate = useNavigate();
  const permalink = `/${year}/${month}/${slug}`;
  const post = getPostByPermalink(permalink);
  const relatedPosts = post ? getRelatedPosts(post.id, 2) : [];
  
  const formattedDate = post
    ? new Date(post.date).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  useEffect(() => {
    if (!post) {
      navigate('/');
    }
  }, [post, navigate]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Membedakan`;
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Post Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-600 text-white rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-600 text-sm md:text-base mb-8">
            <div className="flex items-center mr-6 mb-2">
              <User size={18} className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Calendar size={18} className="mr-2" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center mb-2">
              <Clock size={18} className="mr-2" />
              <span>{post.readTime} menit baca</span>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-10 overflow-hidden rounded-xl">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Post Content */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg max-w-none mb-10"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="border-t border-gray-200 pt-6 mb-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          </div>
          
          {/* Author Box */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Tentang Penulis</h3>
            <p className="text-gray-700">
              {post.author} adalah kontributor Membedakan yang spesialis di bidang {post.category.toLowerCase()}. 
              Dengan pengalaman lebih dari 5 tahun, {post.author} berbagi pengetahuan praktis untuk membantu 
              pembaca membedakan produk berkualitas.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mb-12">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ChevronLeft size={20} className="mr-1" />
              <span>Kembali</span>
            </button>
            
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>Beranda</span>
              <ChevronRight size={20} className="ml-1" />
            </button>
          </div>
          
          {/* Related Posts */}
          <RelatedPosts posts={relatedPosts} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;