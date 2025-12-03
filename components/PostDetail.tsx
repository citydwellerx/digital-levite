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
    <div className="animate-flicker">
      <button 
        onClick={onBack}
        className="mb-6 text-sm hover:bg-terminal-green hover:text-black px-2 py-1 inline-block transition-colors"
      >
        &lt; CD ..
      </button>

      <article className="border border-terminal-dim p-6 md:p-10 bg-black bg-opacity-50 relative overflow-hidden">
        {/* Decorative corner markers */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-terminal-green"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-terminal-green"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-terminal-green"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-terminal-green"></div>

        <header className="mb-8 border-b border-dashed border-terminal-dim pb-6">
          <div className="flex flex-wrap gap-2 mb-4 text-xs uppercase opacity-60">
             {post.tags.map(tag => (
                <span key={tag} className="border border-terminal-dim px-1 rounded">
                  {tag}
                </span>
             ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-terminal-amber shadow-terminal-glow">
            {post.title}
          </h1>
          <time className="text-sm opacity-70 block">
            > DATE_CREATED: {post.date}
          </time>
        </header>

        <div 
          className="prose prose-invert prose-p:text-terminal-green prose-headings:text-terminal-green prose-a:text-terminal-amber prose-code:text-pink-500 max-w-none leading-loose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-6 border-t border-dashed border-terminal-dim flex justify-center opacity-50 text-sm">
          <p>*** END_OF_FILE ***</p>
        </div>
      </article>

      <div className="mt-8 flex justify-center">
        <a 
          href={`mailto:contact@digitallevite.com?subject=Re: ${post.title}`}
          className="text-sm border border-terminal-green px-4 py-2 hover:bg-terminal-green hover:text-black transition-all"
        >
          > REPLY_VIA_EMAIL_PROTOCOL
        </a>
      </div>
    </div>
  );
};

export default PostDetail;