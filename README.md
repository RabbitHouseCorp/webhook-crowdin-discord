# Webhook Crowdin for Discord
An API limited to webhook only and using ExpressJS for WebServer use. 

### How does it work?
- `npm run build`:
To build the `Dist` folder.
- `npm run start`:
To start the webserver

## How to configure webhook in crowdin?
You can follow this tutorial method.
https://support.crowdin.com/webhooks/#adding-webhooks

**Remembering**: The endpoint only works with **`POST`** and **`application/json`**. If you set it wrong automatically it may fail. In short the connection will be refused.

### API information
Default port is `8080` and you need to put webhook URL in Env

### Docker
Soon the Docker will be added to the project.

### Support
If you found wrong ago with the API you can report the problem on the [server](https://discord.gg/Jr57UrsXeC) or [create a issue](https://github.com/RabbitHouseCorp/webhook-crowdin-discord/issues/new)

