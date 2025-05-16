import React from 'react';
import { Link } from 'react-router-dom';

interface TagBadgeProps {
  tag: string;
  className?: string;
}

const TagBadge: React.FC<TagBadgeProps> = ({ tag, className = '' }) => {
  return (
    <Link 
      to={`/tag/${tag}`} 
      className={`inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors ${className}`}
    >
      #{tag}
    </Link>
  );
};

export default TagBadge;