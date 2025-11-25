function linearSearch(numbers,target){
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]===target){
      return i
    }
    
  }
     return -1
 }
 const numbers = [1,8,2,7,3,6,4,5]
 console.log(linearSearch(numbers,8))