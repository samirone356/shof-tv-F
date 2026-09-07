import { Routes } from '@angular/router';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./pages/forgot-password-page.component').then(
        (module) => module.ForgotPasswordPageComponent,
      ),
  },
];