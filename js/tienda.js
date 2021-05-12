const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
  leerJSON()
})

const leerJSON = async () => {
  try {
    const respuesta = await fetch('productos.json')
    const data = await respuesta.json()
    agregarItems(data)
  } catch (error) {
    console.log(error)
  }
}


const agregarItems = (data) => {
  data.forEach(producto => {
    templateCard.querySelector("h5").textContent = producto.estilo
    templateCard.querySelector("p").textContent = producto.precio
    templateCard.querySelector("img").setAttribute('src', producto.img)

    const clon = templateCard.cloneNode(true)
    fragment.appendChild(clon)
  })
  items.appendChild(fragment)
}
