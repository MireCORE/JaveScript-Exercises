function changeImage() {
  const image = document.querySelector("#image");
  const url = prompt("Inter your image URL for yur image:");
  const borderRadius = prompt("inter your borderRadius(in pixels):");
  const backgroundColor = prompt("inter your image Background Color:");
  const paddimg = prompt("inter your image padding (in pixels):");
  const width = prompt("Inter your image's width (in pixels): ");
  const height = prompt("Inter your image's height");

  image.setAttribute("src", url);
  image.style.borderRadius = `${borderRadius}px`;
  image.style.backgroundColor = `${backgroundColor}`;
  image.style.paddimg = `${paddimg}px`;
  image.style.width = `${width}px`;
  image.style.height = `${height}px`;
  image.style.bordeColor = `2px solid blue`;
}
