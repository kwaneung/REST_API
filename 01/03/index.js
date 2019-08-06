const express = require('express')
const logger = require('morgan')
const app = express()  // 어플리케이션
const users = [  // 객체 생성
    {name: 'kwaneung'},
    {name: 'hyunyoung'},
]

app.use(logger('dev'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', (req, res) => res.json(users))
app.post('/users', (req, res) => res.json(users))
app.get('/users', (req, res) => res.json(users))
app.delete('/users', (req, res) => res.json(users))

app.listen(3000, () => console.log('running'))