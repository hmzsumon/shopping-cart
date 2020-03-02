// Price
const priceOne = parseFloat(document.getElementById('price1').innerText);
const priceTwo = parseFloat(document.getElementById('price2').innerText);
const subtotalPrice = priceOne + priceTwo;
document.getElementById('subtotal').innerText = subtotalPrice;

//  tax
const defaultTax = parseFloat(((subtotalPrice * 2) / 100).toFixed(1));
document.getElementById('tax').innerText = defaultTax;

//  total
const defaultTotal = subtotalPrice + defaultTax;
document.getElementById('total').innerText = defaultTotal;

// Increasing Quantity & Number
document.getElementById('increaseQuantityP1').addEventListener('click', () => {
	increaseQntNumber('currentQuantityP1');
	updatePriceByQuantity('currentQuantityP1', 1219, 'price1');
	updateTaxAndTotal('subtotal', 'total', 'tax');
});
document.getElementById('increaseQuantityP2').addEventListener('click', () => {
	increaseQntNumber('currentQuantityP2');
	updatePriceByQuantity('currentQuantityP2', 59, 'price2');
	updateTaxAndTotal('subtotal', 'total', 'tax');
});

// Decreasing Quantity & Number
document.getElementById('decreaseQuantityP1').addEventListener('click', () => {
	decreaseQntNumber('currentQuantityP1');
	updatePriceByQuantity('currentQuantityP1', 1219, 'price1');
	updateTaxAndTotal('subtotal', 'total', 'tax');
});
document.getElementById('decreaseQuantityP2').addEventListener('click', () => {
	decreaseQntNumber('currentQuantityP2');
	updatePriceByQuantity('currentQuantityP2', 59, 'price2');
	updateTaxAndTotal('subtotal', 'total', 'tax');
});

document.getElementById('removeItemOne').addEventListener('click', () => {
	afterRemovingCartItem('cartItemOne', 'price1', 'subtotal', 'tax', 'total');

	document.getElementById('increaseQuantityP2').addEventListener('click', () => {
		updateSubtotalAfterRemove('price2', 'subtotal');
		updateTaxAndTotal('subtotal', 'total', 'tax');
	});

	document.getElementById('decreaseQuantityP2').addEventListener('click', () => {
		updateSubtotalAfterRemove('price2', 'subtotal');
		updateTaxAndTotal('subtotal', 'total', 'tax');
	});
});

document.getElementById('removeItemTwo').addEventListener('click', () => {
	afterRemovingCartItem('cartItemTwo', 'price2', 'subtotal', 'tax', 'total');

	document.getElementById('increaseQuantityP1').addEventListener('click', () => {
		updateSubtotalAfterRemove('price1', 'subtotal');
		updateTaxAndTotal('subtotal', 'total', 'tax');
	});

	document.getElementById('decreaseQuantityP1').addEventListener('click', () => {
		updateSubtotalAfterRemove('price1', 'subtotal');
		updateTaxAndTotal('subtotal', 'total', 'tax');
	});
});

// Function to increase number
function increaseQntNumber(id) {
	const currentQntNumber = parseFloat(document.getElementById(id).value);
	const updatedQntNumber = currentQntNumber + 1;
	document.getElementById(id).value = updatedQntNumber;
}

// Function to decrease number
function decreaseQntNumber(id) {
	const currentQntNumber = parseFloat(document.getElementById(id).value);
	if (currentQntNumber > 1) {
		const updatedQntNumber = currentQntNumber - 1;
		document.getElementById(id).value = updatedQntNumber;
	}
}

// Function to update price
function updatePriceByQuantity(currentQuantityInnerTextID, pricePerProduct, priceInnerTextID) {
	const currentQntNumber = document.getElementById(currentQuantityInnerTextID).value;
	const currentQntPrice = currentQntNumber * pricePerProduct;
	document.getElementById(priceInnerTextID).innerText = currentQntPrice;

	updateSubtotal('price1', 'price2', 'subtotal');
}

// Function to update  subtotal
function updateSubtotal(priceInnerTextID1, priceInnerTextID2, subtotalInnerText) {
	const currentPrice1 = document.getElementById(priceInnerTextID1).innerText;
	const currentPrice2 = document.getElementById(priceInnerTextID2).innerText;
	document.getElementById(subtotalInnerText).innerText = parseFloat(currentPrice1) + parseFloat(currentPrice2);
}

// After removing
function updateSubtotalAfterRemove(priceInnerTextID, subtotalInnerTextID) {
	const currentSubtotal = parseFloat(document.getElementById(priceInnerTextID).innerText);
	document.getElementById(subtotalInnerTextID).innerText = currentSubtotal;
}

// Function
function updateTaxAndTotal(subtotalInnerTextID, totalInnerTextID, taxinnerTextID) {
	const currentSubtotal = parseFloat(document.getElementById(subtotalInnerTextID).innerText);
	const tax = parseFloat((currentSubtotal * 2) / 100).toFixed(1);
	const total = parseFloat(currentSubtotal) + parseFloat(tax);
	document.getElementById(taxinnerTextID).innerText = tax;
	document.getElementById(totalInnerTextID).innerText = total;
}

// After removing cart item
function afterRemovingCartItem(cartItemID, priceInnertTextID, subtotalInnerTextID, taxInnerTextID, totalInnerTextID) {
	document.getElementById(cartItemID).style.display = 'none';
	const price1 = parseFloat(document.getElementById(priceInnertTextID).innerText);
	const currentSubtotal = parseFloat(document.getElementById(subtotalInnerTextID).innerText);
	const afterRemoveSubtotal = currentSubtotal - price1;
	document.getElementById(subtotalInnerTextID).innerText = afterRemoveSubtotal;
	const afterRemoveTax = parseFloat((afterRemoveSubtotal * 2) / 100);
	document.getElementById(taxInnerTextID).innerText = afterRemoveTax;
	document.getElementById(totalInnerTextID).innerText = afterRemoveSubtotal + afterRemoveTax;
}
