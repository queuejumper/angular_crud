import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateComponent } from './articles/create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { AngularMaterial } from './app.material';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './article.service';
import { ShowComponent } from './articles/show/show.component';
import { EditComponent } from './articles/edit/edit.component';
import { IndexComponent } from './articles/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HeaderComponent,
    ShowComponent,
    EditComponent,
    IndexComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularMaterial,
    HttpClientModule
  ],
  exports:[
    RouterModule,
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
