//numbers


const multpule  = (a,b,c) => a*b*c ;  
const greeting = (name) => `hello ${name}` ;  
const evennum = (number) => {           // in oneline with ternary operator  ( number % 2 ===0 ? true : false ) 
    if (number % 2 == 0) {
              return true ;
    }
    return false ; 
} 

const array = ['asas','aban','kerr'] ; 

const func = (id) => { 
    if(!id) { 
        throw new Error (' id is not defined ')
    }
    return {id : 1 , price :10 , date : 2023 ,name : "purchase"}
}

module.exports ={
    multpule , 
    greeting , 
    evennum , 
    array , 
    func
} ; 
