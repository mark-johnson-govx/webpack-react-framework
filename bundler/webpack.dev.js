export const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    allowedHosts: 'all',
    port: 9000,
    host: 'localhost',
    static: './dist',
    devMiddleware: {
    },
    historyApiFallback: true,
  },
};
