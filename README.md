# bot-wpp

> bot-wpp is a javascript library which provides a high-level API control to Whatsapp so it can be configured to automatize resposes or any data that goes trough Whatsapp effortlessly. 
>
> It is built using [puppeteer](https://github.com/GoogleChrome/puppeteer) and based on [this python wrapper](https://github.com/mukulhase/WebWhatsapp-Wrapper)


## Installation

```bash
> npm i bot-wpp
```

## Usage

```javascript
// import { create, Whatsapp } from 'bot-wpp';
const bot = require('bot-wpp');

bot.create().then(client => start(client));

function start(client) {
  client.onMessage(message => {
    if (message.body === 'Hi') {
      client.sendText(message.from, '👋 Hello from bot!');
    }
  });
}
```

###### After executing `create()` function, **bot** will create an instance of whatsapp web. If you are not logged in, it will print a QR code in the [terminal](https://i.imgur.com/g8QvERI.png). Scan it with your phone and you are ready to go!
###### bot will remember the session so there is no need to authenticate everytime.

### Functions list
| Function                          	| Description 	| Implemented 	|
|-----------------------------------	|-------------	|-------------	|
| Receive message                   	|             	| ✅           	|
| Send text                         	|             	| ✅           	|
| Get contacts                      	|             	| ✅           	|
| Get chats                         	|             	| ✅           	|
| Get groups                        	|             	| ✅           	|
| Get group members                 	|             	| ✅           	|
| Send contact                      	|             	| ✅           	|
| Get contact detail                	|             	| ✅           	|
| Send media (image, audio, doc)    	|             	|             	|
| Send stickers                     	|             	|             	|
| Decrypt media (image, audio, doc) 	|             	|             	|

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
