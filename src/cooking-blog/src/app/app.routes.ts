import { Routes } from '@angular/router';
import { NotFoundComponent } from './feature/pages/not-found/not-found.component';
import { LandingComponent } from './feature/pages/landing/landing.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: LandingComponent
    },
    {
        path: 'user',
        loadChildren: () => import('./authentication/authentication.routes').then(m => m.routes)

    },
    {
        path: '**',
        component: NotFoundComponent
    },
];
