import { Routes } from '@angular/router';

export const SUPPORT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'help',
    pathMatch: 'full',
  },
  {
    path: 'help',
    loadComponent: () =>
      import('./pages/help-page.component').then((module) => module.HelpPageComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact-page.component').then((module) => module.ContactPageComponent),
  },
];