const TelegramBot = require('node-telegram-bot-api');
const token = '1933281822:AAHWF9xxyBIQw-EOuTm1_ORq67rCnpa1E3E';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  var fuck = "fuck";
  if (msg.text.toString().toLowerCase().indexOf(fuck) === 0) {
  bot.deleteMessage(msg.chat.id,msg.message_id);
  }
  var jib = "鸡";
  if (msg.text.toString().toLowerCase().indexOf(jib) === 0) {
  bot.deleteMessage(msg.chat.id,msg.message_id);
  }
  var hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
  bot.deleteMessage(msg.chat.id,msg.message_id);
  }
  var porn = "porn";
  if (msg.text.toString().toLowerCase().indexOf(porn) === 0) {
  bot.deleteMessage(msg.chat.id,msg.message_id);
  }
});
