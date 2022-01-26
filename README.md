# simple-analytics-vue3
This repository reproduces an issue where Simple Analytics doesn't work with Vue 3.

I've imported the plugin in src/main.js.

The site doesn't load and there's an error in the console:
```
Uncaught TypeError: vue.prototype is undefined
    handleSkipOrLocalhost index.js:37
    install index.js:56
    use runtime-core.esm-bundler.js:3809
    <anonymous> main.js:6
    js app.js:1148
    __webpack_require__ app.js:849
    fn app.js:151
    1 app.js:1161
    __webpack_require__ app.js:849
    checkDeferredModules app.js:46
    <anonymous> app.js:925
    <anonymous> app.js:928
index.js:37
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
