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
        services: {} as {
            ticker: 
            {
                data: () => {}
            };
         },
        context: {} as TimerContext,
        events: {} as
            | { type: 'TOGGLE' }
            | { type: 'RESET' }
            | { type: 'ADD_MINUTE' }
            | { type: 'TICK' }
            | { type: 'ADD_SECONDS'; secondsToAdd: number }
            | { type: 'ADD_TIMER'; duration: number }
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
            invoke: {
                src: 'ticker'
            },
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
    },
    on: {
        ADD_TIMER: {
            actions: ['addTimer']
        }   
    }
},
    {
        services: {
            ticker: (ctx, e) => {
                return (cb) =>{
                    const interval = setInterval(() => {
                      cb('TICK');
                    }, 1000);
                    return () => clearInterval(interval);
                }
              }
          },
        actions: {
            addMinute: (_) => {
                if (_.duration + 60 < 1000) {
                    _.duration = _.duration + 60
                }
                else {
                    _.duration = 1000 + _.elapsed;
                }
            },
            addSeconds: (_, e) => _.duration += e.secondsToAdd,
            tick: (_) => _.elapsed += 1,
            reset: (_) => {
                _.duration = 30,
                    _.elapsed = 0,
                    _.interval = 1
            },
            addTimer: (_, e) => {
                
            }
        },
        guards: {
            isTimeOut: (_) => _.duration - _.elapsed <= 0,
        }
    }
)