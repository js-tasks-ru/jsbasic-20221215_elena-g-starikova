function getMinMax(str) {
  let numArr = str.split(" ").filter( item => +item ) 

  let result = {
    max: Math.max(...numArr),
    min: Math.min(...numArr),
  }
  return result
}
