$(function observer () {
	var Event = function(event_name){
		this.name = event_name;
		this.target = null;
		this.ADD_OBJECT = 'add_object';
	}
	Event.prototype = {
		getTarget(){
			
		}
	}
	var EventDispatcher = function(){
		this.target = this;
		this.listeners = [];
	}
	EventDispatcher.prototype = {
		addEventListener: function(event_name, listener){
			
			this.listeners.push({e_name: event_name, listener:listener});
		},
		removeEventListener: function(event_name, listener){
			for(var i=0; i<this.listeners.length;i++){
				if(this.listeners[i].e_name == event_name)
					this.listeners.splice(i);
			}
		},
		dispatchEvent: function(event){
			event.target = this;
			for(var i=0; i<this.listeners.length;i++){
				if(this.listeners[i].e_name == event.name){
					this.listeners[i].listener(event);
				}
			}
		}
	}
	
	var Object = function(){
		
	}
	Object.prototype = new EventDispatcher();
	
	var textArea = new Object();
	textArea.addText = function(text){
//		console.log("text is added: " + text);
		this.dispatchEvent(new Event(Event.ADD_OBJECT))
	}
	
	textArea.addEventListener(Event.ADD_OBJECT, function(e){
		console.log(e.target);
	});
	
	textArea.addText("123123");

});