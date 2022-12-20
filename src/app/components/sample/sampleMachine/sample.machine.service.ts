import { Injectable } from '@angular/core';
import { inspect } from '@xstate/inspect';
import { from, map } from 'rxjs';
import { interpret } from 'xstate';
import { callMachine } from './sample.machine-def';

inspect({
    iframe: false,
})

@Injectable({providedIn: 'root'})
export class SampleMachineService {
    constructor() { }
    
    // doggoWalksSrvice = interpret(doggoWalkMachine,  { devTools: true }).start();
    // doggoWalkState$ = from(this.doggoWalksSrvice);    
    // doggoWalkContext$ = this.doggoWalkState$.pipe(map(s => s.context));

    callMachineService = interpret(callMachine,  { devTools: true }).start();
    callMachineState$ = from(this.callMachineService);    
    callMachineContext$ = this.callMachineState$.pipe(map(s => s.context));
}