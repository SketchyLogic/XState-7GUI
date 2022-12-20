import { Injectable } from '@angular/core';
import { inspect } from '@xstate/inspect';
import { from, map } from 'rxjs';
import { interpret } from 'xstate';
import { counter2Machine } from './counter2.machine-def';

inspect({
    iframe: false
})

@Injectable({providedIn: 'root'})
export class Counter2MachineService {
    service = interpret(counter2Machine, {devTools: true}).start();
    state$ = from(this.service)
    context$ = this.state$.pipe(map(s => s.context))
}