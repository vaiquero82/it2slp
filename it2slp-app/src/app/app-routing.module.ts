import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainviewComponent } from './mainview/mainview.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { StorageComponent } from './storage/storage.component';
import { PurchaseDepartmentViewComponent } from './purchase-department-view/purchase-department-view.component';
import { ServiceLeaderViewComponent } from './service-leader-view/service-leader-view.component';
import { ServiceEngineerViewComponent } from './service-engineer-view/service-engineer-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'linechart', component: LineChartComponent },
  { path: 'storage', component: StorageComponent },
  { path: 'purchaseview', component: PurchaseDepartmentViewComponent },
  { path: 'serviceleadview', component: ServiceLeaderViewComponent },
  { path: 'serviceengineerview', component: ServiceEngineerViewComponent },
  { path: 'serviceengineerview/', component: ServiceEngineerViewComponent },
  { path: 'serviceengineerview/:name', component: ServiceEngineerViewComponent},
  { path: 'serviceengineerview/Muster', component: ServiceEngineerViewComponent },
  { path: 'serviceengineerview/Muster/', component: ServiceEngineerViewComponent },
  { path: 'serviceengineerview/Schmidt', component: ServiceEngineerViewComponent },
  { path: 'serviceengineerview/Schmidt/', component: ServiceEngineerViewComponent },
  { path: 'mainview', component: MainviewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
