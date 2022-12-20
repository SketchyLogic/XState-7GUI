import { Component, OnInit } from '@angular/core';
import { BaseMachineService } from './machine/base.machine.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(public _: BaseMachineService) { }

  ngOnInit(): void {
  }

}
