const pixelsTag = document.querySelector("div.pixels")

// when user scrolls the page, update pixelsTag to how far the user scrolled
document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  pixelsTag.innerHTML = Math.floor(pixels)
})
