var app = new Vue({
  el: '#app',
  data: {
  	users: [
  		{option: "Texte ", glyphicon:"glyphicon glyphicon-font"},
  		{option: "Dessiner", glyphicon: "glyphicon glyphicon-pencil"},
  		{option: "Charger une image", glyphicon: "glyphicon glyphicon-picture"}
  	]
  },
  methods: {/*
  	remove(el){
  		for( var i = 0; i < this.users.length; i++) { 
		   	if ( this.users[i] === el) {
		    	this.users.splice(i, 1); 
		     	i--;
		   	}
		}
  	}*/
  }
})