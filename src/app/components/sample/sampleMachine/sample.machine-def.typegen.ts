
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "xstate.init": { type: "xstate.init" };
"xstate.stop": { type: "xstate.stop" };
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
          "muteMicrophone": "MUTE" | "xstate.stop";
"unmuteMicrophone": "UNMUTE";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          
        };
        matchesStates: "Microphone" | "Microphone.Muted" | "Microphone.Unmted" | "Video" | "Video.Hiding video" | "Video.Showing video" | "WildToggler" | "WildToggler.asd" | "WildToggler.lol" | { "Microphone"?: "Muted" | "Unmted";
"Video"?: "Hiding video" | "Showing video";
"WildToggler"?: "asd" | "lol"; };
        tags: never;
      }
  