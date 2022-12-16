import { Component, OnInit } from '@angular/core';
import { TimerMachineService } from './machine/timer.machine.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor(public _: TimerMachineService) { }

  ngOnInit(): void {
    
    // this._.service.subscribe(state => {
    //   if(state.value === 'running') {
    //     setTimeout(() => {
    //       console.log('hi')
    //       this._.service.send('TICK')
    //     }, 1000)
    //   }
    // }
    // )
  }

}
