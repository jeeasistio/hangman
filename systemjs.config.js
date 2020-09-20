SystemJS.config({
  baseURL: 'https://unpkg.com/',
  defaultExtension: true,
  packages: {
    "/": "js"
  },
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    },
    '*.css': {
      loader: 'css'
    },
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@16.13.1/umd/react.production.min.js',
    'react-dom': 'react-dom@16.13.1/umd/react-dom.production.min.js',
    'css': 'systemjs-plugin-css@latest/css.js',
    'material-ui': '@material-ui/core@latest/umd/material-ui.production.min.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./src/index.js')
.catch(console.error.bind(console));