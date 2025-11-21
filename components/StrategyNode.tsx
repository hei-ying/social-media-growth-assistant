import React from 'react';
import { StrategyItem } from '../types';
import { ChevronRight, CheckCircle2, Circle } from 'lucide-react';

interface StrategyNodeProps {
  item: StrategyItem;
  onClick: () => void;
}

export const StrategyNode: React.FC<StrategyNodeProps> = ({ item, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative p-3 rounded-lg border transition-all duration-200 cursor-pointer group
        bg-white border-slate-200 hover:border-purple-400 hover:shadow-md
      `}
    >
      <div className="flex justify-between items-start mb-1">
        <h4 className="text-sm font-semibold text-slate-800 group-hover:text-purple-700">
          {item.title}
        </h4>
        {item.actionable ? (
          <CheckCircle2 size={14} className="text-green-500 opacity-50" />
        ) : (
          <Circle size={14} className="text-slate-300" />
        )}
      </div>
      <p className="text-xs text-slate-500 leading-tight line-clamp-2">
        {item.description}
      </p>
      
      <div className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-purple-600 text-white p-1 rounded-full shadow-lg">
          <ChevronRight size={12} />
        </div>
      </div>
    </div>
  );
};
