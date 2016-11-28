import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Example: import { TestComponent }      from './test.component';

const routes: Routes = [
    //Example: {path: 'test', component: TestComponent},
    {path: 'route1', loadChildren: '.routes/route1/route1.module#Route1Module'},
    {path: 'route2', loadChildren: '.routes/route2/route2.module#Route2Module'},
    {path: 'route1', loadChildren: '.routes/route3/route3.module#Route3Module'}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
