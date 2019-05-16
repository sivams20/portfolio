import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './header/app.header';
import { AppAbout } from './about/app.about';
import { AppProject } from './project/app.project';
import { AppWork } from './work/app.work';
import { AppEducation } from './education/app.education';
import { AppNetwork } from './network/app.network';
import { AppContact } from './contact/app.contact';
import { AppFooter } from './footer/app.footer';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppAbout,
    AppProject,
    AppWork,
    AppEducation,
    AppNetwork,
    AppContact,
    AppFooter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
