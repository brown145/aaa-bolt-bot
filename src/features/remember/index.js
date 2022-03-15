import { SUBMIT_CALLBACK_ID, TRIGGER_CALLBACK_ID } from "./consts.js";

import shortcutHandler from "./handlers/shortcut.js";
import viewSubmitHandler from "./handlers/view_submit.js";

export default (app) => {
  const shortcutConfig = {
    callback_id: TRIGGER_CALLBACK_ID,
    type: "message_action",
  };

  app.shortcut(shortcutConfig, shortcutHandler);
  app.view(SUBMIT_CALLBACK_ID, viewSubmitHandler);
};
