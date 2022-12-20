
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.Authentication machine.checkingPermissionLevel:invocation[0]": { type: "done.invoke.Authentication machine.checkingPermissionLevel:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "checkUserPermission": "done.invoke.Authentication machine.checkingPermissionLevel:invocation[0]";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "loggedAsAdminAlert": "done.invoke.Authentication machine.checkingPermissionLevel:invocation[0]";
"loggedAsNormalAlert": "done.invoke.Authentication machine.checkingPermissionLevel:invocation[0]";
"loggedWithNoPermissionAlert": "done.invoke.Authentication machine.checkingPermissionLevel:invocation[0]";
"reportSomethingToServer": "done.invoke.Authentication machine.checkingPermissionLevel:invocation[0]";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          "userIsAdmin": "done.invoke.Authentication machine.checkingPermissionLevel:invocation[0]";
"userIsNormal": "done.invoke.Authentication machine.checkingPermissionLevel:invocation[0]";
        };
        eventsCausingServices: {
          "checkUserPermission": "xstate.init";
        };
        matchesStates: "admin" | "checkingPermissionLevel" | "noPermission" | "normal";
        tags: never;
      }
  