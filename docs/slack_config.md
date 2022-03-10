# Slack Configuration

Create a slack app and configure

 1. go to https://api.slack.com/apps
 1. "create an app" > "from scratch" > ???
 1. "Basic Information" > "Display Information" > setup name, image, ect...
 1. "Basic Information" > "App-Level Tokens" > ??? 
    * aaa-token | connections:write
 1. "App Home" > ??? > Enable Bot, and set "name" and "always online"
 1. "Event Subscriptions" > enable
 1. "Event Subscriptions" > "Subscribe to bot events" (TODO: review list)
    * app_mention
    * message.channels
    * message.groups
    * message.im
    * message.mpim
 1. "OAuth & Permissions" > "Scopes" > add/update (TODO: review list)
    * app_mentions:read
    * channels:history
    * chat:write
    * commands
    * groups:history
    * im:history
    * mpim:history
 1. "Interactivity & Shortcuts" > "Shortcuts" > add
    * Recall Answer | Messages | aaa_recall
    * Remember Thread | Messages | aaa_remember
 1. build `.env` or otherwise manage env variables

      ```bash
         # OAuth & Permissions > OAuth Tokens for Your Workspace > Bot User OAuth Token
         SLACK_BOT_TOKEN = XXX

         # Basic Information > App-Level Tokens > aaa-token
         SLACK_APP_TOKEN = XXX

         # Basic Information > App Credentials" > Signing Secret
         SLACK_SIGNING_SECRET = XXX
      ```