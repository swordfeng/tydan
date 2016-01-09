var io = require('socket.io-client');
var colors = require('colors');

console.log('TYPCN LIVE 弹幕姬 by swordfeng');

if (process.argv.length < 3) {
    console.log('Usage: node tydan.js <LIVE_ID>');
    process.exit();
}

var live_id = process.argv[process.argv.length - 1];

var client = io('https://em-ws-edge-gslb.eqoe.cn/', {
    query: 'vid=live_' + live_id
});

console.log(('正在连接到：' + live_id + '...').yellow);

client.on('connect', function () {
    console.log('已连接！'.green);
});

client.on('message', function (data) {
    console.log(data.text);
});

client.on('online', function (count) {
    console.log(('当前在线人数：' + count).green);
});

client.on('disconnect', function () {
    console.log('连接已断开'.red);
});


