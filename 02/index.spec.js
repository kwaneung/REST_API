const assert = require('assert')
const should = require('should')
const request = require('supertest')
const app = require('./index')


describe('GET /users', () => {
    it('배열을 반환한다', (done) => {
        request(app)
            .get('/users')
            .end((err, res) => {
                console.log(res.body)
                done()
            });
    })
})
