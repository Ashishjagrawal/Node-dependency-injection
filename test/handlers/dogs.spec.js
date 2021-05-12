'use strict'

const supertest = require('supertest')
const server = require('../../src/server')

//Resolve
describe('/dogs', () => {
    let request;
    let axios = {
        get: () => Promise.resolve({ data: 'foobar'})
    }

    before( ()=> {
        const app = server(axios);
        request = supertest.agent(app) 
    })


    it('should return a 200', ()=> {
       return request.get('/dogs').expect(200);
    })
})

//Reject

describe('/dogs', () => {
    let request;
    let axios = {
        get: () => Promise.reject(new Error('Oops!'))
    }

    before( ()=> {
        const app = server(axios);
        request = supertest.agent(app)
    })


    it('should return a 200', ()=> {
       return request.get('/dogs').expect(500);
    })
})