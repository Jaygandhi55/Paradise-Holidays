import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AndamanComponent } from './all-holidays/andaman/andaman.component';
import { GoaComponent } from './all-holidays/goa/goa.component';
import { GujaratComponent } from './all-holidays/gujarat/gujarat.component';
import { KarnatakaComponent } from './all-holidays/karnataka/karnataka.component';
import { KeralaComponent } from './all-holidays/kerala/kerala.component';
import { MaharashtraComponent } from './all-holidays/maharashtra/maharashtra.component';
import { NorthEastComponent } from './all-holidays/north-east/north-east.component';
import { RajasthanComponent } from './all-holidays/rajasthan/rajasthan.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'contactus',
    component: ContactUsComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'goa',
    component: GoaComponent
  },
  {
    path: 'andaman',
    component: AndamanComponent
  },
  {
    path: 'kerala',
    component: KeralaComponent
  },
  {
    path: 'rajasthan',
    component: RajasthanComponent
  },
  {
    path: 'north-east',
    component: NorthEastComponent
  },
  {
    path: 'gujarat',
    component: GujaratComponent
  },
  {
    path: 'karnataka',
    component: KarnatakaComponent
  },
  {
    path: 'maharashtra',
    component: MaharashtraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
