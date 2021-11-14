function getTriangleArea(height, width) {
  return((height*width)/2)
}

function getSquareArea(side) {
  
  return(side*side)
  
}

function getCircleArea(radius) {
 
  return Number((Math.PI*radius*radius).toFixed(2))
}

//Please , don't remove the following code 
if (typeof module !== 'undefined') {
  module.exports = {
    getTriangleArea,
    getSquareArea,
    getCircleArea
  };
}