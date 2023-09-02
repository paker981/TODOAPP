import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoContainerComponent } from './modules/todo/todo-container/todo-container.component';
import { ContainerComponent } from './container/container/container.component';

export const routes: Routes = [
  /*
    {
      path: 'todo',
      loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule)
    },
    {
      path: 'statistics',
      loadChildren: () => import('./modules/statistic/statistic.module').then(m => m.StatisticModule)
    },
    {
      path: '',
      redirectTo: '/todo',
      pathMatch: 'full'
    }
    */

    {
      path: '',
      component: ContainerComponent,
      children: [ 
        { path: 'todo', loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule) },
        { path: 'statistics', loadChildren: () => import('./modules/statistic/statistic.module').then(m => m.StatisticModule) },
        { path: '', redirectTo: 'todo', pathMatch: 'full' } // Domyślna ścieżka do 'todo'
      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
