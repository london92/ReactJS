import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.result = ""
    }
    plus(){
        this.result = +document.getElementsByTagName("input")[0].value + +document.getElementsByTagName("input")[1].value
    }
    minus(){
        this.result = +document.getElementsByTagName("input")[0].value - +document.getElementsByTagName("input")[1].value
    }
    multiply(){
        this.result = +document.getElementsByTagName("input")[0].value * +document.getElementsByTagName("input")[1].value
    }
    divide(){
        if(document.getElementsByTagName("input")[1].value == 0){
            alert("error")
            return
        }
        this.result = +document.getElementsByTagName("input")[0].value / +document.getElementsByTagName("input")[1].value
    }
    getResult(){
        return this.result
    }


	// обработчик actions 
    handleActions(action) {
		
        switch (action.type) {
            case "PLUS": {
                this.emit('add')
				break; 
            }
            case "MINUS": {
                this.emit('minus')
                break;
            }
            case "MULTIPLY": {
                this.emit('multiply')
                break;
            }
            case "DIVIDE": {
                this.emit('divide')
                break;
            }
        }
    } 
} 

const appStore = new AppStore; 
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this  
dispatcher.register(appStore.handleActions.bind(appStore)); 

export default appStore; 