let priceList = { pineapple: 10, orange: 10, vanilla: 10, chocolate: 10, hotfudge: 5, custardcream: 5, milkcaramel: 5, strawberryjam: 5, mnms: 5, frostedcoffee: 2, toastednuts: 10, oreos: 7 }

let totalPrice = 0
// let totalPriceSpan = document.getElementById('totalPrice')
document.getElementById('hotfudge').onclick = toggleIngredient
document.getElementById('oreos').onclick = toggleIngredient
document.getElementById('toastednuts').onclick = toggleIngredient
document.getElementById('frostedcoffee').onclick = toggleIngredient
document.getElementById('pineapple').onclick = toggleIngredient
document.getElementById('orange').onclick = toggleIngredient
document.getElementById('vanilla').onclick = toggleIngredient
document.getElementById('chocolate').onclick = toggleIngredient
document.getElementById('custardcream').onclick = toggleIngredient
document.getElementById('milkcaramel').onclick = toggleIngredient
document.getElementById('strawberryjam').onclick = toggleIngredient
document.getElementById('mnms').onclick = toggleIngredient


function changePrice(pricing) {
    totalPrice = totalPrice + pricing
    document.querySelector('#totalPrice').innerText = `$${totalPrice}`;
}

function toggleIngredient(variable) {
    if (variable.srcElement.checked === true) {
        changePrice(priceList[variable.srcElement.id])
    } else {
        changePrice(-priceList[variable.srcElement.id])
    }
}

// function toggleIngredient(variable) {
//     switch (variable.srcElement.id) {
//         case 'oreos':
//             if (variable.srcElement.checked === true) {
//                 changePrice(priceList.oreos)
//             } else {
//                 changePrice(-priceList.oreos)
//             }
//             break;
//         case 'toastednuts':
//             if (variable.srcElement.checked === true) {
//                 changePrice(10)
//             } else {
//                 changePrice(-10)
//             }
//             break;
//         case 'frostedcoffee':
//             if (variable.srcElement.checked === true) {
//                 changePrice(2)
//             } else {
//                 changePrice(-2)
//             }
//             break;
//         case 'hotfudge':
//             if (variable.srcElement.checked === true) {
//                 changePrice(5)
//             } else {
//                 changePrice(-5)
//             }
//             break;
//     }

// }






