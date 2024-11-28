import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'BuscarPlacas',
    loadComponent: () => import('./buscar-placas/buscar-placas.component'),
  },
    {
      path: '',
      redirectTo:'/BuscarPlacas',
      pathMatch:'full'
    },
    {
      path: '**',
      redirectTo:'/BuscarPlacas',
      pathMatch:'full'
    }


];
