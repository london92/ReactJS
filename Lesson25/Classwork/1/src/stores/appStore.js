import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super()
    } 


    styleClicks() {

       this.style = "red";
        return this.style
    } 

	// обработчик actions 
    handleActions(action) {
		
        switch (action.type) {
            case "STYLE": { 
                this.emit('styleChange')
				break; 
            }
        }
    } 
} 

const appStore = new AppStore; 
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this  
dispatcher.register(appStore.handleActions.bind(appStore)); 

export default appStore; 