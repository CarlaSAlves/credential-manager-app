import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
// Update the path below to the correct location of HomeComponent, for example:
import { HomeComponent } from './components/home/home.component';
import { CredentialListComponent } from './components/credential-list/credential-list.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'credentials', component: CredentialListComponent },
    //{ path: 'add-credential', component: AddCredentialComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
