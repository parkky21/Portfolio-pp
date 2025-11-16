import React from 'react';
import { BLOGS } from '../constants';
import BlogCard from './BlogCard';

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-16 bg-white dark:bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">From the Blog</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl">
            Exploring ideas in AI, software, and technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOGS.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;