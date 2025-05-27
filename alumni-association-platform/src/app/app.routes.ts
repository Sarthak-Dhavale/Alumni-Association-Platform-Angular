import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { AlumniRegistrationComponent } from './features/auth/alumni-registration/alumni-registration.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: AlumniRegistrationComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
];
