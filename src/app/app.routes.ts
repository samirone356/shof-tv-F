import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes').then((module) => module.HOME_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.routes').then((module) => module.ABOUT_ROUTES),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./features/support/support.routes').then((module) => module.SUPPORT_ROUTES),
  },
  {
    path: 'commerce',
    loadChildren: () =>
      import('./features/commerce/commerce.routes').then((module) => module.COMMERCE_ROUTES),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./features/account/account.routes').then((module) => module.ACCOUNT_ROUTES),
  },
  {
    path: 'community',
    loadChildren: () =>
      import('./features/community/community.routes').then((module) => module.COMMUNITY_ROUTES),
  },
  {
    path: 'tickets',
    loadChildren: () =>
      import('./features/tickets/tickets.routes').then((module) => module.TICKETS_ROUTES),
  },
  { path: 'help', redirectTo: 'support/help', pathMatch: 'full' },
  { path: 'contact', redirectTo: 'support/contact', pathMatch: 'full' },
  { path: 'forgot-password', redirectTo: 'account/forgot-password', pathMatch: 'full' },
  { path: 'gift-cards', redirectTo: 'commerce/gift-cards', pathMatch: 'full' },
  { path: 'concessions', redirectTo: 'commerce/concessions', pathMatch: 'full' },
  { path: 'friends', redirectTo: 'community/friends', pathMatch: 'full' },
  { path: 'ticket', redirectTo: 'tickets/confirmation', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
