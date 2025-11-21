import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { StrategyMapPage } from './pages/StrategyMapPage';
import { ContentWizard } from './pages/ContentWizard';
import { Profile } from './pages/Profile';
import { Auth } from './pages/Auth';
import { LearningCenter } from './pages/LearningCenter';
import { UserProfile } from './types';
import { DEFAULT_AVATAR } from './constants';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Mock User State
  const [user, setUser] = useState<UserProfile>({
    nickname: 'Creator One',
    avatar: DEFAULT_AVATAR,
    bio: 'Just starting out on my journey to 100k followers! Passionate about tech and lifestyle.',
    niche: 'Lifestyle & Tech'
  });

  if (!isAuthenticated) {
    return <Auth onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <Router>
      <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
        {/* Sidebar (Desktop) */}
        <Sidebar onLogout={() => setIsAuthenticated(false)} />

        {/* Mobile Sidebar Overlay (simplified) */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-64 h-full bg-white p-4 shadow-xl">
               {/* Reusing Sidebar logic could be refactored, but keeping simple for this scope */}
               <h2 className="text-xl font-bold mb-6">Menu</h2>
               {/* ... items ... */}
               <button onClick={() => setIsAuthenticated(false)} className="text-red-500">Logout</button>
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <Header user={user} onMobileMenuToggle={() => setIsMobileMenuOpen(true)} />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
            <Routes>
              <Route path="/" element={<Dashboard user={user} />} />
              <Route path="/strategy" element={<StrategyMapPage />} />
              <Route path="/wizard" element={<ContentWizard user={user} />} />
              <Route path="/profile" element={<Profile user={user} onUpdate={setUser} />} />
              <Route path="/analytics" element={<Dashboard user={user} />} /> {/* Reusing dashboard for analytics demo */}
              <Route path="/learn" element={<LearningCenter />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
