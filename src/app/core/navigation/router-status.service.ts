import { Injectable, inject, signal } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouterStatusService {
  private readonly router = inject(Router);

  readonly isNavigating = signal(true);
  readonly navigationError = signal<string | null>(null);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isNavigating.set(true);
        this.navigationError.set(null);
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.isNavigating.set(false);
      }

      if (event instanceof NavigationError) {
        this.isNavigating.set(false);
        this.navigationError.set(
          'This section could not be loaded. Please try again.',
        );
      }
    });
  }

  retry() {
    this.navigationError.set(null);
    void this.router.navigateByUrl(this.router.url);
  }
}