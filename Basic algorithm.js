// 1. function takes in a single parameter and converts from fareinheit to celcius
function convertFahrToCelsius(F){
  if(!Number.isInteger(parseInt(F)) || Array.isArray(F)){  // checks for the datatype of the input
    return `${JSON.stringify(F)} is not a valid number but a/an ${Array.isArray(F)?"array":typeof(F)}`.replace("{\\",'')
  }
  let C = (F-32) * 5/9   // formula for conversion
  return C.toFixed(4)  // returning the final converted number
}

console.log(convertFahrToCelsius({temp:0}))   // this prints the result to the console

// function to return a string yu-gi-oh
function checkYuGiOh(n){
  if(isNaN(n)){
   return "fizzbuzz is meh"
  }
  let arr = []
  for(let i=1; i<=n; i++){
    let val = []
    
    if(i%2==0){
      val.push("yu")
    }
    if(i%3==0){
      val.push("gi")
    }
    if(i%5==0){
      val.push("oh")
    }
    if(i%2!==0 && i%3!==0 && i%5!==0){
      val.push(i)
    }
   if(typeof(val[0])=="number"){
    arr.push(val[0])
   }
   else{
     arr.push(val.join("-"))
   }
    
  }
  return arr
}
console.log(checkYuGiOh(10)) // print out the output
