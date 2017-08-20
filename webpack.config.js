const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        include: path.resolve(__dirname, 'node_modules/buildo-react-components/src'),
        use: [
          {
          loader: 'babel-loader',
            options: {
              presets: ['latest', 'react'],
              plugins: ['transform-class-properties']
            }
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFileName: require('path').resolve(__dirname, 'tsconfig.json')
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
