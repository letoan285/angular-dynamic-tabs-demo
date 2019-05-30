import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonEditComponent } from './people/person-edit.component';

const routes: Routes = [
  {
    path: 'person/detail/:id',
    component: PersonEditComponent
  },
  {
    path: 'patients',
    component: PersonEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
