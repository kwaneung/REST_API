const assert = require('assert')
const should = require('should')
const request = require('supertest')
const app = require('./index')  // index.js에 있는 app을 모듈형식으로 가져옴

//defcribe()는 테스트suite 생성
//1파라미터는 뭘 테스트할지, 2파라미터는 콜백함수
describe('GET /users', () => {
    // 여기에 테스트코드 작성
    // it도 mocha가 가지고있는 함수
    describe('성공', () => {

        it('test code\n', (done) => {
            // assert.equal(1, 0)  // 파라미터1과 파라미터2가 같음
    
            // (1).should.equal(1)  // done() 써줘야함
            // done()
    
            request(app)  // supertest가 알아서 listen까지함
                .get('/users')
                .end((err, res) => {
                    // console.log(res.body)
                    res.body.should.be.instanceof(Array)  // 배열 체크
                    res.body.forEach(user => {
                        user.should.have.property('name')
                    });
                    done()
                });
        })
        it('최대 limit 갯수만큼 응답한다', done => {
                request(app)
                .get('/users?limit=2')
                .end((err, res) => {
                    // console.log(res.body)
                    res.body.should.have.lengthOf(2)
                    done() 
                })
        })
    })
    describe('실패', () => {
        it('limit이 정수가 아니면 400을 응답한다', done => {
            request(app)
                .get('/users?limit=two')
                .expect(400)
                .end(done)
        })
    })
})
describe('GET /users/:id', () => {
    describe('성공', () => {
        it('유저 객체를 반환한다', done => {
            request(app)
                .get('/users/2')
                .end((err, res) => {
                    // console.log(res.body)
                    res.body.should.have.property('id', 2)
                    done()
                })
        })
    })
    describe('실패', () => {
        //id가 숫자가 아닐 경우 400응답
        //id가 없는 유저의 경우 404응답
        it('id가 숫자가 아닐 경우 400 응답', done => {
            request(app)
                .get('/users/one')
                .expect(400)
                .end(done)
        })
        it('찾을 수 없는 id인 경우 404 응답', done => {
            request(app)
                .get('/users/9')
                .expect(404)
                .end(done)
        })
    })
})
describe('DELETE /users/:id', () => {
    describe('성공', () => {
        it('204 응답', done => {
            request(app)
                .delete('/users/3')
                .expect(204)
                .end(done)
        })
    })
    describe('실패', () => {
        it('id가 숫자가 아닌경우 400', done => {
            request(app)
                .delete('/users/three')
                .expect(400)
                .end(done)
        })
    })
})
describe('POST /users', () => {
    describe('성공', () => {
        it('생성된 유저 객체와 201을 응답', done => {
            request(app)
            .post('/users')
            .send({name: 'Daniel'})
            .expect(201)
            .end((err, res) => {
                res.body.should.have.property('name', 'Daniel')
                done()
            })
        })
    })
    describe('실패', () => {
        it('name 누락시 400 응답', done => {
            request(app)
                .post('/users')
                .send({})
                .expect(400)
                .end(done)
        })
        it('name 중복시 409 응답', done => {
            request(app)
                .post('/users')
                .send({name: 'Kwaneung'})
                .expect(409)
                .end(done)
        })
    })
})