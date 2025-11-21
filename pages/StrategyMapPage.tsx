import React, { useState } from 'react';
import { STRATEGY_MAP } from '../constants';
import { StrategyNode } from '../components/StrategyNode';
import { StrategyItem } from '../types';
import { X, Lightbulb } from 'lucide-react';
import { generateContentIdeas } from '../services/geminiService';

export const StrategyMapPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<StrategyItem | null>(null);
  const [aiAdvice, setAiAdvice] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleNodeClick = (item: StrategyItem) => {
    setSelectedItem(item);
    setAiAdvice('');
  };

  const handleGetAdvice = async () => {
    if (!selectedItem) return;
    setLoading(true);
    // Simulate AI context specific to the node
    const advice = await generateContentIdeas("Social Media Growth", `Explain the concept of '${selectedItem.title}' (${selectedItem.description}) for a new content creator and give one concrete example.`);
    setAiAdvice(advice);
    setLoading(false);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Strategic Roadmap</h2>
        <p className="text-slate-500">Follow the phases below to build a robust account foundation.</p>
      </div>

      <div className="flex-1 overflow-x-auto pb-6">
        <div className="min-w-[1000px] grid grid-cols-3 gap-8 h-full">
          {STRATEGY_MAP.map((column) => (
            <div key={column.id} className="flex flex-col h-full bg-slate-50/50 rounded-2xl p-4 border border-slate-100/50">
              <div className="mb-6 text-center border-b border-slate-200 pb-4">
                <h3 className="text-xl font-bold text-slate-800">{column.title}</h3>
                <p className="text-sm text-slate-400 uppercase tracking-wide mt-1">{column.description}</p>
              </div>
              
              <div className="flex-1 space-y-8">
                {column.categories.map((category, idx) => (
                  <div key={idx} className="relative">
                    {/* Hexagon-ish Header */}
                    <div className="flex justify-center mb-4">
                      <div className={`${category.color} px-6 py-2 rounded-full border-2 font-bold text-sm shadow-sm z-10`}>
                        {category.title}
                      </div>
                    </div>
                    {/* Connecting Line (Visual only) */}
                    <div className="absolute top-4 bottom-0 left-1/2 w-px bg-slate-200 -z-0 transform -translate-x-1/2"></div>

                    <div className="grid grid-cols-1 gap-3 relative z-0">
                      {category.items.map((item, i) => (
                        <StrategyNode 
                          key={i} 
                          item={item} 
                          onClick={() => handleNodeClick(item)} 
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Details */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-800">{selectedItem.title}</h3>
                <p className="text-slate-500 mt-1">{selectedItem.description}</p>
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
              <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center">
                <Lightbulb size={16} className="mr-2 text-yellow-500" />
                Action Item
              </h4>
              <p className="text-sm text-slate-600">
                {selectedItem.actionable 
                  ? "This is a key step. Review your current content or profile settings against this principle." 
                  : "This is a conceptual guideline. Keep this in mind when planning your content calendar."}
              </p>
            </div>

            {aiAdvice && (
              <div className="mb-6 p-4 bg-purple-50 rounded-xl border border-purple-100 text-sm text-slate-700 max-h-60 overflow-y-auto custom-scrollbar">
                <div className="markdown-prose" dangerouslySetInnerHTML={{ __html: aiAdvice.replace(/\n/g, '<br/>') }} />
              </div>
            )}

            <div className="flex justify-end gap-3">
               <button 
                onClick={handleGetAdvice}
                disabled={loading}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium text-sm hover:opacity-90 disabled:opacity-50 transition-all"
              >
                {loading ? 'Analyzing...' : 'Get AI Guidance'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
