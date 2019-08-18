const assert = require('assert')
const should = require('should')
const request = require('supertest')
const app = require('./index')  // index.js에 있는 app을 모듈형식으로 가져옴

//defcribe()는 테스트suite 생성
//1파라미터는 뭘 테스트할지, 2파라미터는 콜백함수
describe('GET /users', () => {
    // 여기에 테스트코드 작성
    // it도 mocha가 가지고있는 함수
    it('test code\n', (done) => {
        // assert.equal(1, 0)  // 파라미터1과 파라미터2가 같음

        // (1).should.equal(1)  // done() 써줘야함
        // done()

        request(app)  // supertest가 알아서 listen까지함
            .get('/users')
            .end((err, res) => {
                console.log(res.body)
                res.body.should.be.instanceof(Array)  // 배열 체크
                res.body.forEach(user => {
                    user.should.have.property('name')
                });
                done()
            });
    })
})
