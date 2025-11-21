import React, { useState } from 'react';
import { UserProfile } from '../types';
import { Camera, Save } from 'lucide-react';
import { analyzeAccountStrategy } from '../services/geminiService';

interface ProfileProps {
  user: UserProfile;
  onUpdate: (u: UserProfile) => void;
}

export const Profile: React.FC<ProfileProps> = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState(user);
  const [analysis, setAnalysis] = useState<string>('');
  const [analyzing, setAnalyzing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate(formData);
    // Show toast or feedback
  };

  const handleAudit = async () => {
    setAnalyzing(true);
    const result = await analyzeAccountStrategy(formData.bio, ["Productivity", "Tech", "Life Hacks"]);
    setAnalysis(result);
    setAnalyzing(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Account Settings</h2>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-purple-500 to-indigo-500 relative">
          <div className="absolute -bottom-12 left-8">
            <div className="relative">
              <img 
                src={formData.avatar} 
                alt="Profile" 
                className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
              />
              <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full border border-slate-200 shadow-sm hover:bg-slate-50 text-slate-600">
                <Camera size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-16 px-8 pb-8">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nickname</label>
              <input
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Account Niche</label>
              <input
                type="text"
                name="niche"
                value={formData.niche}
                onChange={handleChange}
                placeholder="e.g. Tech Reviews, Cooking, Daily Vlog"
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Bio / Introduction</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="text-xs text-slate-500 mt-1 text-right">{formData.bio.length}/150 characters</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
               <button 
                onClick={handleAudit}
                disabled={analyzing}
                className="text-purple-600 font-medium text-sm hover:text-purple-700 disabled:opacity-50"
              >
                {analyzing ? 'Analyzing...' : '✨ AI Profile Audit'}
               </button>

               <button 
                onClick={handleSave}
                className="flex items-center px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
               >
                 <Save size={18} className="mr-2" />
                 Save Changes
               </button>
            </div>
            
            {analysis && (
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-700 mb-2">AI Audit Result:</h4>
                <p className="text-sm text-slate-600 whitespace-pre-line">{analysis}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
