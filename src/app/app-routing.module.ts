import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableLogBeeColonyComponent } from './components/table-log-bee-colony/table-log-bee-colony.component';
import { FormLogBeeColonyComponent } from './components/form-log-bee-colony/form-log-bee-colony.component';
import { LogDetailsComponent } from './components/log-details/log-details.component';

const routes: Routes = [
  { path: 'logs/list', component: TableLogBeeColonyComponent },
  { path: 'logs/create', component: FormLogBeeColonyComponent},
  { path: 'details/:id', component: LogDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
