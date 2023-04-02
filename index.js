/** */
const minusButton = document.querySelectorAll('.minus');
const quantityField = document.querySelectorAll('.quantity');
const plusButton = document.querySelectorAll('.plus');

for (let i = 0; i < plusButton.length; i++) {
    plusButton[i].addEventListener('click', function() {
        let currentQuantity = parseInt(quantityField[i].innerHTML);     	 // Fungsi ini mengambil nilai dari quantityField[i].innerHTML yang telah dikonversi menjadi integer menggunakan parseInt()  dan disimpan pada variabel currentQuantity
        quantityField[i].innerHTML = currentQuantity + 1;               	 // Kemudian nilai currentQuantity ditambah 1 dan disimpan kembali pada quantityField[i].innerHTML
    });
}

for (let i = 0; i < minusButton.length; i++) {
    minusButton[i].addEventListener('click', function() {
        let currentQuantity = parseInt(quantityField[i].innerHTML);
        if (currentQuantity > 0) {
            quantityField[i].innerHTML = currentQuantity - 1;
      }
    });
}



/** */
const removeItem = document.getElementById('remove');
removeItem.addEventListener('click', function() {
    const item = this.parentElement.parentElement;
    item.remove();
});



/** */
const likeButton = document.getElementById('like-button');
likeButton.addEventListener('click', function() {
    if(likeButton.getAttribute('fill') === 'red') {
        likeButton.setAttribute('fill', 'white');
    } else {
        likeButton.setAttribute('fill', 'red')
    }
});



/** */
function addToCart() {
	const addToCartButtons = document.querySelectorAll('#adding-cart');

	addToCartButtons.forEach(function(button) {
		button.addEventListener('click', function() {

			const shoes = button.parentElement.parentElement;
			const shoesPhotos = shoes.querySelector('.shoes-photos').src;      // '.src' digunakan untuk mengambil nilai dari atribut tertentu pada elemen HTML yang dipilih.  // BISA JUGA MENGGUNAKAN getAttribute(), kita dapat mengambil nilai dari atribut tertentu pada suatu elemen HTML.
			const shoesName = shoes.querySelector('h3').textContent;
			const shoesPrice = shoes.querySelector('.price').textContent;

			const shoesIntoCart = document.createElement('div');
			shoesIntoCart.classList.add('shoes-cart');
			shoesIntoCart.innerHTML = `
				<img class="shoes-photos" src="${shoesPhotos}" alt="">
				<h3>${shoesName}</h3>
				<h2 class="price">${shoesPrice}</h2>
				<div class="result">
				<button id="remove">remove</button>
				<svg id="like-button" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Heart_01"> <path id="Vector" d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
					<div class="cart-total">
						<button class="minus">-</button>
						<span class="quantity">1</span>
						<button class="plus">+</button>
					</div>
				</div>
			`;
		
			// Append the new "shoes-cart" div to the "CART" section
			const cartOrder = document.querySelector('#cart');
			cartOrder.parentElement.insertBefore(shoesIntoCart, cartOrder.nextSibling);
		});
	});
}

addToCart();