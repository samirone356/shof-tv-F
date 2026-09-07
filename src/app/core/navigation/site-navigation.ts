import { SiteAction, SiteLink } from '../models/navigation.models';

export const SITE_NAV_LINKS: readonly SiteLink[] = [
  { label: 'Discover', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Help', route: '/support/help' },
];

export const SITE_NAV_ACTIONS: readonly SiteAction[] = [
  { label: 'Account help', route: '/account/forgot-password', style: 'text' },
  { label: 'Start free', route: '/', fragment: 'pricing', style: 'primary' },
];

export const SITE_FOOTER_LINKS: readonly SiteLink[] = [
  { label: 'About', route: '/about' },
  { label: 'Help center', route: '/support/help' },
  { label: 'Contact', route: '/support/contact' },
  { label: 'Gift cards', route: '/commerce/gift-cards' },
];