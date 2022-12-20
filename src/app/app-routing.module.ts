import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatorComponent } from './components/authenticator/authenticator.component';
import { CounterComponent } from './components/counter/counter.component';
import { Counter2Component } from './components/counter2/counter2.component';
import { FlightBookerComponent } from './components/flight-booker/flight-booker.component';
import { SampleComponent } from './components/sample/sample.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { TimerComponent } from './components/timer/timer.component';
import { WorkshopComponent } from './components/workshop/workshop.component';

const routes: Routes = [
  { path: '', component: WorkshopComponent },
  { path: 'counter', component: CounterComponent},
  { path: 'flight-booker', component: FlightBookerComponent},
  { path: 'temperature', component: TemperatureComponent},
  { path: 'timer', component: TimerComponent},
  { path: 'sample', component: SampleComponent},
  { path: 'counter2', component: Counter2Component},
  { path: 'authenticator', component: AuthenticatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
