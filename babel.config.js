const path = require('path');

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '~': path.resolve(__dirname, '.'),
            'src': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'assets'),
          },
        }
      ]
    ]
  }
}