import { Activity, Friend } from '../models/community.models';

export const COMMUNITY_FRIENDS: readonly Friend[] = [
  { name: 'Marcus Chen', online: true, watching: 'Watching Dune: Part Two', status: '' },
  { name: 'Sarah Jenkins', online: true, watching: null, status: 'Online' },
  { name: 'David Kim', online: false, watching: null, status: 'Last seen 2h ago' },
  { name: 'Elena Rodriguez', online: false, watching: null, status: 'Last seen yesterday' },
];

export const COMMUNITY_ACTIVITY: readonly Activity[] = [
  {
    id: 1,
    user: 'Marcus Chen',
    action: 'watched',
    movie: 'Oppenheimer',
    image: '/assets/img/shoftv-poster-fight.jpg',
    time: '2h ago',
    rating: 5,
    review: 'Absolutely mind-blowing cinematography. A masterpiece from Nolan.',
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    user: 'Sarah Jenkins',
    action: 'added',
    movie: 'The Matrix',
    image: '/assets/img/shoftv-poster-rain.jpg',
    target: 'Watchlist',
    time: '5h ago',
    description: 'Planning to rewatch this classic over the weekend!',
  },
  {
    id: 3,
    user: 'David Kim',
    action: 'watched',
    movie: 'Blade Runner 2049',
    image: '/assets/img/shoftv-poster-desert.jpg',
    time: '1d ago',
    rating: 4,
    review: 'Visually stunning, but pacing felt a bit slow in the middle act.',
    likes: 4,
    replyable: true,
  },
];