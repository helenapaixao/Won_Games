// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  future: {
    webpack5: true, // Adicione esta configuração para habilitar o Webpack 5
  },
  swcMinify: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      // Adicione esta configuração para habilitar o SWC minify no cliente
      config.optimization.minimizer[0].options.terserOptions = {
        keep_classnames: true,
        keep_fnames: true,
      };
    }

    return config;
  },
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
});
