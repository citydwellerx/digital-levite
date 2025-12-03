import React, { ReactNode } from 'react';
import { SITE_CONFIG } from '../constants';

interface TerminalLayoutProps {
  children: ReactNode;
  onNavigateHome: () => void;
}

const TerminalLayout: React.FC<TerminalLayoutProps> = ({ children, onNavigateHome }) => {
  return (
    <div className="min-h-screen flex flex-col max-w-4xl mx-auto p-4 md:p-8 relative">
      {/* Header */}
      <header className="border-b-2 border-terminal-green pb-4 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 
            onClick={onNavigateHome}
            className="text-3xl md:text-5xl font-bold tracking-tighter cursor-pointer hover:text-white transition-colors"
          >
            {SITE_CONFIG.title}
          </h1>
          <p className="text-sm mt-2 opacity-80">
            > EST. 2024 | SYSTEM_READY | <span className="animate-blink inline-block w-2 h-4 bg-terminal-green align-middle"></span>
          </p>
        </div>
        <nav className="flex gap-4 text-sm font-bold">
          <button 
            onClick={onNavigateHome}
            className="hover:bg-terminal-green hover:text-black px-2 py-1 transition-colors uppercase"
          >
            [ROOT]
          </button>
          <a 
            href={`mailto:${SITE_CONFIG.contactEmail}`}
            className="hover:bg-terminal-green hover:text-black px-2 py-1 transition-colors uppercase"
          >
            [CONTACT]
          </a>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow relative z-10 animate-flicker">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-terminal-dim mt-12 pt-6 text-xs md:text-sm text-center md:text-left flex flex-col md:flex-row justify-between opacity-70">
        <div className="mb-2 md:mb-0">
          <p>> COPYRIGHT (C) {new Date().getFullYear()} {SITE_CONFIG.title}</p>
          <p>> ALL_RIGHTS_RESERVED</p>
        </div>
        <div className="flex gap-4 justify-center md:justify-end">
          {SITE_CONFIG.socials.map(social => (
            <a 
              key={social.name} 
              href={social.url}
              className="hover:text-white transition-colors"
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