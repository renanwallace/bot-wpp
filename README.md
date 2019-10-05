# bot-wpp

> bot-wpp is a javascript library which provides a high-level API control to Whatsapp so it can be configured to automatizeresposes or any data that goes trough Whatsapp effortlessly.

## Installation

```bash
> npm i --save bot-wpp
```

## Usage

```javascript
// import { create, Whatsapp } from 'bot-wpp';
const bot = require('bot-wpp');

bot.create().then(client => start(client));

function start(client) {
  client.onMessage(message => {
    if (message.body === 'Hi') {
      client.sendText(message.from, '👋  Hello human!');
    }
  });
}
```


### Functions

- [x] Receive message
- [x] Send text
- [x] Get contacts
- [x] Get chats
- [x] Get groups
- [x] Get group members
- [x] Send contact
- [x] Send media (image, music)
- [ ] Send localization
- [ ] Share localization
- [ ] Send audio voice
