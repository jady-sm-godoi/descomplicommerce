import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CurrencyPipe } from '@angular/common'; // Importe o CurrencyPipe
import { MatIconModule } from '@angular/material/icon'; // Importe o MatIconModule
import { provideAnimations } from '@angular/platform-browser/animations';


import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    CurrencyPipe,
    MatIconModule,
    provideAnimations(),
    provideAnimationsAsync()
  ]
};
