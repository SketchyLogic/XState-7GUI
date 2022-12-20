import { createMachine } from "xstate";

export const baseMachine = createMachine({
    tsTypes: {} as import("./base.machine-def.typegen").Typegen0,
})