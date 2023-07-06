// const {sum} = require('./func') ; 
const {multpule, greeting,evennum, array, func} = require('./func')

  /*test ('sum - should return 2+3 = 5 ',() => {

   expect(sum(2,3)).toBe(5) ;

})  */ 

test('multipule - should be 2*5*4 equal 40 ',() => {

expect(multpule(2,5,4)).toBeGreaterThanOrEqual(40) ;  
expect(multpule(2,5,4)).toBeGreaterThan(30) ;  
expect(multpule(2,5,4)).toBe(40) ;  
expect(multpule(2,5,4)).toBeCloseTo(40) ;   // for percision for floats 

})  

test('greeting - should return hello abanoub ' , () => {
                   
    expect(greeting('abanoub')).toBe('hello abanoub') 
    expect(greeting(`abanoub`)).toMatch('hello abanoub')    // to be not specific for check functionality not alphabetic

}) 

describe('even',() => {
    it('should return for 4 true ',() => {

        expect(evennum(4)).toBeTruthy() ; 
    })
    
    it(' should return for 5 false ',() => {
    
        expect(evennum(5)).toBeFalsy() ;  
    
    })
})
 


test ('validation ',()=> {

let x ; // undefined 
expect(x).toBeUndefined ; 

})   

test('array - to have aban',() => {

    expect(array).toContain('aban') ;  
}) 

 
describe ('get order by id ' , () => {
    it('get id that equal 1 and name purchase ',() => {
        expect(func(1)).toMatchObject({id: 1 , name : "purchase"}) 
        expect(func(1)).toHaveProperty('id',1)
    } )

    it('Validate if id not defined ',() => {
        expect(() => func()).toThrow() 
        expect(() => func()).toThrowError(' id is not defined ')  // or 

    } )
})


