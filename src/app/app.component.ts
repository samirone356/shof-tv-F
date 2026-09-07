import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LiveChatComponent } from './shared/live-chat/live-chat.component';
import { RouterStatusService } from './core/navigation/router-status.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LiveChatComponent,
  ],
  template: `
    <main class="min-h-screen">
      <router-outlet />
    </main>
    <app-live-chat />

    @if (routerStatus.isNavigating()) {
      <div
        class="fixed inset-0 z-[100] grid place-items-center bg-background/95 backdrop-blur-sm"
        role="status"
        aria-live="polite"
      >
        <div class="flex flex-col items-center gap-4 text-center">
          <span class="h-10 w-10 animate-spin rounded-full border-2 border-primary/25 border-t-primary"></span>
          <p class="text-sm text-muted-foreground">Loading ShofTV…</p>
        </div>
      </div>
    }

    @if (routerStatus.navigationError(); as error) {
      <div
        class="fixed inset-0 z-[100] grid place-items-center bg-background px-6 text-center"
        role="alert"
      >
        <div class="max-w-md">
          <div class="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
            <span class="text-2xl">!</span>
          </div>
          <h1 class="text-2xl font-bold text-foreground">We hit a loading problem</h1>
          <p class="mt-3 text-sm leading-6 text-muted-foreground">{{ error }}</p>
          <button
            type="button"
            (click)="routerStatus.retry()"
            class="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
          >
            Try again
          </button>
        </div>
      </div>
    }
  `,
  styles: [],
})
export class AppComponent {
  title = 'ShofTV - The Future of Cinema';
  readonly routerStatus = inject(RouterStatusService);
}
