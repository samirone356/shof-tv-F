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
      import('./pages/gift-cards-page.component').then(
        (module) => module.GiftCardsPageComponent,
      ),
  },
  {
    path: 'concessions',
    loadComponent: () =>
      import('./pages/concessions-page.component').then(
        (module) => module.ConcessionsPageComponent,
      ),
  },
];