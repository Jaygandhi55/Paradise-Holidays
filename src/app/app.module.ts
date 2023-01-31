import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GoaComponent } from 'src/app/all-holidays/goa/goa.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AndamanComponent } from './all-holidays/andaman/andaman.component';
import { KeralaComponent } from './all-holidays/kerala/kerala.component';
import { RajasthanComponent } from './all-holidays/rajasthan/rajasthan.component';
import { NorthEastComponent } from './all-holidays/north-east/north-east.component';
import { GujaratComponent } from './all-holidays/gujarat/gujarat.component';
import { KarnatakaComponent } from './all-holidays/karnataka/karnataka.component';
import { MaharashtraComponent } from './all-holidays/maharashtra/maharashtra.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutusComponent,
    ContactUsComponent,
    GoaComponent,
    BlogsComponent,
    AndamanComponent,
    KeralaComponent,
    RajasthanComponent,
    NorthEastComponent,
    GujaratComponent,
    KarnatakaComponent,
    MaharashtraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MdbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
