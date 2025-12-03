import React from 'react';
import { BlogPost } from '../types';

interface PostListProps {
  posts: BlogPost[];
  onSelectPost: (id: string) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onSelectPost }) => {
  return (
    <div className="space-y-12">
      <ul className="space-y-12">
        {posts.map((post) => (
          <li key={post.id} className="group">
            <article 
              className="cursor-pointer"
              onClick={() => onSelectPost(post.id)}
            >
              <div className="flex flex-col mb-2">
                <h2 className="text-2xl font-bold group-hover:underline decoration-2 underline-offset-4 mb-1">
                  {post.title}
                </h2>
                <time className="text-sm text-ink-light font-mono">
                  {post.date}
                </time>
              </div>
              
              <p className="text-ink-light mb-3 leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
              
              <div className="flex gap-3 text-xs uppercase tracking-widest text-ink-light opacity-80">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-accent px-1.5 py-0.5 rounded-sm">#{tag}</span>
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
