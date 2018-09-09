import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { InternReportComponent } from './intern-report/intern-report.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SsignupComponent } from './ssignup/ssignup.component';
import { AssignSupervisorComponent } from './assign-supervisor/assign-supervisor.component';

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
        LoginComponent,
        SignupComponent,
        SsignupComponent,
        AssignSupervisorComponent
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
