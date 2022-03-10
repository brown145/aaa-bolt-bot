# Asked And Answered Slackbot
A slackbot to help answer common questions 

see: https://imgur.com/a/Z7tzung

## Slack Setup
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

## App Setup
```bash
yarn install
yarn dev
```

# Development Progress

### v0.0.1
**PoC**

 1. shortcut to remember a thread with a question and answer. Requires user to set keywords and short desc
 1. shortcut to recall a thread with simlar question. Requires user to search for thread.
 1. has help

#### TODO
 - [x] init
 - [x] rememver: on submit function handler
 - [x] remember: get get permalink to thread/comment
 - [x] remember: generate keywords (dumb)
 - [x] remember: persist remembered threads (locally)
 - [x] recall: on post handler
 - [x] remember: get text of question in both remember and recall
 - [x] recall: get suggested remembered threads (dumb/local)
 - [x] recall: get text of question in both remember and recall
 - [x] help: respond to app mention

### v0.0.2
 - [ ] handle no matching results in db on recall
 - [ ] evergreen recall results?

### v0.1.0
**Get Smarter**

Remove some of the required user intervention, make the bot "smarter". Use something type of natural language processor (https://www.npmjs.com/package/node-nlp)

#### TODO
- [ ] remember: generate keywords from full thread and more "smartly"
- [ ] recall: create list of possible threads more "smartly"
- [ ] recall: sort rank list of possible threads by match and return top X ???

### v0.1.1
**Get more proactive**

Eeduce the manual steps required for remembering and recalling for users

#### TODO
- [ ] remember: monitor for threads that seem resolved and ask if it should be remembered
- [ ] recall: monitor for new questions and check for remembered threads; proactivly suggest

### v1.0.0
**Get Hosted**

Hosting on something like AWS may require re-write off of web-sockets to HTTP API for communication with slack.

#### TODO
 - [ ] https://slack.dev/bolt-js/deployments/aws-lambda
