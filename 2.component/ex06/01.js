import fs from 'fs';

const state = {
        order: JSON.parse(fs.readFileSync('./json.data.json','utf-8'))
}

updateOrderProducts = state.order.products;
updateOrderProducts.push({
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1

});


console.log(state.order.products, updateOrderProducts, state.order.products === updateOrderProducts);

console.log("==============");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json','utf-8'))

}

console.log(updateOrderProducts = state.order.products);




