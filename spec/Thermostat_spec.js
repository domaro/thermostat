describe('thermostat', function(){

  var thermostat;

  beforeEach(function(){
  	thermostat = new Thermostat();
  });

  describe ('thermostat has a temperature range', function(){
    it ('starts at 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe ('increase temperature with up button', function(){
  	it ('it increases by 1 degree', function(){
  		thermostat.increase();
  	  expect(thermostat.temperature).toBe(21);
  	});
  });

  describe ('decrease temperature with down button', function(){
  	it ('decreases by 1 degree', function(){
  	  thermostat.decrease();
  	  expect(thermostat.temperature).toEqual(19);
  	});
  });

  describe('minimum temperature', function(){
  	it('has a minimum temperature', function(){
  	  expect(thermostat.minimum(10)).toBe(true);
  	});
  });
  describe('has a maximum temperature if psm is off', function(){
  	it('has a maximum temperature of 32 degrees', function(){
  	  expect(thermostat.maximum(32)).toBe(true);
  	});
  });

  describe('if power save mode is on', function(){
    it('temperature should be between 10 and 25', function(){
      expect(thermostat.savemode).toBe(true);
  	});
  });

  // describe('if the temperature is less than 18 display green color', function(){
  // 	it(' temperature lower than 18', function(){
  // 	  thermostat.temperature = 17;
  // 	  expect(thermostat.display_colour).toBe("green");
  // 	});
  // });
  // describe('if the temperature is greater than 25 display red color', function(){
  // 	it('temperature greater than 25', function(){
  //   thermostat.temperature = 27;
  // 	expect(thermostat.display_colour).toBe("red");
  // 	});
  // });
});
