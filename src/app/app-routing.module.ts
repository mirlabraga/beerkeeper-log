import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableLogBeeColonyComponent } from './components/table-log-bee-colony/table-log-bee-colony.component';
import { FormLogBeeColonyComponent } from './components/form-log-bee-colony/form-log-bee-colony.component';

const routes: Routes = [
  { path: 'logs/list', component: TableLogBeeColonyComponent },
  { path: 'logs/create', component: FormLogBeeColonyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
