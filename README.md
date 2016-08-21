# Parking Chat bot -- node.js

With this app, you can ask it if Waterloo Parking Lots C, N, W or X are available. 

## Setup

1. Clone the repo
2. `npm install`
3. create a file called "default.json" and put it inside the config folder. Copy the keys from Heroku.
4. run `node app`
5. go to this url: parkingchatbot.herokuapp.com 

## Webhook

All webhook code is in `app.js`. It is routed to `/webhook`. This project handles callbacks for authentication, messages, delivery confirmation and postbacks. More details are available at the [reference docs](https://developers.facebook.com/docs/messenger-platform/webhook-reference).


