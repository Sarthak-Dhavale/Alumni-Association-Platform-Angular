import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(), 
    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: 'system', 
          cssLayer: {
            name: 'primeng', 
            order: 'tailwind-base, primeng, tailwind-utilities'
          }
        }
      }
    })
  ]
};