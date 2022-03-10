import boltjs from "@slack/bolt";
import help from "./features/help/index.js";
import recall from "./features/recall/index.js";
import remember from "./features/remember/index.js";

const { App } = boltjs;

const app = new App({
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  token: process.env.SLACK_BOT_TOKEN,
  port: process.env.PORT || 3000,
});

help(app);
remember(app);
recall(app);

(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
