
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "": { type: "" };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "addMinute": "ADD_MINUTE";
"addSeconds": "ADD_SECONDS";
"reset": "RESET" | "xstate.init";
"tick": "TICK";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          "isTimeOut": "";
        };
        eventsCausingServices: {
          
        };
        matchesStates: "expired" | "idle" | "paused" | "running";
        tags: never;
      }
  