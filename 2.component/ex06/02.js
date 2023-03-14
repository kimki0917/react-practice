import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('/json/data.json','utf-8'))
}

let updateOrder1 = state.order;
updateOrder1.receive = 'adf';

console.log(state.order, updateOrder1, state.order === updateOrder1);

state ={
    order: JSON.parse(fs.readFileSync('.json/data.json','utf-8'))
}

const updateOrder2 = Object.assign({}, state.order, {
    receive: '부산시 해운대구 우동...'
});
console.log(state.order, updateOrder1, state.order === updateOrder1);
