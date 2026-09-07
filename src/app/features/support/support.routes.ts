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
      import('../../pages/help/help.component').then((module) => module.HelpComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../../pages/contact/contact.component').then((module) => module.ContactComponent),
  },
];