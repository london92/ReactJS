import dispatcher from '../dispatcher' 

function start() {
    dispatcher.dispatch({
        type: 'START'
    })
}
function stop() {
    dispatcher.dispatch({
        type: 'STOP'
    })
}
function reset() {
    dispatcher.dispatch({
        type: 'RESET'
    })
}
export {start, stop, reset}