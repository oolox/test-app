export interface jobItemType {
  company: string;
  jobTitle: string;
  start: string;
  end: string;
  location?: string;
  selected?: boolean;
  screenshots?: screenshotType[];
}

export interface screenshotType {
  fileName: string;
  description: string;
}

