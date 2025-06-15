import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CredentialListComponent } from './components/credential-list/credential-list.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'credentials', component: CredentialListComponent },
];
