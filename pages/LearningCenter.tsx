import React from 'react';
import { BookOpen, PlayCircle, ShieldAlert, TrendingUp } from 'lucide-react';

export const LearningCenter: React.FC = () => {
  const articles = [
    { title: "Platform Rules 2024: What's Changed?", category: "Rules", icon: ShieldAlert, color: "text-red-500 bg-red-50" },
    { title: "Case Study: 0 to 10k Followers in 30 Days", category: "Case Study", icon: TrendingUp, color: "text-green-500 bg-green-50" },
    { title: "Mastering the 3-Second Hook", category: "Skills", icon: PlayCircle, color: "text-blue-500 bg-blue-50" },
    { title: "Algorithm Secrets Explained", category: "Guide", icon: BookOpen, color: "text-purple-500 bg-purple-50" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Learning Center</h2>
        <p className="text-slate-500">Master the skills needed for rapid growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex items-start justify-between mb-4">
              <div className={`${article.color} p-3 rounded-xl`}>
                <article.icon size={24} />
              </div>
              <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded text-slate-500">
                {article.category}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-slate-500">
              Learn the essential strategies that top creators use to engage their audience effectively.
            </p>
            <div className="mt-4 text-sm font-medium text-purple-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
              Read Article &rarr;
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">Join the Creator Bootcamp</h3>
          <p className="text-indigo-200 mb-6 max-w-lg">A 7-day intensive email course to help you set up your account, define your niche, and publish your first viral video.</p>
          <button className="bg-white text-indigo-900 px-6 py-2 rounded-lg font-bold hover:bg-indigo-50 transition-colors">
            Enroll Free
          </button>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          <BookOpen size={200} />
        </div>
      </div>
    </div>
  );
};
