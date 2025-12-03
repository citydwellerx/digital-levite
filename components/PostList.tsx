import React from 'react';
import { BlogPost } from '../types';

interface PostListProps {
  posts: BlogPost[];
  onSelectPost: (id: string) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onSelectPost }) => {
  return (
    <div className="space-y-8">
      <div className="text-sm mb-6 border-l-2 border-terminal-green pl-3 py-1 bg-terminal-dim bg-opacity-20">
        <p>> LISTING FILES IN DIRECTORY...</p>
        <p>> {posts.length} FILES FOUND.</p>
      </div>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="group relative">
            <div 
              className="absolute -left-4 top-0 bottom-0 w-1 bg-terminal-green opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <article 
              className="cursor-pointer border border-transparent hover:border-terminal-dim p-4 -mx-4 transition-all duration-300 hover:bg-terminal-dim hover:bg-opacity-10"
              onClick={() => onSelectPost(post.id)}
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h2 className="text-xl md:text-2xl font-bold group-hover:underline decoration-terminal-green underline-offset-4">
                  {post.title}
                </h2>
                <time className="text-xs opacity-60 font-mono mt-1 md:mt-0">
                  [{post.date}]
                </time>
              </div>
              
              <p className="opacity-80 mb-3 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex gap-2 text-xs uppercase tracking-wider opacity-60">
                {post.tags.map(tag => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
