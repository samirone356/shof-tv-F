import { Routes } from '@angular/router';

export const COMMERCE_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'gift-cards',
    pathMatch: 'full',
  },
  {
    path: 'gift-cards',
    loadComponent: () =>
      import('../../pages/gift-cards/gift-cards.component').then(
        (module) => module.GiftCardsComponent,
      ),
  },
  {
    path: 'concessions',
    loadComponent: () =>
      import('../../pages/concessions/concessions.component').then(
        (module) => module.ConcessionsComponent,
      ),
  },
];