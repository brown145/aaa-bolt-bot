const shortcutHandler = require("./handlers/shortcut");
const viewSubmitHandler = require("./handlers/view_submit");
const { TRIGGER_CALLBACK_ID, SUBMIT_CALLBACK_ID } = require("./consts.json");

module.exports = (app) => {
  const shortcutConfig = {
    callback_id: TRIGGER_CALLBACK_ID,
    type: "message_action",
  };

  app.shortcut(shortcutConfig, shortcutHandler);
  app.view(SUBMIT_CALLBACK_ID, viewSubmitHandler);
};
