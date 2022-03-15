const boltjs = require("@slack/bolt");

const { App, AwsLambdaReceiver } = boltjs;

const awsLambdaReceiver = new AwsLambdaReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = new App({
  appToken: process.env.SLACK_APP_TOKEN,
  receiver: awsLambdaReceiver,
  token: process.env.SLACK_BOT_TOKEN,
});

import("./features/register.js").then(({ default: registerFeatures }) => {
  registerFeatures(app);
});

module.exports.handler = async (event, context, callback) => {
  const handler = await awsLambdaReceiver.start();
  return handler(event, context, callback);
};
