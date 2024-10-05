export type screenName = 'TIMELINE' | 'SKILLS' | 'CONTACT' | 'RESUME';

export interface jobItemType {
  company: string;
  jobTitle: string;
  start: string;
  end: string;
  location?: string;
  selected?: boolean;
  screenshots?: screenshotType[];
  details?: string[];
}

export interface screenshotType {
  fileName: string;
  description: string;
}

export interface menuItem {
  label: string;
  action: screenName;
  selected?: boolean;
}

