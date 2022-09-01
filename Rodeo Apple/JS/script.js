

if (document.getElementById('hearderSlide')) {
	$('#hearderSlide').multislider();
	$('#hearderSlide').multislider('pause');
}


function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

const sweetAlert = document.querySelector ('.sweetAlert')

sweetAlert.onclick = (e) => {
	swal({
		title: "Muchas gracias por tu compra!",
		text: "Gracias por confiar en nosotros",
		icon: "success",
		button: "Aceptar",
	  });
}


const productcontainer = document.getElementById('product-container')

stockProductos.forEach((product) => {
	const div = document.createElement('div')
	div.classList.add('Product')
	div.innerHTML = `
	<img src${product.img} alt="">
	<h4>${product.productName}</h4>
	<h5>${product.priceValue}</h5>
	<button id="add${product.id}" class="add-button">Agregar al carrito <i class="fas fa-cart-plus"></button>
	`
	contenedorProductos.appendChild(div)
});
