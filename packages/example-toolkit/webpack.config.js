const path = require('path');
const toolkitCreator = require('@toolkit-creator/config-builder');

/**
 * @type {Object}
 */
module.exports = toolkitCreator({
  context: path.resolve(__dirname, 'lib'),
});
