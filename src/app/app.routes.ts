import { Routes } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { InputDataComponent } from './input-data/input-data.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGard } from './auth/auth.guard';
import { Win1Component } from './win1/win1.component';
import { Win2Component } from './win2/win2.component';

export const routes: Routes = [
    {
        path: 'task/:category',
        component: TaskDetailsComponent,
        canActivate:[AuthGard],
        children: [
            { path: 'addtask/:category', component: InputDataComponent }
        ]
    },
    { path: 'auth', component: AuthComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'win1', component: Win1Component },
    { path: 'win2', component: Win2Component }
];
