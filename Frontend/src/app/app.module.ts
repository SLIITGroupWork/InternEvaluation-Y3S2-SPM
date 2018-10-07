import {BrowserModule} from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { Form5Component } from './form5/form5.component';
import { Form5EmailComponent } from './form5-email/form5-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './not-found.component';
import { InternReportComponent } from './intern-report/intern-report.component';
import { VivaComponent } from './viva/viva.component';
import { ApiService } from './api.service';
import { ViewvivaComponent } from './viewviva/viewviva.component';
import { FormI3EmailComponent } from './form-i3-email/form-i3-email.component';
import { IRStepsComponent } from './intern-report/i-r-steps/i-r-steps.component';


const routings: ModuleWithProviders = RouterModule.forRoot([
    {
        path: 'dashboard/intern-report',
        component: InternReportComponent
    },
    {
        path: 'dashboard/form-5',
        component: Form5Component
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full'
    },
    {
        path: 'dashboard/form-5/form-5-email',
        component: VivaComponent,
        pathMatch: 'full'
    },
    {
        path: 'dashboard/form-5-email',
        component: Form5EmailComponent,
        pathMatch: 'full'
    },
    {

        path:'dashboard/viewshedule',
        component:ViewvivaComponent,
        pathMatch:'full'
    },
    {

        path:'dashboard/formI3',
        component:ViewvivaComponent,
        pathMatch:'full'
    },
  {
    path:'dashboard/formI3-email',
    component:FormI3EmailComponent,
    pathMatch:'full'
  },

    {
        path: '**',
        component: DashboardComponent
    }
]);
@NgModule({
    declarations: [
        AppComponent,
        Form5EmailComponent,
        Form5Component,
        DashboardComponent,
        PageNotFoundComponent,
        InternReportComponent,
        VivaComponent,
        ViewvivaComponent,
        FormI3EmailComponent,
        IRStepsComponent
    ],
    imports: [
        routings,
        BrowserModule,
        SharedModule.forRoot()
    ],
    exports: [
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
