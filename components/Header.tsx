import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  user: UserProfile;
  onMobileMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onMobileMenuToggle }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-20">
      <div className="flex items-center md:hidden">
        <button onClick={onMobileMenuToggle} className="p-2 text-slate-600 hover:bg-slate-100 rounded-md">
          <Menu size={24} />
        </button>
        <span className="ml-3 font-bold text-lg text-purple-600">MediaStart</span>
      </div>

      <div className="hidden md:flex items-center flex-1 max-w-md">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400" />
          </span>
          <input
            type="text"
            placeholder="Search tutorials, templates, or history..."
            className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-full leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 text-slate-400 hover:text-slate-600 relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
        
        <div className="flex items-center space-x-3 border-l border-slate-200 pl-4">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium text-slate-900">{user.nickname}</div>
            <div className="text-xs text-slate-500 truncate max-w-[100px]">{user.niche || 'New Creator'}</div>
          </div>
          <img
            className="h-8 w-8 rounded-full ring-2 ring-purple-100 object-cover"
            src={user.avatar}
            alt="User avatar"
          />
        </div>
      </div>
    </header>
  );
};
