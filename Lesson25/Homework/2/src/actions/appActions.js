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
function searchItems() {
    dispatcher.dispatch({
        type: 'SEARCH'
    })
}
export {add,deleteItem,searchItems}