import { actions, assign, createMachine } from "xstate";
import { raise, send } from "xstate/lib/actions";

interface TimerContext {
    duration: number,
    elapsed: number,
    interval: number,
    stopTicking?: () => void
}

export const timerMachine = createMachine({
    tsTypes: {} as import("./timer.machine-def.typegen").Typegen0,
    id: 'timerMachine',

    initial: 'idle',
    schema: {
        context: {} as TimerContext,
        events: {} as
            | { type: 'TOGGLE' }
            | { type: 'RESET' }
            | { type: 'ADD_MINUTE' }
            | { type: 'TICK'}
            | { type: 'ADD_SECONDS'; secondsToAdd: number }
    },

    context: {
        duration: 3,
        elapsed: 0,
        interval: 1,
    },

    states: {
        idle: {
            entry: ['reset'],
            on: {
                TOGGLE: {
                    target: 'running'
                }
            }
        },
        running: {
            // entry: ['startTicking'],
            // exit: ['stopTicking'],
            always: {
                cond: 'isTimeOut',
                target: 'expired'
            },
            on: {
                TOGGLE: {
                    target: 'paused'
                },
                ADD_MINUTE: {
                    actions: ['addMinute']
                },
                ADD_SECONDS: {
                    target: undefined,
                    actions: ['addSeconds']
                },

                //Why an array? It's ok to specify multiple behavior, the first in like that meets the condition will be executed
                TICK: [{
                    // cond: 'isNotTimeOut',
                    actions: ['tick']
                },
                // {
                //     target: 'expired',
                // }
                ]
            }
        },
        paused: {
            on: {
                TOGGLE: {
                    target: 'running'
                },
                RESET: {
                    target: 'idle',
                }
            }
        },
        expired: {
            on: {
                RESET: {
                    target: 'idle'
                }
            }
        }
    }
},
    {
        actions: {
            addMinute: (_) => {
                if(_.duration+60 < 1000) {
                    _.duration = _.duration + 60
                }
                else {
                    _.duration = 1000 + _.elapsed;
                }
            },
            addSeconds: (_, e) => _.duration += e.secondsToAdd,
            tick: (_) => _.elapsed+=1,
            reset: (_) => {
                _.duration = 3,
                _.elapsed = 0,
                _.interval = 1
            }
            // startTicking: (_) => {
            //     let intervalId = setInterval(() => {
            //         _.elapsed +=1;

            //         if(_.duration - _.elapsed === 0) {
            //             clearInterval(intervalId);
            //         }
            //     }, 1000)
            //     _.stopTicking = () => clearInterval(intervalId)
            // },
            // stopTicking: (_) => _.stopTicking!(),
        },
        guards: {
            // isNotTimeOut: (_) => _.duration - _.elapsed > 0,
            isTimeOut: (_) => _.duration - _.elapsed <= 0,
        }
    }
    )