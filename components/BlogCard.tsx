import React from 'react';
import { Blog } from '../types';

interface BlogCardProps {
  blog: Blog;
}

const ArrowRightIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <a 
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1c1c1c] hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/50 transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-4">{blog.title}</h3>
        <div className="text-gray-400 dark:text-gray-500 transform transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0">
          <ArrowRightIcon />
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{blog.desc}</p>
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-500">{blog.date}</div>
    </a>
  );
};

export default BlogCard;