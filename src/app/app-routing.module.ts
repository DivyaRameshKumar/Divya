import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentformComponent } from './studentform/studentform.component';

const routes: Routes = [
  { path: 'formvalidation', component: StudentformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
