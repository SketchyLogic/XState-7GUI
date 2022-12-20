import { Component, OnInit } from '@angular/core';
import { Counter2MachineService } from './machine/counter2.machine.service';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss']
})
export class Counter2Component implements OnInit {

  constructor(public _: Counter2MachineService) { }

  ngOnInit(): void {
    
  }

}
