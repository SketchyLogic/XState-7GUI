import { Injectable } from '@angular/core';
import { inspect } from '@xstate/inspect';
import { from, map } from 'rxjs';
import { interpret } from 'xstate';
import { baseMachine } from './base.machine-def';

inspect({
    iframe: false
})

@Injectable({providedIn: 'root'})
export class BaseMachineService {
    constructor() { }
    service = interpret(baseMachine,  { devTools: true }).start();
    state$ = from(this.service);    
    ctx$ = this.state$.pipe(map(s => s.context));
}