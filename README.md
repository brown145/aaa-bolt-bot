# Asked And Answered Slackbot
A slackbot to help answer common questions 

demo: https://brown145.github.io/aaa-bolt-bot/

## Slack Setup
Create a slack app and configure
See manual process in `/docs` or use app manifest `/slack_config.yml`

1. generate app token `aaa-token` for `connections:write`
1. install app
1. add image from `docs/assets/book_bot.png` for Display Information > Bot Icon
1. build `.env`

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
 - [ ] ~~add slash commands for remember/recall~~ slash commands not suppored in threads
 - [x] add slash commands for "help"

### v0.0.3
 - [x] build out app Home tab: https://api.slack.com/surfaces/tabs
   - perhaps management remove/edit remebered content here

### v0.0.4
 - [x] handle no matching results in db on recall
 - [ ] evergreen recall results? - add on home view?
   - [x] add / remove FAQ
   - [ ] allow for FAQ recall

### v0.1.0
**Get Smarter**

Remove some of the required user intervention, make the bot "smarter". Use something type of natural language processor (https://www.npmjs.com/package/node-nlp)

#### TODO
- [ ] remember: generate keywords from full thread and more "smartly"
- [ ] recall: create list of possible threads more "smartly"
- [ ] recall: sort rank list of possible threads by match and return top X ???

### v0.1.1
**Get more proactive**

Reduce the manual steps required for remembering and recalling for users

#### TODO
- [ ] remember: monitor for threads that seem resolved and ask if it should be remembered
- [ ] recall: monitor for new questions and check for remembered threads; proactivly suggest

### v1.0.0
**Get Hosted**

Hosting on something like AWS may require re-write off of web-sockets to HTTP API for communication with slack.

#### TODO
 - [ ] https://slack.dev/bolt-js/deployments/aws-lambda
