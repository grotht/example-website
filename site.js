// alert("Hello!")

const h1 = document.querySelector('h1')
h1.textContent = "Tevin's awesome webpage!"

const copyright = document.querySelector('footer p')
copyright.textContent = "BLA"

const link = document.querySelector('.active')
link.style.color ="ff0000"
link.style.textDecoration = "underline"

const contactLink = document.querySelector('#contact')
contactLink.style.fontSize = "19px"
contactLink.style.fontWeight = "bold"
contactLink.style.fontFamily = "Times New Roman"

// const contactAlt = document.getElementById('contact')
// does the same as aboe

const links = document.querySelectorAll('nav a')
links.forEach(link => console.log(link))
// links.forEach(link => link.style.display = 'none')
