import React, { useEffect } from 'react';
import { BlogPost } from '../types';

interface PostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ post, onBack }) => {
  // Scroll to top when mounting a new post
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.id]);

  return (
    <div>
      <button 
        onClick={onBack}
        className="mb-8 text-sm hover:underline underline-offset-4 flex items-center gap-2 group"
      >
        <span>&larr;</span> Back to Index
      </button>

      <article className="max-w-none">
        <header className="mb-10 pb-8 border-b border-accent">
          <div className="flex flex-wrap gap-2 mb-6 text-xs uppercase tracking-widest text-ink-light">
             {post.tags.map(tag => (
                <span key={tag} className="border border-accent px-2 py-1 rounded-sm">
                  {tag}
                </span>
             ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <time className="text-sm text-ink-light italic">
            Published on {post.date}
          </time>
        </header>

        <div 
          className="prose prose-lg prose-headings:font-bold prose-p:leading-loose prose-a:underline prose-a:decoration-ink-light prose-a:underline-offset-2 hover:prose-a:text-ink hover:prose-a:decoration-ink"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-8 border-t border-accent flex justify-center text-ink-light text-2xl tracking-widest">
          <p>***</p>
        </div>
      </article>

      <div className="mt-12 flex justify-center">
        <a 
          href={`mailto:contact@digitallevite.com?subject=Re: ${post.title}`}
          className="text-sm border-b border-ink pb-0.5 hover:border-b-2 hover:font-bold transition-all"
        >
          Reply via Email
        </a>
      </div>
    </div>
  );
};

export default PostDetail;
