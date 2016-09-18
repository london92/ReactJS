import dispatcher from '../dispatcher' 

export function style() {
    dispatcher.dispatch({
        type: 'STYLE'
    })
}