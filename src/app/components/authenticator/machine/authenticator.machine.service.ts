import { Injectable } from '@angular/core';
import { inspect } from '@xstate/inspect';
import { from, map } from 'rxjs';
import { interpret } from 'xstate';
import { authenticatorMachine } from './authenticator.machine-def';

inspect({
    iframe: false
})

@Injectable({providedIn: 'root'})
export class AuthenticatorMachineService {
    constructor() { }
    service = interpret(authenticatorMachine,  { devTools: true }).start();
    state$ = from(this.service);    
    ctx$ = this.state$.pipe(map(s => s.context));
}