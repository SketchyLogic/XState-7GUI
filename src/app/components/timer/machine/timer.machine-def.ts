import { createMachine } from "xstate";

export const timerMachine = createMachine({
    tsTypes: {} as import("./timer.machine-def.typegen").Typegen0,

    schema: {
        events: {} as
        | { type: 'TOGGLE'}
    },

    states: {
        idle: {
            on: {
                TOGGLE: {
                    target: 'running'
                }
            }
        },
        running: {
            on: {
                TOGGLE: {
                    target: 'paused'
                }
            }
        },
        paused: {
            on: {
                TOGGLE: {
                    target: 'running'
                }
            }
        }
    }
})