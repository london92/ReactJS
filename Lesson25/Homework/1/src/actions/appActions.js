import dispatcher from '../dispatcher' 

function add() {
    dispatcher.dispatch({
        type: 'ADD'
    })
}
function deleteItem() {
    dispatcher.dispatch({
        type: 'DELETE'
    })
}
export {add,deleteItem}