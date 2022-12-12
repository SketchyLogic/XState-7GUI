import { Component, OnInit } from '@angular/core';
import { counterMachine } from './counter.machine-def';
import { createMachine, assign, interpret } from 'xstate';
import { from } from 'rxjs';
import { CounterMachine } from './counter.machine';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(public counterMachine: CounterMachine) {
    
  }
  
  ngOnInit(): void {
    counterMachine.transition('active', {type: 'DEACTIVATE'})
  }

}
