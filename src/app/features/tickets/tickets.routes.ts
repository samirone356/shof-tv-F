import { Routes } from '@angular/router';

export const TICKETS_ROUTES: Routes = [
  {
    path: 'confirmation',
    loadComponent: () =>
      import('./pages/ticket-page.component').then((module) => module.TicketPageComponent),
  },
];