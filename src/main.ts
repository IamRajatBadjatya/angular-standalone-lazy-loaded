import './polyfills';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { PokemonComponent } from './app/pokemon/pokemon.component';
import { AboutUsComponent } from './app/about-us/about-us.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
//   // Ensure Angular destroys itself on hot reloads.
//   if (window['ngRef']) {
//     window['ngRef'].destroy();
//   }
//   window['ngRef'] = ref;

//   // Otherwise, log the boot error
// }).catch(err => console.error(err));

const routes: Routes = [
  {
    path: 'pokemon',
    component: PokemonComponent,
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./app/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemon',
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
  ],
});
