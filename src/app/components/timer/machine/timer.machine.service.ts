import { Injectable } from "@angular/core";
import { interpret } from "xstate";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import { timerMachine } from "./timer.machine-def";
import { inspect } from "@xstate/inspect";

inspect({
    iframe: false,
})

@Injectable({ providedIn: 'root' })
export class TimerMachineService {
    service = interpret(timerMachine.withConfig({}), { devTools: true })
        .onTransition((state) => console.log(state)).start();
    state$ = from(this.service);
    context$ = this.state$.pipe(map(s => s.context));
}