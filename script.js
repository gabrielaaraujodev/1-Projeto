function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  // Substituindo imagem
  if (html.classList.contains("light")) {
    // Se tiver Light Mode
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    // Se tiver Normal
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}

// Toda as linhas de código acima podem ser substituidas por : html.classList.toggle('light')
