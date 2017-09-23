module.exports = function nuxtBulma({ css = true } = {}) {
  if (css) {
    this.options.css.push('bulma/css/bulma.css');
  }
};

module.exports.meta = require('./package.json');
