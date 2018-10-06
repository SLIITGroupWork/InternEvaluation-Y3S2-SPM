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
import { Form1SupervisorComponent } from './form1-supervisor/form1-supervisor.component';

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
    // {
    //     path: 'login',
    //     data: { title: 'Login' }
    // },
    // {
    //     path: '',
    //     redirectTo: 'login',
    //     pathMatch: 'full'
    // },
    {
        path: '**',
        component: PageNotFoundComponent
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
        Form1SupervisorComponent
    ],
    imports: [
        routings,
        BrowserModule,
        SharedModule.forRoot()
    ],
    exports: [
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
