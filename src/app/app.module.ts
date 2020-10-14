import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AppComponent } from './app.component';
import { AppLoadModule } from './app-load.module';
import { AppLoadService } from './app-load.service';
import { AppParameterService } from './service/app-parameter.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonService } from './common/common.service';
import { CommonModalComponent } from './common-modal/common-modal.component';
import { Constants } from './common/constants';
import { ContactComponent } from './contact/contact.component';
import { DateService } from './service/date.service';
import { ErrorComponent } from './error/error.component';
import { FormatDatePipe } from "./common/format-date.pipe";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandlerService } from './service/http-error-handler.service';
import { ImageCropperModule } from 'ngx-image-cropper';
import { JobsComponent } from './jobs/jobs.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { NgPipesModule } from 'ngx-pipes';
import { SafeHtmlPipe } from './common/safe-html.pipe'
import { StripHtmlPipe } from './common/strip-html.pipe'
import { SecurityService } from './security/security.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './service/translation.service';
import { UnitService } from './common/unit-service';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AccessDeniedComponent,
    AppComponent,
    CommonModalComponent,
    ContactComponent,
    ErrorComponent,
    FormatDatePipe,
    HomeComponent,
    JobsComponent,
    NavComponent,
    SafeHtmlPipe,
    StripHtmlPipe,
  ],
  imports: [
    AppLoadModule,
    AppRoutingModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    BrowserModule,
    CalendarModule,
    DialogModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    ImageCropperModule,
    ModalModule,
    NgPipesModule,
    ReactiveFormsModule,
    SidebarModule,
    TableModule,
    TranslateModule.forRoot()
  ],
  entryComponents: [
  ],
  providers: [
    AppLoadService,
    AppParameterService,
    CommonService,
    Constants,
    DateService,
    HttpErrorHandlerService,
    SecurityService,
    TranslationService,
    UnitService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
