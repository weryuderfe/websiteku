import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';

const TagPage: React.FC = () => {
  const { tag } = useParams<{ tag: string }>();
  const navigate = useNavigate();
  
  const tagPosts = posts.filter(
    post => post.tags.some(t => t.toLowerCase() === tag?.toLowerCase())
  );
  
  React.useEffect(() => {
    if (tagPosts.length === 0) {
      navigate('/');
    }
  }, [tagPosts.length, navigate]);

  if (tagPosts.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tag: #{tag}
          </h1>
          <p className="text-xl text-gray-600">
            Temukan berbagai artikel dengan tag #{tag} untuk menambah wawasan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tagPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagPage;