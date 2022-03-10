import helpHandler from "./handlers/help_mention.js";

export default (app) => {
  app.event("app_mention", helpHandler);
};
