import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsComponent } from './bills/bills.component';
import { CommitteesComponent } from './committees/committees.component';
import { LegislatorDetailComponent } from './legislator-detail/legislator-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BillsComponent
  },
  {
    path: 'committees',
    component: CommitteesComponent
  },
  {
    path: 'legislatorDetail',
    component: LegislatorDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
