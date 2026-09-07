import { Routes } from '@angular/router';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('../../pages/forgot-password/forgot-password.component').then(
        (module) => module.ForgotPasswordComponent,
      ),
  },
];