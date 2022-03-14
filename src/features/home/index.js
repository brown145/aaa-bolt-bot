import CONSTS from "./consts.json" assert { type: "json" };
import homeOpenedHandler from "./handlers/home_opened.js";
import forgetMemoryHandler from "./handlers/forget_memory_action.js";
import forgetFAQHandler from "./handlers/forget_faq_action.js";
import addFAQOpenHandler from "./handlers/add_faq_action.js";
import addFAQSubmitHandler from "./handlers/add_faq_view_submit.js";

const {
  ADD_FAQ_CALLBACK_ID,
  SUBMIT_ADD_FAQ_ACTION,
  SUBMIT_FORGET_FAQ_ACTION,
  SUBMIT_FORGET_MEMORY_ACTION,
} = CONSTS;

export default (app) => {
  app.event("app_home_opened", homeOpenedHandler);
  app.action({ action_id: SUBMIT_FORGET_MEMORY_ACTION }, forgetMemoryHandler);
  app.action({ action_id: SUBMIT_FORGET_FAQ_ACTION }, forgetFAQHandler);
  app.action({ action_id: SUBMIT_ADD_FAQ_ACTION }, addFAQOpenHandler);
  app.view(ADD_FAQ_CALLBACK_ID, addFAQSubmitHandler);
};
