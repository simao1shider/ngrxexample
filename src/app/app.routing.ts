import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './components/client/client-form/client-form.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientComponent } from './components/client/client.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'list', component: ClientListComponent},
  { path: 'form', component: ClientFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
