var Thermostat = function(){

  	this.temperature = 20;
  	this.savemode = true;
  	this.colour = "yellow";
  };




Thermostat.prototype.increase = function(number) {
  this.temperature ++
  // if(this.temperature > 25){this.colour = "red"};
};
Thermostat.prototype.decrease = function(number) {
  this.temperature --
  // if(this.temperature < 18){this.colour = "green"};
};

Thermostat.prototype.minimum = function(number) {
  return (number === 10);
};

Thermostat.prototype.maximum = function(number) {
  return (number === 32);
};

// // Thermostat.prototype.display_colour = function() {

// //  if (this.temperature < 18){this.colour = "green"};
// // // //  if (this.temperature > 18 && <25){this.colour = "yellow"};
// // // //  if (this.temperature > 25){this.colour = "red"};
// // // // };



// // // Thermostat.prototype.savemode = function(number) {
// // // 	if (this.savemode) {
// // // 	}
	
// };