import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [ AppComponent ],

  providers: [ HeroService ],

  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
})

export class AppModule { }
