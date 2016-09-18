import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super()
        this.count = false
        this.seconds = 0
        this.add = this.add.bind(this)
    }
    getSeconds(){
        return this.seconds
    }
    add(){
        this.seconds += 1
    }
    startTimer(){
        this.count = true
        this.timer = setInterval(this.add, 1000)
    }

    startChange(){
        if(this.count) return
        this.startTimer()
    }
    stopChange(){
        clearInterval(this.timer)
        this.count = false
    }
    resetChange(){
        clearInterval(this.timer)
        this.count = false
        this.seconds = 0;
    }

	// обработчик actions 
    handleActions(action) {
		
        switch (action.type) {
            case "START": { 
                this.emit('secondsChange')
				break; 
            }
            case "STOP": {
                this.emit('stopChange')
                break;
            }
            case "RESET": {
                this.emit('resetChange')
                break;
            }
        }
    } 
} 

const appStore = new AppStore; 
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this  
dispatcher.register(appStore.handleActions.bind(appStore)); 

export default appStore; 