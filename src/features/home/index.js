import CONSTS from "./consts.json" assert { type: "json" };
import homeOpenedHandler from "./handlers/home_opened.js";
import forgetHandler from "./handlers/forget_action.js";

const { SUBMIT_FORGET_ACTION } = CONSTS;

export default (app) => {
  const forgetActionConfig = {
    action_id: SUBMIT_FORGET_ACTION,
  };

  app.event("app_home_opened", homeOpenedHandler);
  app.action(forgetActionConfig, forgetHandler);
};
