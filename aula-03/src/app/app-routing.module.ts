import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/private/home/home.component';
import { SerieComponent } from './components/private/serie/serie.component';
import { FullComponent } from './layouts/full/full.component';
import { NotFoundComponent } from './components/public/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'serie/:id', component: SerieComponent },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
