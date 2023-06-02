function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')

  //if(html.classList.contains('light')){
  //html.classList.remove('light')
//} else{
  //html.classList.add('light')
//}

// pegar a tag img
const img = document.querySelector("#profile img")

// substituir a imagem
if(html.classList.contains('light')){
  // se tiver light mode, adicionar a imagem light
  img.setAttribute("src", "./assets/assets/Avatar.png")
alt = "Foto de Alex M. de camisa cinza dentro de uma gabine de uma caminhão"
} else{
  // se tiver a imagem light mode, manter a imagem normal
  img.setAttribute('src', './assets/assets/avatar-dark.png')
}


}






