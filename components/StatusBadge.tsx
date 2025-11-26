import React from 'react';
import { CampaignStatus } from '../types';

interface StatusBadgeProps {
  status: CampaignStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStyles = (status: CampaignStatus) => {
    switch (status) {
      case 'Sent':
        return 'bg-green-100 text-green-800 ring-1 ring-inset ring-green-600/20';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800 ring-1 ring-inset ring-yellow-600/20';
      case 'Failed':
        return 'bg-red-100 text-red-800 ring-1 ring-inset ring-red-600/20';
      default:
        return 'bg-gray-100 text-gray-800 ring-1 ring-gray-500/10';
    }
  };

  return (
    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${getStyles(status)}`}>
      {status === 'Processing' && (
        <span className="mr-1.5 flex h-2 w-2 relative">
           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
           <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
        </span>
      )}
      {status}
    </span>
  );
};