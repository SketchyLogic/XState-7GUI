import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { mapContext } from 'xstate/lib/utils';
import { SampleMachineService } from './sampleMachine/sample.machine.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor(public _: SampleMachineService) { }

  ngOnInit(): void {
    this._.callMachineState$
    .pipe(
      tap(x => {
        console.log(x.value)
      })
    )
    .subscribe()

    this._.callMachineState$.subscribe(state => {
      if(state.matches('Microphone.Muted')) {
        console.log('Microfono mutato con state.matches(...)')

        //Knowing the available nextEvents opens up some cool UI possibiliteis
        console.log('Next available events: ', state.nextEvents)
        console.log('Can mute?: ', state.can('MUTE'))
      } 

      if(state.matches('Microphone.Unmted')) {
        console.log('Next available events: ', state.nextEvents)
        console.log('Can mute?: ', state.can('MUTE'))
      }
    })
  }

}
