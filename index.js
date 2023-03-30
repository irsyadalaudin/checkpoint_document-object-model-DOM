const minusButton = document.querySelectorAll('.minus');
const quantityField = document.querySelectorAll('.quantity');
const plusButton = document.querySelectorAll('.plus');

for (let i = 0; i < plusButton.length; i++) {
    plusButton[i].addEventListener('click', function() {
        let currentQuantity = parseInt(quantityField[i].innerHTML);     // Fungsi ini mengambil nilai dari quantityField[i].innerHTML yang telah dikonversi menjadi integer menggunakan parseInt()  dan disimpan pada variabel currentQuantity
        quantityField[i].innerHTML = currentQuantity + 1;               // Kemudian nilai currentQuantity ditambah 1 dan disimpan kembali pada quantityField[i].innerHTML
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
// const removeItem = document.getElementById('svg-remove');
// const item = removeItem.parentElement.parentElement;

// removeItem.addEventListener('click', function() {
//     item.remove();
// });

const removeItem = document.getElementById('svg-remove');
removeItem.addEventListener('click', function() {
    const item = this.parentElement.parentElement;
    item.remove();
});