import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {getDirname} from './bundlerUtils.js';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
const __dirname = getDirname(import.meta.url);

export const config = {
  entry: {
    auth: './src/main.js',
  },
  output: {
    filename: 'js/[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
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
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
      '@pages': path.resolve(__dirname, '../src/pages/'),
      '@components': path.resolve(__dirname, '../src/components/'),
      '@hooks': path.resolve(__dirname, '../src/hooks/'),
      '@utils': path.resolve(__dirname, '../src/utils/'),
      '@store': path.resolve(__dirname, '../src/store/'),
      '@services': path.resolve(__dirname, '../src/services/'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      title: 'Production',
      filename: 'index.html',
      template: 'src/index.html',
      publicPath: '',
      inject: true,
    }),
    new ESLintWebpackPlugin({
      fix: true,
    }),
  ],
};
