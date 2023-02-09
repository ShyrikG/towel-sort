
module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix === undefined) return arr;
  matrix.forEach((elem, index) => {
      if (index%2) elem = elem.reverse();
      arr = arr.concat(elem);        
  })
return arr;
}
