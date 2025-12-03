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
        <div className="text-center py-20 border border-red-500 text-red-500">
          <h2 className="text-2xl font-bold mb-2">ERROR 404</h2>
          <p>> DATA_CORRUPTED OR FILE_NOT_FOUND</p>
          <button 
            onClick={handleNavigateHome}
            className="mt-4 border border-red-500 px-4 py-2 hover:bg-red-500 hover:text-black"
          >
            RETURN_TO_ROOT
          </button>
        </div>
      )}
    </TerminalLayout>
  );
};

export default App;