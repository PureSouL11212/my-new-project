import { Routes } from '@angular/router';
import { TopnavbarComponent } from './folder/topnavbar/topnavbar.component';
import { SecondnavbarComponent } from './folder/secondnavbar/secondnavbar.component';
import { BodyComponent } from './folder/body/body.component';
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadComponent: () => import('./folder/loginpage/loginpage.component').then(c => c.LoginpageComponent) },
    { path: 'Topnavbar', component: TopnavbarComponent },
    { path: 'second', component: SecondnavbarComponent },
    { path: 'body', component: BodyComponent },
];
