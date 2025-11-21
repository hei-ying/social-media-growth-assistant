import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Map, PenTool, BarChart2, BookOpen, User, LogOut } from 'lucide-react';

interface SidebarProps {
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/strategy', icon: Map, label: 'Strategy Map' },
    { path: '/wizard', icon: PenTool, label: 'Creation Wizard' },
    { path: '/analytics', icon: BarChart2, label: 'Analytics' },
    { path: '/learn', icon: BookOpen, label: 'Learning Center' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-slate-200 flex flex-col sticky top-0 hidden md:flex">
      <div className="p-6 border-b border-slate-100">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          MediaStart
        </h1>
        <p className="text-xs text-slate-500 mt-1">Growth Assistant</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-purple-50 text-purple-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Icon size={20} className="mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <button
          onClick={onLogout}
          className="flex items-center w-full px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut size={20} className="mr-3" />
          Sign Out
        </button>
      </div>
    </div>
  );
};
