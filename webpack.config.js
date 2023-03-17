
/* eslint-disable  */
import {merge} from 'webpack-merge';
import {config as commonConfig} from './bundler/webpack.common.js';

const config = async env => {
  const addons = addonsArg => {
    const addonsArray = []
      .concat.apply([], [addonsArg])
      .filter(Boolean);

    return addonsArray.map(addonName => import(`./bundler/addons/webpack.${addonName}.js`));
  };

  const envConfig = await import(`./bundler/webpack.${env.env}.js`);
  const mergedConfig = merge(commonConfig, envConfig.config, ...addons(env.addons));

  return mergedConfig;
};

export default config;
