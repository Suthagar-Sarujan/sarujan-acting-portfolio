// Domain layer: pure business entities. No Angular, no HTTP.

export interface Stat { value: string; label: string; }
export interface About { portrait: string; paragraphs: string[]; stats: Stat[]; skills: string[]; }
export interface Video { title: string; file?: string; youtube?: string; poster?: string; }
export interface NowItem { icon: string; title: string; text: string; }
export interface WorkItem { title: string; type: string; role: string; year: string; image: string; }
export interface Milestone { year: string; title: string; text: string; }
export interface Contact {
  text: string; email: string; phone: string;
  instagram: string; youtube: string; facebook: string; tiktok: string;
}

export interface Portfolio {
  name: string;
  role: string;
  tagline: string;
  heroImage: string;
  about: About;
  videos: Video[];
  now: NowItem[];
  work: WorkItem[];
  gallery: string[];
  journey: Milestone[];
  contact: Contact;
}
