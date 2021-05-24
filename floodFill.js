const floodFill = (image, sr, sc, newColor, firstColor = image[sr][sc]) => {
 // edge cases: if coordinate is out of bounds, if it is already the new color
 // or if it's not from the original color we're trying to change
  if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] !== firstColor || image[sr][sc] === newColor)   {
      return image; 
  }
  
  image[sr][sc] = newColor;
  
  floodFill(image, sr + 1, sc, newColor, firstColor);
  floodFill(image, sr - 1, sc, newColor, firstColor);
  floodFill(image, sr, sc + 1, newColor, firstColor);
  floodFill(image, sr, sc - 1, newColor, firstColor);
  
// modified image
  return image;
};