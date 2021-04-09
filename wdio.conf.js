exports.config = {

    runner: 'local',
    specs: ['./webdriver/tests/**.ts'],
    exclude: [
        // 'path/to/excluded/files'
    ],

    autoCompileOpts: {
        autoCompile: true,
        // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
        // for all available options
        tsNodeOpts: {
            transpileOnly: true,
            project: './webdriver/tsconfig.json',
        },
        // tsconfig-paths is only used if "tsConfigPathsOpts" are provided, if you
        // do please make sure "tsconfig-paths" is installed as dependency
        tsConfigPathsOpts: {
            baseUrl: './',
        },
    },

    maxInstances: 10,
    automationProtocol: 'webdriver',
    path: '/wd/hub',

    capabilities:
        {
            chromeBrowser: {
                capabilities: {
                    browserName: 'chrome',
                    // 'sauce:options': {
                    //     // ...
                    // }
                },
            },
            firefoxBrowser: {
                capabilities: {
                    browserName: 'firefox',
                    // 'sauce:options': {
                    //     // ...
                    // }
                },
            },
        },

    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['selenium-standalone']
    ],
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
};
