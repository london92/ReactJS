import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'
import {list} from "../pages/list.js"

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.list = list
    }
    add(){
       this.list = [...this.list, document.getElementsByTagName("input")[0].value]
    }
    delete(){
        this.list.splice(document.getElementsByTagName("input")[1].value - 1,1)
    }
    
    getList(){

        return this.list
    }


	// обработчик actions 
    handleActions(action) {
		
        switch (action.type) {
            case "ADD": {
                this.emit('add')
				break; 
            }
            case "DELETE": {
                this.emit('delete')
                break;
            }
        }
    } 
} 

const appStore = new AppStore; 
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this  
dispatcher.register(appStore.handleActions.bind(appStore)); 

export default appStore; 