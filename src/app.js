const { App } = require("@slack/bolt");
const remember = require("./features/remember");
const recall = require("./features/recall");
const help = require("./features/help");

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
