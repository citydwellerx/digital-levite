import React, { ReactNode } from 'react';
import { SITE_CONFIG } from '../constants';

interface TerminalLayoutProps {
  children: ReactNode;
  onNavigateHome: () => void;
}

const TerminalLayout: React.FC<TerminalLayoutProps> = ({ children, onNavigateHome }) => {
  return (
    <div className="min-h-screen flex flex-col max-w-3xl mx-auto p-6 md:p-12 relative bg-paper text-ink">
      {/* Header */}
      <header className="border-b-2 border-ink pb-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4">
        <div>
          <h1 
            onClick={onNavigateHome}
            className="text-3xl md:text-4xl font-bold tracking-tight cursor-pointer hover:underline decoration-2 underline-offset-4"
          >
            {SITE_CONFIG.title}
          </h1>
          <p className="text-sm mt-2 text-ink-light italic">
            Est. 2025 | Drafts & Digital Thoughts
          </p>
        </div>
        <nav className="flex gap-6 text-sm font-bold">
          <button 
            onClick={onNavigateHome}
            className="hover:underline underline-offset-4 decoration-2"
          >
            Index
          </button>
          <a 
            href={`mailto:${SITE_CONFIG.contactEmail}`}
            className="hover:underline underline-offset-4 decoration-2"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-accent text-xs md:text-sm flex flex-col md:flex-row justify-between text-ink-light">
        <div className="mb-2 md:mb-0">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.title}. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          {SITE_CONFIG.socials.map(social => (
            <a 
              key={social.name} 
              href={social.url}
              className="hover:text-ink hover:underline transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default TerminalLayout;
