/*Mostrar y Ocultar Carrito*/




const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footerCarrito = document.getElementById('carrito-footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
  leerJSON()

  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    mostrarEnCarrito()
  }
})

cards.addEventListener('click', e => {
  addCarrito(e)
})

items.addEventListener('click', e => {
  aumentarDisminuir(e)
})

//Lee los productos de productos.json//
const leerJSON = async () => {
  try {
    const respuesta = await fetch('productos.json')
    const data = await respuesta.json()
    agregarCards(data)
  } catch (error) {
    console.log(error)
  }
}

//Mostrar los productos del JSON al DOM//
const agregarCards = (data) => {
  data.forEach(producto => {
    templateCard.querySelector("h5").textContent = producto.estilo
    templateCard.querySelector("p").textContent = producto.precio
    templateCard.querySelector("img").setAttribute('src', producto.img)
    templateCard.querySelector("button").dataset.id = producto.id

    const clon = templateCard.cloneNode(true)
    fragment.appendChild(clon)
  })
  cards.appendChild(fragment)
}



//Agregar productos al carrito//

const addCarrito = e => {

  if (e.target.classList.contains('btn-dark')) {
    setCarrito(e.target.parentElement)
  }
  e.stopPropagation()
}



const setCarrito = obj => {
  const producto = {
    id: obj.querySelector('button').dataset.id,
    estilo: obj.querySelector('h5').textContent,
    precio: obj.querySelector('p').textContent,
    cantidad: 1
  }

  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad+1
  }

  carrito[producto.id] = {...producto}

  mostrarEnCarrito()
}


const mostrarEnCarrito = () => {

  items.innerHTML = ""

  Object.values(carrito).forEach(producto => {

    templateCarrito.querySelectorAll('td')[0].textContent = producto.estilo
    templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
    templateCarrito.querySelector('.btn-info').dataset.id = producto.id
    templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
    templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)
  })

  items.appendChild(fragment)


  cambiarFooterCarrito()

  //Guardar carrito en localStorage//
  localStorage.setItem('carrito', JSON.stringify(carrito))
}



//Muestra cantidad total//  
const carritoEnCero = document.getElementById('contadorCarrito').innerHTML = 0

const cambiarFooterCarrito = () => {

  footerCarrito.innerHTML = ' '
  if (Object.keys(carrito).length === 0) {
    footerCarrito.innerHTML = '<th id="carrito-vacio" scope="row" colspan="5">Carrito vacio..</th>'
  
    return
  }


  const nCantidad = Object.values(carrito).reduce((i, {cantidad}) => i + cantidad ,0)
  const nPrecio = Object.values(carrito).reduce((i, {cantidad, precio}) => i + cantidad * precio ,0)

  document.getElementById('contadorCarrito').textContent = nCantidad
  templateFooter.querySelectorAll('td')[1].textContent = nCantidad
  templateFooter.querySelector('span').textContent = nPrecio

  const clone = templateFooter.cloneNode(true)
  fragment.appendChild(clone)
  footerCarrito.appendChild(fragment)

  const btnComprar = document.getElementById('btn-comprar').style.display="block"

  const vaciarCarro = document.getElementById('vaciar-carrito').addEventListener('click', () => {
    carrito = {}
    mostrarEnCarrito()
    document.getElementById('btn-comprar').style.display="none"
    carritoEnCero = document.getElementById('contadorCarrito').innerHTML = 0
  })

  const comprarCarro = document.getElementById('btn-comprar').addEventListener('click', () => {
    carrito = {}
    mostrarEnCarrito()
    document.getElementById('btn-comprar').style.display="none"
    carritoEnCero = document.getElementById('contadorCarrito').innerHTML = 0
})
}


//Aumentar o disminuir con los botones del carrito//

const aumentarDisminuir = e => {

  //Aumentar//
  if (e.target.classList.contains('btn-info')) {

    const producto = carrito[e.target.dataset.id]
    producto.cantidad++
    carrito[e.target.dataset.id] = {...producto}
    mostrarEnCarrito()
  }


  //Disminuir//
  if (e.target.classList.contains('btn-danger')) {

    const producto = carrito[e.target.dataset.id]
    producto.cantidad--
    if (producto.cantidad === 0) {
      delete carrito[e.target.dataset.id]
      document.getElementById('btn-comprar').style.display="none"
      const carritoEnCero = document.getElementById('contadorCarrito').innerHTML = 0
    }
    mostrarEnCarrito()
  }

  e.stopPropagation()
}

