import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploLifecycleComponent } from './components/exemplo-lifecycle/exemplo-lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploLifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
