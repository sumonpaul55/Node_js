const people =['sumon', 'paul', 'sumit']
const _ = require('lodash')
const path = require('path');
const os = require('os');
const fs = require('fs');
var EventEmiter = require('events');
// console.log(os.platform ())
// console.log(os.arch ());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.hostname());

fs.writeFileSync('myfile.txt', "this file is created using node fs module");
fs.writeFileSync('myfile.txt', "I am replaced");
fs.appendFileSync('myfile.txt', " appendFileSync is not replaced old data");



const emmitter = new EventEmiter();

emmitter.on('dosomething', (reason)=>{// we can distructure it
    console.log(`I did something cause ${reason.orderby} ${reason.order}`) 
})

setTimeout(()=>{
    emmitter.emit('dosomething', {
        orderby: 'Someone',
        order : 'told to do that'
    })
},3000)
console.log('hellos')