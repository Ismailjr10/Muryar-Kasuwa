import React, { useState } from 'react';
import { Play, Pause, MoreHorizontal, FileText } from 'lucide-react';
import { VoiceBlast } from '../types';
import { StatusBadge } from './StatusBadge';

const mockData: VoiceBlast[] = [
  {
    id: '1',
    date: 'Nov 26, 2024',
    time: '09:45 AM',
    duration: '0:24',
    smsPreview: 'Flash Sale! Get 20% off all rice bags today only at Kantin Kwari market. Visit stall 44...',
    status: 'Sent',
  },
  {
    id: '2',
    date: 'Nov 25, 2024',
    time: '02:15 PM',
    duration: '0:45',
    smsPreview: 'New arrival: High quality Swiss lace available now. Come see the new patterns before they...',
    status: 'Sent',
  },
  {
    id: '3',
    date: 'Nov 25, 2024',
    time: '11:30 AM',
    duration: '0:32',
    smsPreview: 'Restock alert: Samsung Galaxy A-series now available in bulk. Special prices for wholesal...',
    status: 'Sent',
  },
  {
    id: '4',
    date: 'Nov 24, 2024',
    time: '04:20 PM',
    duration: '0:18',
    smsPreview: 'Reminder: Friday prayers discount. All electronics 5% off until sunset. Don\'t miss out!',
    status: 'Processing',
  },
  {
    id: '5',
    date: 'Nov 23, 2024',
    time: '10:00 AM',
    duration: '0:35',
    smsPreview: 'Season\'s greeting from Muryar Kasuwa! Check our new collection of traditional caps and...',
    status: 'Sent',
  },
];

export const VoiceBlastTable: React.FC = () => {
  // Track which audio is playing (mock functionality)
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
      // Mock auto-stop after 3 seconds
      setTimeout(() => {
        setPlayingId(null);
      }, 3000);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date & Time</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Voice Recording</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Generated SMS</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockData.map((item) => (
              <tr 
                key={item.id} 
                className="hover:bg-gray-50 transition-colors duration-150 group"
              >
                {/* Date Column */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">{item.date}</span>
                    <span className="text-xs text-gray-500 mt-0.5">{item.time}</span>
                  </div>
                </td>

                {/* Voice Recording Column */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => togglePlay(item.id)}
                      className={`
                        flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200
                        ${playingId === item.id 
                          ? 'bg-[#008751] border-[#008751] text-white' 
                          : 'bg-white border-gray-200 text-gray-600 hover:border-[#008751] hover:text-[#008751]'}
                      `}
                      aria-label={playingId === item.id ? "Pause" : "Play"}
                    >
                      {playingId === item.id ? (
                        <Pause size={12} fill="currentColor" />
                      ) : (
                        <Play size={12} fill="currentColor" className="ml-0.5" />
                      )}
                    </button>
                    <span className={`text-sm font-medium tabular-nums ${playingId === item.id ? 'text-[#008751]' : 'text-gray-600'}`}>
                      {item.duration}s
                    </span>
                  </div>
                </td>

                {/* Generated SMS Column */}
                <td className="px-6 py-4">
                  <div className="flex items-start gap-2 max-w-xs">
                    <FileText size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600 truncate leading-relaxed" title={item.smsPreview}>
                      {item.smsPreview}
                    </p>
                  </div>
                </td>

                {/* Status Column */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={item.status} />
                </td>

                {/* Actions Column */}
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100 transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer Pagination (Visual only) */}
      <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/30">
        <p className="text-xs text-gray-500">
          Showing <span className="font-medium text-gray-900">1</span> to <span className="font-medium text-gray-900">5</span> of <span className="font-medium text-gray-900">24</span> results
        </p>
        <div className="flex items-center gap-2">
          <button disabled className="px-3 py-1 text-xs font-medium text-gray-400 bg-white border border-gray-200 rounded cursor-not-allowed">
            Previous
          </button>
          <button className="px-3 py-1 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded hover:bg-gray-50 hover:text-gray-900 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};