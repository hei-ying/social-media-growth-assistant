import React, { useState } from 'react';
import { Sparkles, Copy, Check, Calendar, PenTool } from 'lucide-react';
import { CONTENT_TYPES, MOCK_TOPICS } from '../constants';
import { generateContentIdeas } from '../services/geminiService';
import { UserProfile } from '../types';

interface ContentWizardProps {
  user: UserProfile;
}

export const ContentWizard: React.FC<ContentWizardProps> = ({ user }) => {
  const [topic, setTopic] = useState('');
  const [selectedType, setSelectedType] = useState(CONTENT_TYPES[0].id);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    setIsGenerating(true);
    setResult('');
    
    const generated = await generateContentIdeas(user.niche || 'General', topic);
    setResult(generated);
    setIsGenerating(false);
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Content Creation Wizard</h2>
        <p className="text-slate-500">Turn a simple idea into a viral-ready post structure using AI.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <label className="block text-sm font-medium text-slate-700 mb-2">Content Type</label>
            <div className="space-y-2">
              {CONTENT_TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`w-full flex items-center p-3 rounded-xl border transition-all ${
                    selectedType === type.id
                      ? 'border-purple-500 bg-purple-50 text-purple-700 ring-1 ring-purple-500'
                      : 'border-slate-200 hover:border-purple-300 text-slate-600'
                  }`}
                >
                  <div className={`mr-3 p-2 rounded-lg ${selectedType === type.id ? 'bg-white' : 'bg-slate-100'}`}>
                   <PenTool size={16} /> 
                  </div>
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <label className="block text-sm font-medium text-slate-700 mb-2">Your Topic</label>
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., How to save money on groceries..."
              className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] text-sm resize-none"
            />
            
            <div className="mt-4">
              <p className="text-xs text-slate-500 font-medium mb-2">Trending Ideas for you:</p>
              <div className="flex flex-wrap gap-2">
                {MOCK_TOPICS.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setTopic(t)}
                    className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-2 py-1 rounded-md transition-colors text-left"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!topic || isGenerating}
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Thinking...
                </>
              ) : (
                <>
                  <Sparkles size={18} className="mr-2" />
                  Generate Draft
                </>
              )}
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="lg:col-span-2 h-full">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col min-h-[500px]">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-t-2xl">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm font-medium text-slate-600">AI Output</span>
              </div>
              <div className="flex space-x-2">
                 <button className="p-2 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                   <Calendar size={18} />
                 </button>
                 <button 
                  onClick={handleCopy}
                  className="p-2 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                 >
                   {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                 </button>
              </div>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto">
              {result ? (
                <div className="prose prose-slate prose-sm max-w-none">
                  <div className="whitespace-pre-wrap font-sans text-slate-700 leading-relaxed">
                    {result}
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-400">
                  <Sparkles size={48} className="mb-4 text-slate-200" />
                  <p className="text-sm">Select a topic and click generate to see magic happen.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
