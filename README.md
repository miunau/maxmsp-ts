# maxmsp-ts

A starter template for programming `js`/`jsui` objects in Max/MSP using TypeScript. Output is bundled with `esbuild`. Tree shaking is off, so **all** your code will end up in a single file, C-style. If you want to use modules, turn bundling off in the esbuild step.

Most of the definitions come from [ErnstHot/TypeScript-for-Max](https://github.com/ErnstHot/TypeScript-for-Max).

## Usage

1. Clone this repository

2. Install dependencies

```bash
npm install
```

3. Develop

```bash
npm run dev
```

Point the `js`/`jsui` object to the `build/index.js` file.
