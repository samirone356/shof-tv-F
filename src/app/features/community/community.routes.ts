import { Routes } from '@angular/router';

export const COMMUNITY_ROUTES: Routes = [
  {
    path: 'friends',
    loadComponent: () =>
      import('./pages/friends-page.component').then((module) => module.FriendsPageComponent),
  },
];