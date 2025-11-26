export type CampaignStatus = 'Sent' | 'Processing' | 'Failed';

export interface VoiceBlast {
  id: string;
  date: string; // ISO date string or formatted string
  time: string;
  duration: string; // e.g., "0:24"
  smsPreview: string;
  status: CampaignStatus;
}
