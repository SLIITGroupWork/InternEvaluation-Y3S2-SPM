import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { InternReportComponent } from './intern-report/intern-report.component';
import { RouterModule } from '@angular/router';

import {FormI3Component } from './form-i3/form-i3.component';//new

const routings: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '**',
        redirectTo: '/'
    }
])
@NgModule({
    declarations: [
        AppComponent,
        InternReportComponent,
        FormI3Component//new
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
