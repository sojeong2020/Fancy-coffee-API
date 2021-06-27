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
                comment_count: expect.any(String)
                }))
            }) 
    });
    test('200: response with coffee sorted by calories by default ',async()=>{
        const {body} = await request(app)
        .get('/api/coffee?sort_by=calories')
        .expect(200)
        expect(body.coffee).toBeSortedBy('calories',{descending: false});
    });
    test('200: response with coffee sorted by sort by query ',async()=>{
        const {body} = await request(app)
        .get('/api/coffee?sort_by=sort')
        .expect(200)
        expect(body.coffee).toBeSortedBy('sort',{descending: false});
    });
    test('200: response with coffee sorted by preference by query ',async()=>{
        const {body} = await request(app)
        .get('/api/coffee?sort_by=preference')
        .expect(200)
        expect(body.coffee).toBeSortedBy('preference',{descending: false});
    });
    test('200: response with coffee sorted by a sort_by and order by query',async()=>{
        const {body} = await request(app)
        .get('/api/coffee?sort_by=calories&order=desc')
        .expect(200)
        expect(body.coffee).toBeSortedBy('calories',{descending: true,})
    });
    test('200: response with coffee filtered by the sort value by query',async()=>{
        const {body} = await request(app)
        .get('/api/coffee?sort_by=calories&order=desc&choice=sweet')
        .expect(200)
        expect(body.coffee).toHaveLength(4)
        expect(body.coffee).toBeSortedBy('calories',{descending: true,})
    });
    test('200: response with coffee filtered by the preference value by query',async()=>{
        const {body} = await request(app)
        .get('/api/coffee?sort_by=calories&order=desc&choice=soy-milk')
        .expect(200)
        //console.log(body.coffee)
        expect(body.coffee).toHaveLength(3)
        expect(body.coffee).toBeSortedBy('calories',{descending: true,})
    });
    test('400: response with error message when passed invalid `sort_by`', async() => {
        const {body} = await request(app)
        .get('/api/coffee?sort_by=apple')
        .expect(400);
        expect(body.msg).toBe("Bad request: Invalid sort_by!")
    });
    test('400: response with error message when passed invalid `order`', async() => {
        const {body} = await request(app)
        .get('/api/coffee?order=apple')
        .expect(400);
        expect(body.msg).toBe("Bad request: Invalid order!")
    });
    test('404: response with error message when passed non-existent `choice`', async() => {
        const {body} = await request(app)
        .get('/api/coffee?sort_by=calories&order=desc&choice=spicy')
        .expect(404);
        expect(body.msg).toBe('non-existent choice!')
    });
})

describe('GET /api/coffee/:coffee_id', () => {
    test('200: response with  an array of required coffee',async()=>{
        const {body} = await request(app)
        .get('/api/coffee/1')
        .expect(200);
        const requiredCoffee = body.coffee
        expect(typeof requiredCoffee).toEqual('object');
        expect(requiredCoffee).toEqual(
            [{"calories": 180, 
            "coffee_id": 1, 
            "comment_count": "1", 
            "description": "Latte is comprised of a shot of espresso and steamed milk ", 
            "drink": "Latte", "img_url": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80", 
            "preference": "semi-skimmed-milk", 
            "sort": "mild", 
            "votes": 10}]
        )

    });
    test('400: responds with an error message when passed a invalid coffee_id ',async()=>{
        const {body} = await request(app)
        .get('/api/coffee/apple')
        .expect(400);
        expect(body.msg).toBe('bad request!!');
    });
    test('404: responds with an error message when passed a non-existent coffee_id',async()=>{
        const {body} = await request(app)
        .get('/api/coffee/1000')
        .expect(404);
        expect(body.msg).toBe('not found!!')
    });
    
});

describe('PATCH /api/coffee/:coffee_id', () => {
    test('200: response with an updated coffee when {inc_votes: 10} requested',async()=>{
        const updatedVote = {inc_votes: 10}
        const {body} = await request(app)
        .patch('/api/coffee/1')
        .send(updatedVote)
        .expect(200);
        console.log(body.update)
        expect(body.update).toHaveProperty("votes",20)
    });
    test('200: response with an updated coffee {inc_votes: -1} requested',async()=>{
        const {body} = await request(app)
        .patch('/api/coffee/2')
        .send({inc_votes: -1})
        .expect(200);
        expect(body.update).toHaveProperty("votes",7)
    });
    test('200: responds with an updated coffee when there is some other property',async()=>{
        const {body} = await request(app)
        .patch('/api/coffee/3')
        .send({inc_votes: 5, name: 'Park'})
        .expect(200);
        expect(body.update).toHaveProperty("votes",15)
    });
    test('404: responds with an error message when there is a valid but non-existent review_id',async()=>{
        const {body} = await request(app)
        .patch('/api/coffee/300')
        .send({inc_votes: 10})
        .expect(404);
        expect(body.msg).toBe('not found!!')
    });
    
    test('400: responds with an error message when there is invalid coffee_id',async()=>{
        const {body} = await request(app)
        .patch('/api/coffee/apple')
        .send({inc_votes: 10})
        .expect(400);

       expect(body.msg).toBe('bad request!!')
    });
    test('400: responds with an error message when there is invalid "inc_votes',async()=>{
        const {body} = await request(app)
        .patch('/api/coffee/3')
        .send({inc_votes: 'cat'})
        .expect(400);
        expect(body.msg).toBe('bad request!!')
    });
    

});
