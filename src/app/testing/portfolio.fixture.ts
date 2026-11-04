import { Portfolio } from '../domain/models/portfolio.model';

export const PORTFOLIO_FIXTURE: Portfolio = {
  name: 'Test Actor',
  role: 'Actor',
  tagline: 'A tagline',
  heroImage: 'assets/images/none.jpg',
  about: {
    portrait: 'assets/images/none.jpg',
    paragraphs: ['Paragraph one', 'Paragraph two'],
    stats: [{ value: '5+', label: 'Years' }],
    skills: ['Drama', 'Comedy'],
  },
  videos: [
    { title: 'Reel', file: 'assets/videos/none.mp4' },
    { title: 'Clip', youtube: 'abc123' },
  ],
  now: [{ icon: '🎬', title: 'Filming', text: 'Now' }],
  work: [{ title: 'Film', type: 'Short', role: 'Lead', year: '2026', image: 'assets/images/none.jpg' }],
  gallery: ['a.jpg', 'b.jpg', 'c.jpg'],
  journey: [{ year: '2026', title: 'Milestone', text: 'Text' }],
  contact: { text: 'Contact me', email: 'a@b.com', phone: '', instagram: 'https://i.com', youtube: '', facebook: '', tiktok: '' },
};
