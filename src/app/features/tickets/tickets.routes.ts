import { Routes } from '@angular/router';

export const TICKETS_ROUTES: Routes = [
  {
    path: 'confirmation',
    loadComponent: () =>
      import('../../pages/ticket/ticket.component').then((module) => module.TicketComponent),
  },
];