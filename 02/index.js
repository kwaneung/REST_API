const express = require('express')
const logger = require('morgan')
const app = express()  // 어플리케이션
const users = [  // 객체 생성
    {id: 1, name: 'Kwaneung'},
    {id: 2, name: 'hyunyoung'},
    {id: 3, name: 'Chirs'}
]


app.use(logger('dev'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', (req, res) => {
    // limit 갯수만큼만 user들을 출력할 수 있도록해보자
    req.query.limit = req.query.limit || 10  // limit이 없으면 default로 10을 넣어줌
    const limit = parseInt(req.query.limit, 10)  // 10진수 문자열로 변환
    // limit이 숫자형이 아니면 400을 응답
    // offset이 숫자형이 아니면 400을 응답
    // console.log(limit)
    if(Number.isNaN(limit)){
        res.status(400).end()
    }else{
        res.json(users.slice(0, limit))  // 0번부터 limit 갯수만큼 출력
    }
})
// app.post('/users', (req, res) => res.json(users))
// app.get('/users', (req, res) => res.json(users))
// app.delete('/users', (req, res) => res.json(users))

module.exports = app  // app을 외부에서도 볼 수 있도록