const { showInteractiveMenu } = require("../menu");

module.exports = async (executeFn = null) => {
    await showInteractiveMenu(executeFn);
};
