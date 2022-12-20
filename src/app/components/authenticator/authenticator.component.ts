import { Component, OnInit } from '@angular/core';
import { AuthenticatorMachineService } from './machine/authenticator.machine.service';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.scss']
})
export class AuthenticatorComponent implements OnInit {

  constructor(public _: AuthenticatorMachineService) { }

  ngOnInit(): void {
  }

}
