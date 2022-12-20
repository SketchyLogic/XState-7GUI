import { createMachine } from "xstate";

export const authenticatorMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QEECuAXAFmAduglgMYCGBA9jgAQC2xhm+OYAdPWIQNaNQAKYATtXyxY+CgBkwANzAAbAMQQKLRlLIcWaLLgIlyVWvUYs2nbn0HDRE6XISqyesTgDaABgC67j4lAAHMlF9XxAAD0QAZgBGZgA2AHYAVgAWFIj42IAOZIAmaIAaEABPRABaKIiI5kyc2IBOKMzMqMS69PiAXw7CrWw8IlJnGjoGJlZsMxxeASERZ0kZBSUxhw1mXp0B-WGjMdMuKYtZ6xwFuwcnCm8XKJ8kEACg5xDwhFLmuJzMurdk+LqAfE3PFCiUEIk3MwIck6rEoslYq1ElEcskuj0MH1dIMKDtRiYJgdppY5jZFoplMxVppMZtLgYRsZxuwiUcrPNbLJ7Dg1PTrjk7v5AvhgvdXqUGsw3Dk6siIllKpVYjlQYgcm4qplFVF4kD6rrkpkut0QDgyBA4CENv16XjjCFHiLnmKyhU6lKZXKFYrlaq3pVMswIhqcjkWolEmGcokIuiQNbsdtDPjmZNiccOYsHcLRaBXo1mC1Ko1UW5mrFpX7StHITVkm5oRCvvEKnGE1shsmmcQIEIcNmnhQXohkhVqhH69FgfWEn6opC3NO2rl4tE-m3aTacQzdiwzYJiLIB06hy6EKPNRONfP4jOQcVEFEC3UW78UZksnVMjGN9ot0nGTGM02VJft7kdXMwhHec4laUNlRyf4viiP1Q01DJIynOpRx1HJjQ6IA */

/** @xstate-layout N4IgpgJg5mDOIC5QEECuAXAFmAduglgMYCGBA9jgAQC2xhm+OYAdPWIQNaNQAKYATtXyxY+CgBkwANzAAbAMQQKLRlLIcWaLLgIlyVWvUYs2nbn0HDRE6XISqyesTgDaABgC67j4lAAHMlF9XxAAD0QARgBmZgA2NwBWACYogE54pIAOBIAWVNScgBoQAE9EAFoUiOY3JIB2JIjahLqohojYgF9O4q1sPCJSZxo6BiZWbDMcXgEhEWdJGQUlcYcNZj6dQf0Ro3HTLmmLOescRbsHJwpvFwifJBAAoOcQ8IRKnOYcuszvhMy6qkom4cvVimV3jlMsw2hEklCoplUm5YoDUt1ehh+rohhRdmMTJNDjNLPMbEtFMpmGtNFitlcDKNjBN2MTjlYFrZZPYcGoGTckvd-IF8MEHm9yglqlF-gkgRFvhFWjkEuDInCvqlsnUIkCtTLchiQJsBgz8cyDuZZhzyXJ5AJ+GR+Mw-LJSAAzJ3UDZ0024xl7Qmsq2k07nbmXf03TwhJ6il7ixCxFXMHXxVFJWJA+IRNXvLIJZj-AqA3WxBJtAHdHogHBkCBwEImnE7QwE2MisWgCX5GGy+WK5Wq0oVUGFnJQpIFNxRJItZVG5vbYZti1EkMnTlLDvPCivSLQiIVqIRTLwtyZI-5PPlKJtZjpVLRM91FF1BKJRe+lsrpnjYgQEIOA7vGe6JggaTVJk2RPvCOS6kkII3rE0Lvi+vz5Ak5Zzl+2h+q2f4sHWgjELIIFdmEiCQcw0FynCE4IUhI4IBOMIFFqmSotByapHUuHYsueKruMdbsmSwEPHGFFvNRtRuEesTlgkLQdHmSqxMwEQKsCcpuAUORvtWnRAA */

/** @xstate-layout N4IgpgJg5mDOIC5QEECuAXAFmAduglgMYCGBA9jgAQC2xhm+OYAdPWIQNaNQAKYATtXyxY+CgBkwANzAAbAMQQKLRlLIcWaLLgIlyVWvUYs2nbn0HDRE6XISqyesTgDaABgC67j4lAAHMlF9XxAAD0QAWgBGAE5mAHYAZni3ADYotwAmAFYAFjdYqNyAGhAAT0jM+OzmbJy3AA4G3PjWmMyAXw7SrWw8IlJnGjoGJlZsMxxeASERZ0kZBSUxhw1mXp0B-WGjMdMuKYtZ6xwFuwcnCm8XKJ8kEACg5xDwhGjsxOY3N0Ss+NzmlFMolUqlShU3slmJkog14g1svFQR83LkYl0ehg+rpBhQdqMTBMDtNLHMbIt5AJ+GR+Mw-LJSAAzGnUdZYzaXAwjYzjdjEo5Wea2WT2HBqTnXTwhR74YL3V7ZGJRZgxNzZAqg3JRDKJTLgyKJXI1dpuFJudqZBpReJRDEgDb9Tn4nn7cwzQXkuSKZTMVaadmO3Fc3aEvlu0knM4ii5B66ZO7+QKy57yyJRD5fH5-AFa4Gg-UIGKfBqJRUFJKG1IxbK2u04MgQOAhB047aGAnSpNy0CvCKZAqZ35VHNAkFg8qRAE1Np1XOohoxXK5O0trZDdsuonh45Cxadp4UF4GmqpRFJYFwpfmqLjiERRIxBrMX4-RUxGJVvKJFcB1vr7ljMQEBCDg+7JoeqYIIkiRPqaALpFaY6lgW0SZHEjTVt8mQ5M0Ro-togZtgBLD1oIxCyGB3ZhIg0Gwf8DQIVESHZCh6YqiCwK-C0Wq5FU+HYmueIbmM9YCmSoH3DKVGvNB8TMKkrQIqkfyJEU8QFjCT6Wr8gIljeRTLl0HRAA */
createMachine({
    tsTypes: {} as import("./authenticator.machine-def.typegen").Typegen0,

    schema: {} as {
        services: {
            checkUserPermission: {
                data: {
                    user: {
                        permissions: string[]
                    }
                }
            }
        }
    },

    id: "Authentication machine",

    states: {
        checkingPermissionLevel: {
            invoke: {
                src: "checkUserPermission",

                onDone: [{
                    target: "admin",
                    cond: "userIsAdmin",
                    actions: ["loggedAsAdminAlert", "reportSomethingToServer"]
                }, {
                    target: "normal",
                    actions: "loggedAsNormalAlert",
                    cond: "userIsNormal"
                }, {
                    target: "noPermission",
                    actions: "loggedWithNoPermissionAlert"
                }],

                onError: "noPermission"
            }
        },

        admin: {},
        normal: {},

        noPermission: {
        }
    },

    initial: "checkingPermissionLevel"
},{
    actions: {
        loggedAsAdminAlert: () => console.log('Welcome admin!'),
        loggedAsNormalAlert: () => console.log('Welcome normal user!'),
        loggedWithNoPermissionAlert: () => console.log('No permission!'),
        reportSomethingToServer: () => console.log('Server did u knew that...'),
    },
    guards: {
        userIsAdmin: (ctx, event) => event.data.user.permissions.includes('admin'),
        userIsNormal: (ctx, event) => event.data.user.permissions.includes('normal')
    },
    services: {
        checkUserPermission: async () => {
            await new Promise((resolve) => {setTimeout(resolve, 10000)});
            return {
                user: {
                    permissions: ["admin"]
                }
            }
        }
    }
})