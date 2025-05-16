import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  
  const categoryPosts = posts.filter(
    post => post.category.toLowerCase() === category?.toLowerCase()
  );
  
  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  React.useEffect(() => {
    if (categoryPosts.length === 0) {
      navigate('/');
    }
  }, [categoryPosts.length, navigate]);

  if (categoryPosts.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kategori: {formattedCategory}
          </h1>
          <p className="text-xl text-gray-600">
            Temukan berbagai artikel tentang {formattedCategory.toLowerCase()} untuk menambah wawasan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;