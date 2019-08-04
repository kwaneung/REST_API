// 어플리케이션, 미들웨어, 라우팅, 요청/응답 객체
const express = require('express')
const logger = require('morgan')
const app = express()  // 어플리케이션

//미들웨어는 리퀘스트가 들어올때마다 실행하는 콜백함수.
//next()를 써야 다음 미들웨어가 실행.
const mw = (req, res, next) => {  // 미들웨어
    console.log('midleware1')
    next()
}

const mw2 = (req, res, next) => {
    console.log('midleware2')
    // throw Error('error!')
    next()
}

const errorMw = (err, req, res, next) => {  // 에러 미들웨어
    console.log(err.message)
}

const users = [  // 객체 생성
    {name: 'kwaneung'},
    {name: 'hyunyoung'},
]

app.use(logger('dev'))
app.use(mw)
app.use(mw2)
app.use(errorMw)
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req, res) => res.json(users))

app.listen(3000, () => console.log('running'))