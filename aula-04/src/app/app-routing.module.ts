import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/private/home/home.component';
import { SerieComponent } from './components/private/serie/serie.component';
import { FullComponent } from './layouts/full/full.component';
import { NotFoundComponent } from './components/public/not-found/not-found.component';
import { acessarAutenticacaoGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: 'private/home', pathMatch: 'full' },
      {
        path: 'private',
        loadChildren: () => import('src/app/components/private/private.module').then(m => m.PrivateModule)
      },
      {
        path: 'public',
        canActivate: [acessarAutenticacaoGuard],
        loadChildren: () => import('src/app/components/public/public.module').then(m => m.PublicModule)
      },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
