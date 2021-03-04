
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix ===undefined )return [];
  let newArray =[]
  for(let i =0; i<matrix.length;i++){
    
    if(i%2 ===0){
      newArray.push(...matrix[i])
    }
    else{
      newArray.push(...matrix[i].reverse())
    }

  }
   
  return newArray
}

