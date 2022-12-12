import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { FlightBookerComponent } from './components/flight-booker/flight-booker.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { TimerComponent } from './components/timer/timer.component';
import { WorkshopComponent } from './components/workshop/workshop.component';

const routes: Routes = [
  { path: '', component: WorkshopComponent },
  { path: 'counter', component: CounterComponent},
  { path: 'flight-booker', component: FlightBookerComponent},
  { path: 'temperature', component: TemperatureComponent},
  { path: 'timer', component: TimerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
