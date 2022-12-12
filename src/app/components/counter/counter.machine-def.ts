import { from } from 'rxjs';
import { createMachine, assign, interpret } from 'xstate';

export const counterMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QGED2BXAdgFzAJwFkBDAYwAsBLTMAOlOwoDcwBiASQDlkAlAUQN4cAKgG0ADAF1EoAA6pYFBqkzSQAD0QAWTTQBMY3QHYxARgBsuk4YCsugJzWANCACeiIwGYaYzZd2WTTWs7MxCAXzDnNCxcQlJKajoSBmYWABFeHn5BUUlVOQUlFSR1LV1nNwQrQz0zDzsxMQAOYzFDI2sIqIwcfGJyKlp6JlY+AGVeXKkSgsUKZVUNBGsmmg9rQ19-UNCTDYrEJpMaTSbrM0MQ3WtrU+sPLpBo3riBxOHUjIBBZCE2ADUvkJeOJprJ5HMFiUltsTvcTGI7E07Jo6hYDggPEcTiZdL4VjcLh5NI9nrF+glaFQPqwfn9AcDQfkIUVFu5USdNI0mh4TGdNljNBiPB4xDQURc9njcZpDHsIpEQJhUBA4KoyX14oNmYV5sVQEsALRmDHG0k9cla97JEY6yH60oITY0c72EU2LEbDzCwxeJr6Yki4K43HmmKat5UzA0u2s6GILFeMT1WVc0wIsxNIWuBOGMxrAPXFrWRHmBVhIA */
createMachine({
    predictableActionArguments: true,
    tsTypes: {} as import("./counter.machine-def.typegen").Typegen0,
    id: 'CounterMachine',
    schema: {
        context: {} as { count: number },
        events: {} as
        | { type: 'INCREMENT'}
        | { type: 'DECREMENT'}
        | { type: 'RESET'}
        | { type: 'DEACTIVATE'}
        | { type: 'ACTIVATE'}
    },

    context: {
        count: 0
    },

    initial: 'active',
    
    states: {
        active: {
            on: {
                INCREMENT: {
                    actions: ['incrementCounter']
                },
                DECREMENT: {
                    actions: ['decrementCounter']
                },
                RESET: {
                    actions: ['resetCounter']
                },
                DEACTIVATE: {
                    target: 'inactive'
                }
            }
        },
        inactive: {
            on: {
                ACTIVATE: {
                    target: 'active'
                }
            }
        }
    }
}, 
{
    actions: {
        'incrementCounter': context => context.count++,
        'decrementCounter': context => context.count--,
        'resetCounter': context => context.count = 0
    }
})