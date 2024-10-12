const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// Removes default CSS rules which prevent our custom CSS from being loaded
const filteredRules = defaultConfig.module.rules.filter(
  (rule) => String(rule.test) !== String(/\.css$/)
);

module.exports = {
  ...defaultConfig,
  entry: {
    'block-editor': path.resolve(__dirname, 'src', 'index.ts'),
    'block-frontend': path.resolve(__dirname, 'src', 'block', 'frontend.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      ...filteredRules,
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    // Remove default plugins that conflict
    ...defaultConfig.plugins.filter(
      (plugin) =>
        !(plugin instanceof DependencyExtractionWebpackPlugin) &&
        !(plugin instanceof MiniCssExtractPlugin)
    ),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new DependencyExtractionWebpackPlugin(),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
