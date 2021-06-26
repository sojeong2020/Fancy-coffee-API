const db = require('../db/connection');
const seed = require('../db/seeds/seed');
const testData = require('../db/data/test-data/index');
const{formatOptionsData,formatTastesData,formatCoffeeData,formatCommentsData, lookUp}=require('../db/utils/data-manipulation');

beforeEach(() => seed(testData));

afterAll(() => db.end());


describe('formatOptionsData', () => {
    test('return empty array when given empty array',()=>{
        const input = []
        expect(formatOptionsData(input)).toEqual([])
    });
    test('array of single object passed into function',()=>{
        const input =[{
            milk_type:'semi-skimmed-milk',
            description:'It is a good source of protein and calcium and usually use for making differrnt kinds of coffee.'
        }]
        expect(formatOptionsData(input)).toEqual([[
                'semi-skimmed-milk',
                'It is a good source of protein and calcium and usually use for making differrnt kinds of coffee.'
        ]])
    });
    test('does not mutate input array',()=>{
        const input = [{
            milk_type:'semi-skimmed-milk',
            description:'It is a good source of protein and calcium and usually use for making differrnt kinds of coffee.'
        }]
        formatOptionsData(input);
        expect(input).toEqual( [{
            milk_type:'semi-skimmed-milk',
            description:'It is a good source of protein and calcium and usually use for making differrnt kinds of coffee.'
        }])
  
      });
    
});
describe('formatTastesData', () => {
    test('return empty array when given empty array',()=>{
        const input = []
        expect(formatTastesData(input)).toEqual([])
    });
    test('array of single object passed into function',()=>{
        const input =[{
            type: 'mild',
            description:'Beginner-friendly coffee as it comes with a lot of milk that neutralizes the bitter taste.'
        }]
        expect(formatTastesData(input)).toEqual([[
            'mild',
            'Beginner-friendly coffee as it comes with a lot of milk that neutralizes the bitter taste.'
          ]])
    });
    test('does not mutate input array',()=>{
        const input =[{
            type: 'mild',
            description:'Beginner-friendly coffee as it comes with a lot of milk that neutralizes the bitter taste.'
        }]
        formatTastesData(input);
        expect(input).toEqual([{
            type: 'mild',
            description:'Beginner-friendly coffee as it comes with a lot of milk that neutralizes the bitter taste.'
        }])
  
      });
    
});
describe('formatCoffeeData', () => {
    test('return empty array when given empty array',()=>{
        const input = []
        expect(formatCoffeeData(input)).toEqual([])
    });
    test('array of single object passed into function',()=>{
        const input =[ {
            drink:'Latte',
            description:'Latte is comprised of a shot of espresso and steamed milk ',
            img_url:'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
            calories:180,
            sort:'mild',  
            preference:'semi-skimmed-milk',
            votes:10
        }];

        expect(formatCoffeeData(input)).toEqual([[ 
            'Latte',
            'Latte is comprised of a shot of espresso and steamed milk ',
            'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
            180,
            'mild',  
            'semi-skimmed-milk',
            10
    
        ]])
    });
    test('does not mutate input array',()=>{
        const input =[ {
            drink:'Latte',
            description:'Latte is comprised of a shot of espresso and steamed milk ',
            img_url:'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
            calories:180,
            sort:'mild',  
            preference:'semi-skimmed-milk',
            votes:10
        }];
        formatCoffeeData(input);
        expect(input).toEqual([ {
            drink:'Latte',
            description:'Latte is comprised of a shot of espresso and steamed milk ',
            img_url:'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
            calories:180,
            sort:'mild',  
            preference:'semi-skimmed-milk',
            votes:10
        }]);
  
      });
    
});
describe('formatCommentsData', () => {
    const coffeeLookUp = {Latte:1}

    test('return empty array when given empty array',()=>{
        const input = []
        expect(formatCommentsData(input,coffeeLookUp)).toEqual([])
    });
    test('array of single object passed into function',()=>{
        const input =[{
            author:'Craig',
            body:'I love it!',
            votes:2,
            drink_name:'Latte',
            created_at:new Date(1610964545410)
            }];
        expect(formatCommentsData(input,coffeeLookUp)).toEqual([ [ 'Craig', 'I love it!', 2, 'Latte', new Date(1610964545410) , 1 ] ]);
    });
    test('does not mutate input array',()=>{
        const input =[ 
            {
                author:'Craig',
                body:'I love it!',
                votes:2,
                drink_name:'Latte',
                created_at:new Date(1610964545410)
            }
        ];
        formatCommentsData(input,coffeeLookUp);
        expect(input).toEqual([
            {
            author:'Craig',
            body:'I love it!',
            votes:2,
            drink_name:'Latte',
            created_at:new Date(1610964545410)
            }
         ]);
  
      });
    
});
describe('lookUp', () => {
    test('return empty object ',()=>{
        const input = []
        expect(lookUp(input)).toEqual({})
    });
    test('check the correct key-value pair taken',()=>{
        const input=[{
            coffee_id: 1,
            drink: 'Latte',
            description: 'Latte is comprised of a shot of espresso and steamed milk ',
            img_url: 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
            calories: 180,
            sort: 'mild',
            preference: 'semi-skimmed-milk',
            votes: 10
          }]
          expect(lookUp(input)).toEqual({Latte:1})
    })

    
});