
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

// 

// let oneLinerJoke = require('one-liner-joke')
// let getRandomJoke = oneLinerJoke.getRandomJoke()
// console.log(getRandomJoke)

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)