import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { ArrowUpRight, Users, Eye, Heart, Zap } from 'lucide-react';
import { MOCK_GROWTH_DATA, STRATEGY_MAP } from '../constants';
import { UserProfile } from '../types';

interface DashboardProps {
  user: UserProfile;
}

export const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Welcome Card */}
        <div className="md:col-span-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Welcome back, {user.nickname}! 👋</h2>
            <p className="text-purple-100 mb-6 max-w-md">
              Your growth strategy is active. You have completed 3 milestones in the "Bootstrapping" phase this week.
            </p>
            <button className="bg-white text-purple-600 px-5 py-2 rounded-full font-medium text-sm hover:bg-purple-50 transition-colors">
              Continue Strategy
            </button>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-0 right-20 -mb-10 w-32 h-32 bg-indigo-400 opacity-20 rounded-full"></div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">Total Followers</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">1,248</h3>
            </div>
            <div className="bg-green-100 p-2 rounded-lg">
              <Users className="text-green-600" size={20} />
            </div>
          </div>
          <div className="flex items-center text-green-600 text-sm font-medium mt-4">
            <ArrowUpRight size={16} className="mr-1" />
            <span>+12% this week</span>
          </div>
        </div>
      </div>

      {/* Main Stats Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-800">Growth Overview</h3>
            <select className="bg-slate-50 border-none text-sm text-slate-600 rounded-lg p-2 focus:ring-0 cursor-pointer">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOCK_GROWTH_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  itemStyle={{color: '#4f46e5'}}
                />
                <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={3} dot={{r: 4, fill: '#8b5cf6', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />
                <Line type="monotone" dataKey="value2" stroke="#cbd5e1" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Next Steps / Recommendations */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Recommended Actions</h3>
          <div className="space-y-4">
            {STRATEGY_MAP[0].categories[1].items.slice(0, 4).map((item, idx) => (
              <div key={idx} className="flex items-start p-3 rounded-xl bg-slate-50 hover:bg-purple-50 transition-colors cursor-pointer group">
                <div className={`p-2 rounded-lg mr-3 ${idx === 0 ? 'bg-purple-100 text-purple-600' : 'bg-slate-200 text-slate-500'}`}>
                  <Zap size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 group-hover:text-purple-700">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Impressions', value: '45.2K', icon: Eye, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Likes', value: '3.8K', icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
          { label: 'Avg. View Duration', value: '1m 24s', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50' },
          { label: 'Shares', value: '452', icon: ArrowUpRight, color: 'text-green-500', bg: 'bg-green-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center">
            <div className={`${stat.bg} p-3 rounded-lg mr-4`}>
              <stat.icon size={20} className={stat.color} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
              <p className="text-xl font-bold text-slate-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
