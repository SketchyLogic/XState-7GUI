
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
          "incrementCounter": "TOGGLE";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          "isTooManyToggles": "";
        };
        eventsCausingServices: {
          
        };
        matchesStates: "disabled" | "enabled" | "enabled.off" | "enabled.on" | { "enabled"?: "off" | "on"; };
        tags: never;
      }
  