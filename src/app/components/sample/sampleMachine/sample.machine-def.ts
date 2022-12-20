import { createMachine } from "xstate";


// //This machine demonstrates compound state.
// export const doggoWalkMachine = 
// /** @xstate-layout N4IgpgJg5mDOIC5QHUCGAbA1gWVQYwAsBLAOzADoB3VIgF1KgGIAZAUQEEA1VgfQAkA8tlYBtAAwBdRKAAOAe1h0icktJAAPRAA4ALOQCsAdgCMAZlP7TY08YCcY-foA0IAJ6IAtDq2Hyh-QBMVqaGAGw2oVoBAL7RLmhYuISkFCoABKhp1FiM7ABKeQCS3PxCopJq8or0KmqaCFHkxoY+ugFiWhaGAS7uDfrkOg46hrY6trbGOqEOsfEYOPjEZOTpmdmYVAsMjADKAAqsrAAiPACq++JSSCBVSrU39cZifqE6+pH+DgG6Or2exn0xkGgKslgcWjEQTmIASi2SKzWWQW5AATgBXEgkHa7ZgCZA8Y74gByV0qCnuqkeiCmWnIWn0tiMYTEYlCAVCxn+CA8Zj07X0WiibzMMw5MLhSWWqRIGWRWC2WBxABUBJcKjc7jUqaB6rznvSJtZGQzRrZDNyPAFjMCdBzAezjNbDDpTKEJQspSlVrL1ijYNiAGaBxiFYkHVgAYWVhQExJ4kaE+zYyvK11kFO1dU8rpe41ZASGYnsHzdloCtgCTSh5osbo6kVicRAJDkEDgaklSxS5Oqyh1Gk8gVCg3sUKLJbelreVadXRtkLCUQ9iW7K2oShIUF7lOzCGepj8pnsUUhYhdk2cbiH+j04RaTMhnRsMWbXYRMrlGx3WepPJGdL5uOrKTmW148iEtgGEKbxaCegSmFoK7wtKPpfiiGwMD+-Z7lBzzFm8YhTO01g2uWZjkPYAQmJEYjeAERimMhXqIr68qbBiWJYZqmY4X+eEgYRxGsjYXLgR4LrkAKQocjoopQu6b6emuFAbGkeByAAtjI6BgLQYDYQ8uqIGM5ChOy1GunajKGOY3KFiO+jnpWJiWG8brMSpaF+gqAZEMGhkDnqIQvB8xj3qYFY-EYoSWuFLzhdMrJDKEhiGFCTbREAA */
// createMachine({
//     id: "WalkMachine",

//     states: {
//         waiting: {
//             on: {
//                 LEAVE_HOME: "on a walk"
//             }
//         },

//         "on a walk": {
//             states: {
//                 walking: {
//                     on: {
//                         SPEED_UP: "running",
//                         STOP: "sniff"
//                     }
//                 },

//                 running: {
//                     on: {
//                         SLOW_DOWN: "walking"
//                     }
//                 },

//                 sniff: {
//                     on: {
//                         INSPECTION_COMPLETE: "walking"
//                     }
//                 }
//             },

//             initial: "walking",

//             on: {
//                 ARRIVE_HOME: "walk complete"
//             }
//         },

//         "walk complete": {}
//     },

//     initial: "waiting"
// }) 


// The 'Call Machine' will manage video / mic state while on a call
export const callMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QGECGAbdACAsqgxgBYCWAdmAHQBqxEYA9hQMqH0DuZUWAbrQwMQAJAJIARAKIB9KmPEB5ANoAGALqJQAB3qxiAF2L1S6kAA9EAFgCsAJgoBOJUrsAOK0vPWAzNesAaEACeiAC0lgDsAGwUEdaWAL5x-miYuAQk5NR8jIK0nDxZ-EyCcgDq0rKKqsZaOvqGxmYIAIzWdhSenq6ulu5ePv5BCKGR0bEJSRjYeERklDjE+ABO9BqsGTgArrqQ-ACqAHI4uwAq4spqSCA1egZGl43BLbbm5kqWMWGedp4RlnZ2AxClmcngozm+1nMdleYRe5gi4xAySmaVmFHmSxWa0ou1IAFtthB+EdTudqtobvV7iE3BRwhEnHYmh4mkomnZLIChuFnBQmh1wh5Ykyms5EcjUjMMiViOgIMd6FAoOgwIsKKhYESAFRky7XOp3UCNV5NOnOdzOSGWplsiJc4LWWHtJSfflMhwRWHiyaS9KUGVyhVKlVq9D0dD8HVVPUUg0NRA2UHeRwRKwvT1hML26xNMJg3Ou5zhVouBKJECkeh0eCXCXTP3k2q3ePc+F0yKM5k5pR+QIhc1tcxNCKe3M2OytMLelL1tE0Oj0RuUw2mRDOU0dLpuDzeHP2sI5+yeMI9SKtL5WacoqWUecMZisDikLi8BdLuPUhCO8ztTrmbq9Lu9oRJ4P5WCC5ieD0wJ-OYV6+nOWQUDkEB5K+DDvs2n7fr+W49Du-R9kMUJtByEFQW8RbQvBs7rAsyyrIYYCYVSRo0i47YMv8XasuynJEcEYSihQ5hhEyYmdH0Hg0aidGYox6xbJALErg8kJ5iCdgRMOSjrmEbygcBnimo4jhNDYwJhOCTQyTe6L0ViTEULiBLKTGTasauQzqWCXzaQyekGeY9o9KCQ4jkJJ6tJOtl+hQAbyoqyqqipLZeEofJssZIJ-Me-GDMEPxRGJETgn85oQVpsVoglQbJWqGoQKl2FWZl-KilB3wntmJ50jYrJQiRlgtNV0qyolwaqhQYboM1bEIP1ZoWlarSsr2BXWOazqul87JKJ6cFlkAA */
createMachine({
    tsTypes: {} as import("./sample.machine-def.typegen").Typegen0,
    id: "Call Machine",
    type: 'parallel',

    states: {
        Video: {
            states: {
                "Showing video": {
                    on: {
                        HIDE_VIDEO: "Hiding video"
                    }
                },
                "Hiding video": {
                    on: {
                        SHOW_VIDEO: "Showing video"
                    }
                }
            },

            initial: "Showing video"
        },

        Microphone: {
            states: {
                Muted: {
                    on: {
                        UNMUTE: {
                            target: "Unmted",
                        }
                    }
                },
                Unmted: {
                    exit: "muteMicrophone",
                    entry: "unmuteMicrophone",
                    on: {
                        MUTE: {
                            target: "Muted",
                        }
                    }
                }
            },

            initial: "Muted"
        },

        WildToggler: {
            states: {
                asd: {
                    on: {
                        "*": "lol"
                    }
                },

                lol: {
                    on: {
                        "*": "asd"
                    }
                }
            },

            initial: "asd"
        }
    }
}, {
    actions: {
        unmuteMicrophone: () => alert('Microphone unmuted'),
        muteMicrophone: () => alert('Microphone muted')
    }
})