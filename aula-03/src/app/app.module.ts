import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/private/home/home.component';
import { SerieComponent } from './components/private/serie/serie.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FullComponent } from './layouts/full/full.component';
import { NotFoundComponent } from './components/public/not-found/not-found.component';
import { SigninComponent } from './components/public/signin/signin.component';
import { SignupComponent } from './components/public/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SerieComponent,
    HeaderComponent,
    FooterComponent,
    FullComponent,
    NotFoundComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
