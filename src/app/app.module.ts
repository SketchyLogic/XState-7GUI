import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { TimerComponent } from './components/timer/timer.component';
import { FlightBookerComponent } from './components/flight-booker/flight-booker.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TemperatureComponent,
    TimerComponent,
    FlightBookerComponent,
    WorkshopComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    //Angular material
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
