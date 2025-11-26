import React from 'react';
import { DashboardHeader } from './DashboardHeader';
import { VoiceBlastTable } from './VoiceBlastTable';

export const Dashboard: React.FC = () => {
  return (
    <main className="flex-1 min-w-0 overflow-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-sm font-medium text-gray-500">Total Reach</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">12,450</p>
                <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full mt-2 inline-block">+12% this week</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-sm font-medium text-gray-500">Active Campaigns</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">3</p>
                 <span className="text-xs text-gray-500 font-medium mt-2 inline-block">running now</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-sm font-medium text-gray-500">SMS Credits</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">₦ 45,200</p>
                <button className="text-xs text-[#008751] font-semibold hover:underline mt-2 inline-block">Top up wallet</button>
            </div>
        </div>

        <VoiceBlastTable />
      </div>
    </main>
  );
};