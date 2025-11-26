import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Menu, X, Send, Loader2 } from 'lucide-react';
import { VoiceBlast } from './types';

// Mock Data moved here so it can be updated
const INITIAL_DATA: VoiceBlast[] = [
  { id: '1', date: 'Nov 26, 2024', time: '09:45 AM', duration: '0:24', smsPreview: 'Flash Sale! Get 20% off all rice bags today only at Kantin Kwari market...', status: 'Sent' },
  { id: '2', date: 'Nov 25, 2024', time: '02:15 PM', duration: '0:45', smsPreview: 'New arrival: High quality Swiss lace available now...', status: 'Sent' },
  { id: '3', date: 'Nov 25, 2024', time: '11:30 AM', duration: '0:32', smsPreview: 'Restock alert: Samsung Galaxy A-series now available...', status: 'Sent' },
  { id: '4', date: 'Nov 24, 2024', time: '04:20 PM', duration: '0:18', smsPreview: 'Reminder: Friday prayers discount. All electronics 5% off...', status: 'Processing' },
  { id: '5', date: 'Nov 23, 2024', time: '10:00 AM', duration: '0:35', smsPreview: 'Seasons greeting from Muryar Kasuwa! Check our new collection...', status: 'Sent' },
];

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard', 'history', 'settings'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blasts, setBlasts] = useState<VoiceBlast[]>(INITIAL_DATA);
  const [newCampaignName, setNewCampaignName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to handle the "Send" action in the modal
  const handleSendBlast = () => {
    if (!newCampaignName) return;
    setIsSubmitting(true);

    // Simulate network delay
    setTimeout(() => {
      const newBlast: VoiceBlast = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        duration: '0:00', // Pending recording
        smsPreview: `Campaign: ${newCampaignName} - AI is generating copy...`,
        status: 'Processing'
      };

      setBlasts([newBlast, ...blasts]);
      setIsSubmitting(false);
      setIsModalOpen(false);
      setNewCampaignName('');
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-[#F9FAFB] text-gray-900 font-sans">
      {/* Sidebar with props for navigation */}
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1 h-screen overflow-hidden relative">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center gap-2">
             <div className="w-7 h-7 bg-[#008751] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
            <span className="font-bold text-gray-900">Muryar Kasuwa</span>
          </div>
          <button onClick={() => setSidebarOpen(true)} className="text-gray-600 hover:text-gray-900 p-2 -mr-2">
            <Menu size={24} />
          </button>
        </header>

        {/* View Switcher */}
        {currentView === 'dashboard' && (
          <Dashboard 
            blasts={blasts} 
            onOpenModal={() => setIsModalOpen(true)} 
          />
        )}
        {currentView === 'history' && (
          <div className="flex-1 p-8 flex items-center justify-center text-gray-500">History View Placeholder</div>
        )}
        {currentView === 'settings' && (
           <div className="flex-1 p-8 flex items-center justify-center text-gray-500">Settings View Placeholder</div>
        )}

        {/* --- THE MODAL --- */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden transform transition-all scale-100">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <h3 className="text-lg font-bold text-gray-900">New Voice Blast</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Name</label>
                  <input 
                    type="text" 
                    value={newCampaignName}
                    onChange={(e) => setNewCampaignName(e.target.value)}
                    placeholder="e.g., Sallah Promo, Friday Discount..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008751]/20 focus:border-[#008751] outline-none transition-all"
                    autoFocus
                  />
                </div>
                
                <div className="bg-blue-50 text-blue-800 text-sm p-3 rounded-lg flex gap-2 items-start">
                  <div className="mt-0.5">ℹ️</div>
                  <p>Once created, dial <strong>01-234-5678</strong> to record your message. AI will handle the rest.</p>
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 flex items-center justify-end gap-3 border-t border-gray-100">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSendBlast}
                  disabled={!newCampaignName || isSubmitting}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#008751] hover:bg-[#006b40] rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  {isSubmitting ? 'Creating...' : 'Create Campaign'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}