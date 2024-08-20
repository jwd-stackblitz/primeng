import { bootstrapApplication } from '@angular/platform-browser';
import { TableBasicDemo } from './app/table-basic-demo';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';
import { NotFoundComponent } from './app/not-found/not-found.component';

const routes: Routes = [
    { path: '**', component: NotFoundComponent } 
];

bootstrapApplication(TableBasicDemo, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));