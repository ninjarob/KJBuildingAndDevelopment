import {AccessDeniedComponent} from './access-denied/access-denied.component';
import {ErrorComponent} from './error/error.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {JobsComponent} from "./jobs/jobs.component";
import {ModalModule} from "ngx-bootstrap/modal";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'denied', component: AccessDeniedComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'admin', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes), ModalModule.forRoot()]
})
export class AppRoutingModule { }
