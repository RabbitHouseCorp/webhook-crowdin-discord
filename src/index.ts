import bodyParser from 'body-parser';
import express from 'express';
import { eventIdentify } from './discord/utils/EmbedEvents';
import { sendWebhook } from './discord/WebhookDiscord';

require('dotenv').config()
export interface Message {
  embeds?: Array<any>;
  content?: string;
}
var app = express();

app.use(bodyParser.json()) // Parse JSON

let endpoint = process.env.DOCKER_ENDPOINT ?? process.env.ENDPOINT ?? 'webhook'

if (endpoint === '') {
  endpoint = 'webhook'
}

if (endpoint === null) {
  endpoint = 'webhook'
}


function startServer() {
  app.set('x-powered-by', false)
  app.disable('X-Powered-By');

  app.use((req, res, _next) => {
    if (!(req.path == `/${endpoint}`)) {
      res.removeHeader("X-Powered-By");
      req.destroy()
      res.destroy()
    } else {
      if (!(req.method == 'POST')) {
        res.removeHeader("X-Powered-By");
        req.destroy()
        res.destroy()
        return
      }
      _next()
    }
  });

  app.post(`/${endpoint}`, (_req, _res) => {
  
    const json = _req.body;
    const data_message: Message = {
      embeds: []
    };
    if (json.events !== undefined) {

      for (const data_event of json.events) {
        const eventLoaded = eventIdentify(data_event.event, data_event)
        data_message.embeds?.push(eventLoaded)
      }

      try {
        sendWebhook(data_message)
      } catch (err) {
      
      }
    }
    return _res.status(200).end()
  })
  console.log('Port -> ' + process.env?.PORT ?? 3000)
  app.listen(process.env?.PORT ?? 3000);
}

startServer();