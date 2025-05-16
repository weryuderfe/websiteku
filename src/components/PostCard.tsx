import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, featured = false }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (featured) {
    return (
      <div className="relative group overflow-hidden rounded-xl shadow-lg h-[500px] transition-transform duration-300 hover:scale-[1.01]">
        <Link to={post.permalink}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
          <img 
            src={post.image} 
            alt={post.title} 
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full mb-3">
              {post.category}
            </span>
            <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-200 mb-4 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center text-gray-300 text-sm">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{formattedDate}</span>
              <span className="mx-2">•</span>
              <Clock size={14} className="mr-1" />
              <span>{post.readTime} menit baca</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={post.permalink}>
        <div className="relative overflow-hidden h-52">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full mb-3">
            {post.category}
          </span>
          <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center text-gray-500 text-sm">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{formattedDate}</span>
            <span className="mx-2">•</span>
            <Clock size={14} className="mr-1" />
            <span>{post.readTime} menit baca</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;