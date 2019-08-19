const express = require('express')
const router = express.Router()
const ctrl = require('./user.ctrl')

// 이 모듈을 쓸때 /users를 지정해줬기때문에 안에 /users를 지워도 된다.
router.get('/', ctrl.index)  // ctrl의 index함수 바인딩
router.get('/:id', ctrl.show)
router.delete('/:id', ctrl.destroy)
router.post('/', ctrl.create)
// router.put('/:id',ctrl.update);

module.exports = router