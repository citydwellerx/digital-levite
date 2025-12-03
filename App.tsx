import React, { useState } from 'react';
import TerminalLayout from './components/TerminalLayout';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import { BLOG_POSTS } from './constants';
import { ViewState } from './types';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('LIST');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const handleSelectPost = (id: string) => {
    setSelectedPostId(id);
    setViewState('DETAIL');
  };

  const handleNavigateHome = () => {
    setViewState('LIST');
    setSelectedPostId(null);
  };

  const currentPost = selectedPostId 
    ? BLOG_POSTS.find(p => p.id === selectedPostId) 
    : null;

  return (
    <TerminalLayout onNavigateHome={handleNavigateHome}>
      {viewState === 'LIST' && (
        <PostList 
          posts={BLOG_POSTS} 
          onSelectPost={handleSelectPost} 
        />
      )}
      
      {viewState === 'DETAIL' && currentPost && (
        <PostDetail 
          post={currentPost} 
          onBack={handleNavigateHome} 
        />
      )}
      
      {viewState === 'DETAIL' && !currentPost && (
        <div className="text-center py-24 text-ink">
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="mb-8 text-ink-light italic">The page you are looking for has been moved or does not exist.</p>
          <button 
            onClick={handleNavigateHome}
            className="border-b-2 border-ink pb-1 hover:bg-ink hover:text-paper transition-colors"
          >
            Return to Index
          </button>
        </div>
      )}
    </TerminalLayout>
  );
};

export default App;
