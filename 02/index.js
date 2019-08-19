const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()  // 어플리케이션
const user = require('./api/user')  // index 생략 가능

// 미들웨어 셋팅
app.use(logger('dev'))
app.use(bodyParser.json())  // json 타입으로 바디를 받는다
app.use(bodyParser.urlencoded({ extended: true }))  // 인코딩 옵션

app.use('/users', user)  // users에있는 모든 경로에대해서는 user 라우팅

module.exports = app  // app을 외부에서도 볼 수 있도록