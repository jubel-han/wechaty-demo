import { Wechaty } from 'wechaty'
import { PuppetPadpro } from 'wechaty-puppet-padpro'

const WECHATY_PUPPET_PADPRO_TOKEN = 'your-token-here'; // 这里需要替换成你的 token

const puppet = new PuppetPadpro({
    token: WECHATY_PUPPET_PADPRO_TOKEN
});

const bot = new Wechaty({
  puppet,  // 传入模块名称会存在版本识别的问题，这里传入实例来避免。
});

// 设置完成

// 运行 wechaty
bot
.on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`))
.on('login',            user => console.log(`User ${user} logined`))
.on('message',       message => console.log(`Message: ${message}`))
.start();
