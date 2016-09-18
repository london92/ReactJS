import dispatcher from '../dispatcher' 

function plus() {
    dispatcher.dispatch({
        type: 'PLUS'
    })
}
function minus() {
    dispatcher.dispatch({
        type: 'MINUS'
    })
}
function multiply() {
    dispatcher.dispatch({
        type: 'MULTIPLY'
    })
}
function divide() {
    dispatcher.dispatch({
        type: 'DIVIDE'
    })
}
export {plus, minus, multiply, divide}