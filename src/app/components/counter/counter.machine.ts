import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { assign, interpret, StateFrom } from "xstate";
import { delay, firstValueFrom, from } from "rxjs";
import { map } from "rxjs/operators";
import { counterMachine } from "./counter.machine-def";

@Injectable({ providedIn: 'root' })
export class CounterMachine {
    service = interpret(counterMachine).start();
    state$ = from(this.service);    
    context$ = this.state$.pipe(map(s => s.context));
    // service = interpret(counterMachine.withConfig({
    //     actions: {
    //     }, services: {
    //     }
    // }), { devTools: true }).start();
}