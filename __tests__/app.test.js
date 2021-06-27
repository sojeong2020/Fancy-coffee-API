const request = require('supertest');
const db = require('../db/connection');
const testData = require('../db/data/test-data/index');
const seed = require('../db/seeds/seed');
const app = require('../app');

beforeEach(() => seed(testData));

afterAll(() => db.end());

describe('GET / ',() => {
    test('200: / Responds with a message from the server',async()=>{
        const {body} = await request(app)
        .get('/')
        .expect(200);
        expect(body.msg).toBe('Welcome to Fancy Coffee!')
    });
    test('404: /000 Unavailable Routes',async()=>{
     const {body} = await request(app)
     .get('/00000')
     .expect(404);
     expect(body.msg).toBe('Invalid path!')
    });
}); 

describe('GET /api/tastes', () => {
    test('200: response with an array of tastes',async()=>{
    const result = await request(app)
    .get('/api/tastes')
    .expect(200);
    
    const {tastes} = result.body
    //console.log(tastes)
    expect(tastes).toHaveLength(3);
    expect(Array.isArray(tastes)).toBe(true);

    tastes.forEach((taste)=>{
        expect(taste).toEqual(
            expect.objectContaining({
            type: expect.any(String),
            description: expect.any(String)
        }))
    })
    });
});

describe('GET /api/options', () => {
    test('200: response with an array of options',async()=>{
    const result = await request(app)
    .get('/api/options')
    .expect(200);
    
    const {options} = result.body
    expect(options).toHaveLength(5);
    expect(Array.isArray(options)).toBe(true);

    options.forEach((option)=>{
        expect(option).toEqual(
            expect.objectContaining({
            milk_type: expect.any(String),
            description: expect.any(String)
        }))
    })
    });
});

describe('GET /api/coffee', () => {
    test('200: response with an arrary of coffee', async() => {
        const {body} = await request(app)
        .get('/api/coffee')
        .expect(200);
        //console.log(body.coffee)
        expect(body.coffee).toHaveLength(15);
        expect(Array.isArray(body.coffee)).toBe(true);

        body.coffee.forEach((eachCoffee)=>{
        expect(eachCoffee).toEqual(
        expect.objectContaining({
                coffee_id: expect.any(Number),
                drink: expect.any(String),
                description: expect.any(String),
                img_url: expect.any(String),
                calories: expect.any(Number),
                sort: expect.any(String),
                preference: expect.any(String),
                votes: expect.any(Number),
                }))
            }) 
    });
    test('200: response with coffee sorted by calories by default ',async()=>{
        const {body} = await request(app)
        
        .get('/api/coffee?sort_by=calories')
        .expect(200)
        expect(body.coffee).toBeSortedBy('calories',{descending: false});
    });

})
