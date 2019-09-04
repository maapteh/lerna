# @test/monorepo
Testing monorepo setup with TypeScript, Jest, Prettier, TSLint for all our packages which we can distribute over our applications.

## Pre requisites
Have yarn available and run `yarn` in root of this project.

## Setup
```
.
├── /.jest-{cache|coverage}     # Jest testing files
├── /node_modules               # Hoisted dependencies
├── /packages/                  # Our main modules
│   ├── /bar/                   # Bar
│   └── /foo/                   # Foo
└── /lerna.json                 # generic lerna settings
```


## CI
Auto deploying our packages:
1. `yarn lint`
2. `yarn test`
3. `yarn lerna version` (see lerna file for CI settings, when using conventional comments it will automate version number from there)
4. `yarn lerna publish from-git`

For deploying alpha releases step 3 will be: `yarn lerna version prepatch --preid HASHCOMMIT`

## CD
Pick up the newly distributed package