import help from "./help/index.js";
import home from "./home/index.js";
import recall from "./recall/index.js";
import remember from "./remember/index.js";

export default (app) => {
  help(app);
  home(app);
  remember(app);
  recall(app);
};
