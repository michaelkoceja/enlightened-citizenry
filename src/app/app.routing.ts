import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsComponent } from './bills/bills.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BillsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
