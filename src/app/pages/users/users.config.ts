import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { userRoutes } from './users.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

export const usersConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(userRoutes),
    provideClientHydration(withEventReplay()),
  ],
};
