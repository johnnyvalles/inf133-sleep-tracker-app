import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'summary',
        loadChildren: () => import('../summary/summary.module').then(m => m.SummaryPageModule)
      },
      {
        path: 'overnight-sleep',
        loadChildren: () => import('../overnight-sleep/overnight-sleep.module').then(m => m.OvernightSleepPageModule)
      },
      {
        path: 'sleepiness',
        loadChildren: () => import('../sleepiness/sleepiness.module').then(m => m.SleepinessPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/summary',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/summary',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
