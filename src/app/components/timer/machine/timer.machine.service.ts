import { Injectable } from "@angular/core";
import { interpret } from "xstate";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import { timerMachine } from "./timer.machine-def";

@Injectable({ providedIn: 'root' })
export class TimerMachineService {
    service = interpret(timerMachine).start();
    state$ = from(this.service);
    context$ = this.state$.pipe(map(s => s.context));
}