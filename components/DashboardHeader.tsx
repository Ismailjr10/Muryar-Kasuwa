import React from 'react';
import { Plus, Bell, Search } from 'lucide-react';

export const DashboardHeader: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Recent Voice Blasts</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your market announcements and SMS campaigns.</p>
      </div>
      
      <div className="flex items-center gap-3">
        {/* Search Bar (Hidden on small mobile) */}
        <div className="hidden md:flex items-center relative">
            <Search className="absolute left-3 text-gray-400" size={16} />
            <input 
                type="text" 
                placeholder="Search campaigns..." 
                className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008751]/20 focus:border-[#008751] transition-all w-64 text-gray-700 bg-white"
            />
        </div>

        <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <button className="inline-flex items-center justify-center gap-2 bg-[#008751] hover:bg-[#006b40] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md active:transform active:scale-95">
          <Plus size={18} />
          <span>New Voice Blast</span>
        </button>
      </div>
    </div>
  );
};