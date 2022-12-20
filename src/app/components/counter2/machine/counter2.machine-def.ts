import { createMachine, assign } from "xstate";

export const counter2Machine =
    /** @xstate-layout N4IgpgJg5mDOIC5QGED2BXAdgFzAJwCYA6VTAYgBUB5AcRoBkBRAbQAYBdRUAB1VgEts-UlxAAPRAFoAjAFZWRAgDYALEoLSA7AGY10gJzSVAGhABPRNoX6AHCu0PW2m49aabAXw+m0WXIRIAM0DKWgYWDlFeASERJHFEaSciG00CVht9Z1lbJQdTCwRJeyJ9fQIKzVlZew0CfS8fDBx8Ygh+WABDACMAG0gyRgA5AEEAISY2TnjowWFMUQkiuQVlNQ0dPUMTcyltaW0iaWP9JVktfRV7bSVGkF8WwjIpqL45uNAlmyJWFVkNC4GcrSGw2ApSFSaBSgrKaKpZMoqIxebwgTCoCBwUQPfwEV4xeaLKTpfREPIg7Q5bRVcFFarfG42GpaLT-LJ3HGtEgLGZvWI8z5SaRKaRk-YuKk03ZFK4-Vj-FT6VgEXTU2Qc5q4oKBfHvAUJBCypnnPKyTQqDSpWS0zREFSglXlUGudwavxc9pdPqQXX8okIQ6UuHHTSGMqWqWFSTOb5Ze1K81QqHaFEeIA */
    
/** @xstate-layout N4IgpgJg5mDOIC5QGED2BXAdgFzAJwCYA6MTAQwCMAbSI1TAYgBUB5AcTYBkBRAbQAYAuolAAHVLACW2SfREgAHogC0ADgAsRdfwBsBAIz7VAVgDM-AgHZT6gDQgAnitOXNqgup2X++48Y2mAL6B9mhYuIQk5NS0qABmcczsXHxC8uJSMnJIiioeRJbelvqmqrq+BDZ2jir+xkQEqqr66u7q6gQGAJzBoRg4+MSklDQQDALCORnSspjySgjK+oVE-K0lljo66pZd6l0E9k6LBMb6BV3WBLqqLpf6BMEhIJioEHDyYQOE6RIz2aAFspOvU1s0XFsdnsDkcVJt+A1PDttl0HgdHs8vhFiBBJLARpBfplZvMVC1TAUfJZ3J0dMY9MZYYt9HsiE1Lq1VKiWepjD1Mf1sVECRAif85jkgSViGcdE1NttdvtDjVFl5iJtrA9TF5LMZir0QFjBsKYhA6BKxH8spbcosNERZfLIUqYarlMrHcYCHt1dtmhi+uETcMzXQEmKbaSEJYZfxdrHirGTPodEzlLLVjqfF1+PGdcYnoEgA */
createMachine({
    tsTypes: {} as import("./counter2.machine-def.typegen").Typegen0,
    initial: "enabled",
    id: "Counter2",

    context: {
        count: 0
    },

    states: {
        disabled: {},
        enabled: {
            states: {
                on: {
                    on: {
                        TOGGLE: "off"
                    }
                },

                off: {
                    entry: ['incrementCounter'],
                    on: {
                        TOGGLE: "on"
                    }
                }
            },

            initial: "on",

            always: {
                target: "disabled",
                cond: "isTooManyToggles"
            }
        }
    }
}, {
        actions: {
            incrementCounter: assign({
                count: (context) => context.count = context.count+1
            })
        },
        guards: {
            isTooManyToggles: (c, e) => c.count >= 5 
        }
    })