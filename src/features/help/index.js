const helpHandler = require("./handlers/help_mention");

module.exports = (app) => {
  app.event("app_mention", helpHandler);
};
