const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const sections = document.querySelectorAll("section")
const clientTag = document.querySelector("div.client")
const pageTag = document.querySelector("div.page")
const headerTag = document.querySelector("header")

// when user scrolls the page, update pixelsTag to how far the user scrolled
document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  pixelsTag.innerHTML = Math.floor(pixels)
})

// when user scrolls, make a progress bar that keeps track of the distanced
// scrolled vertically in the page
document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight

  const percentage = pixels / totalScrollableDistance

  progressTag.style.width = `${100 * percentage}%`
})

// when user scrolls the page, see how far down the page the user's scrolled
// then for each section, check whether user has passed it and if yes...
// update the text in the header
document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset

  sections.forEach(section => {
    if (section.offsetTop - 100 <= pixels) {
      clientTag.innerHTML = section.getAttribute("data-client")
      pageTag.innerHTML = section.getAttribute("data-page")

      if (section.hasAttribute("data-is-dark")) {
        headerTag.classList.add("white")
        progressTag.classList.add("white")
      } else {
        headerTag.classList.remove("white")
        progressTag.classList.remove("white")
      }
    }
  })
})

// when user scrolls the page, make things parallax
// move certain tags, based on how far they are from an anchor point
// anchorpoint is the middle of the section
// how far should we parallax? it's a ratio of the distance scrolled to the middle point
document.addEventListener("scroll", function () {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)

  sections.forEach(section => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)

    const distanceToSection = midViewport - midSection
    console.log(distanceToSection)
  })
})