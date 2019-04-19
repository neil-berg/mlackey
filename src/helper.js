export const numImages = (galleryHeight, windowWidth) => {
  let size = 50;
  //let size; //image width/height
  // if (windowWidth < 450) {
  //   size = 90;
  // } else {
  //   size = 120;
  // }

  const possibleImages = Math.floor(galleryHeight / size);
  // Account for 10px spacing between each box
  const totalMargin = (possibleImages - 1) * 10;
  const imagesToRemove = Math.ceil(totalMargin / size);
  const totalImages = possibleImages - imagesToRemove;
  return totalImages;
};
