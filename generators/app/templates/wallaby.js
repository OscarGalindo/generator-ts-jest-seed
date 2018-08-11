module.exports = wallaby => ({
    files: [
        'src/**/*.ts',
        'tsconfig.json'
    ],
    tests: [
        'test/**/*.spec.ts',
    ],
    debug: true,
    compilers: {
        '**/*.ts': wallaby.compilers.typeScript({
            module: 1,  // commonjs
            target: 1,  // ES5
        })
    },
    testFramework: 'jest',
    env: {type: 'node'},
    workers: {initial: 1, regular: 1}
});
