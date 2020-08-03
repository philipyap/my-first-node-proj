
// node keyword require allow us to import modules

// const myModule = require('./myModule.js')
// const fs = require('fs')

// fs.readFile('story.txt', 'utf8', (err, data)=>{
//     if(err){
//         console.log("there was a problem reading")
//     } else {
//         console.log(data)
//     }
// })

//console.log(myModule.beBasic())

//myModule.count()

//console.log("hello world")

// const http = require('http')

// http.createServer((req, res)=>{
//     res.write('Hello World')
//     res.end()
// }).listen(8000)


// let i = 0;



// const count ()=> {
//     console.log(i)
//     i=i*2
// }
// const myTimer = setInterval(count, 1000)

// const today = new Date()

// console.log(today)

const moment = require('moment')

console.log(moment().format("MMM Do YYYY"))
console.log(moment('06-18-1989', 'MM DD YYYY').format("dddd [the] Do [of] MMMM [in the year] YYYY"))
console.log('Oh boy, that was', moment('06-18-1989', 'MM DD YYYY').fromNow(), 'year ago!')