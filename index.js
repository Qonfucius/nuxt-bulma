const set = require('lodash.set');

module.exports = function nuxtBulma({ css = true, postcss = true } = {}) {
  if (css) {
    this.options.css.push('bulma/css/bulma.css');
  }
  if (postcss) {
    set(this.options, ['build', 'postcss', 'plugins', 'postcss-cssnext', 'features', 'customProperties'], false);
  }
};

module.exports.meta = require('./package.json');
