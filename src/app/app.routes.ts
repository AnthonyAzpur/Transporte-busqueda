import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'Buscar Placas',
    loadComponent: () => import('./buscar-placas/buscar-placas.component'),
    children: [
      {
        path: 'Buscar Placas',
        title: 'Buscar Placas',
        loadComponent: () => import('./buscar-placas/buscar-placas.component')
      }
    ]
  },
    {
      path: '',
      redirectTo:'/Buscar Placas',
      pathMatch:'full'
    },
    {
      path: '**',
      redirectTo:'/Buscar Placas',
      pathMatch:'full'
    }


];
