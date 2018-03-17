import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './articles/create/create.component';
import { ShowComponent } from './articles/show/show.component';
import { IndexComponent } from './articles/index/index.component';
const routes: Routes = [
  { path: 'article/create', component: CreateComponent },
  { path: 'article/show/:id', component: ShowComponent },
  { path: 'articles', component: IndexComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [RouterModule],
})
export class AppRoutingModule { }
