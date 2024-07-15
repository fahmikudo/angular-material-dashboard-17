import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: () =>
          import('./welcome/welcome.routes').then((m) => m.WELCOME_ROUTES),
      },
      {
        path: 'example',
        loadChildren: () =>
          import('./example/example.routes').then((m) => m.EXAMPLE_ROUTES),
      },
      {
        path: 'example2',
        loadChildren: () =>
          import('./example2/example2.routes').then((m) => m.EXAMPLE_2_ROUTES),
      },
    ],
  },
];
