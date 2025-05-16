import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface RelatedPostsProps {
  posts: Post[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Artikel Terkait</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="flex space-x-4">
            <Link to={post.permalink} className="flex-shrink-0">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-20 h-20 object-cover rounded-md"
              />
            </Link>
            <div>
              <h4 className="font-medium text-gray-800 hover:text-blue-600 transition-colors mb-1">
                <Link to={post.permalink}>{post.title}</Link>
              </h4>
              <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;