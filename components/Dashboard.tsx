import React from 'react';
import { DashboardHeader } from './DashboardHeader';
import { VoiceBlastTable } from './VoiceBlastTable';
import { VoiceBlast } from '../types';

interface DashboardProps {
  blasts: VoiceBlast[];
  onOpenModal: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ blasts, onOpenModal }) => {
  return (
    <main className="flex-1 min-w-0 overflow-auto bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Pass the modal handler down */}
        <DashboardHeader onOpenModal={onOpenModal} />
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm font-medium text-gray-500">Total Reach</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">12,450</p>
                <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full mt-2 inline-block">+12% this week</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm font-medium text-gray-500">Active Campaigns</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{blasts.filter(b => b.status === 'Processing').length}</p>
                 <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full mt-2 inline-block">Running now</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm font-medium text-gray-500">SMS Credits</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">₦ 45,200</p>
                <button className="text-xs text-[#008751] font-semibold hover:underline mt-2 inline-block">Top up wallet</button>
            </div>
        </div>

        {/* Pass the real data to the table */}
        <VoiceBlastTable data={blasts} />
      </div>
    </main>
  );
};