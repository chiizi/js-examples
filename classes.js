"use strict";
var _Thing = type => class {
  constructor(name) {
    this.name = name;
  }
  get type() {
    return type;
  }
  set type(nope) {
    return type;
  }
}
var _LogName = Base => class extends Base {
  logName() {
    console.log("NAME: " + this.name);
  }
}
var Cheese = _Thing("cheese");
var CheeseWLogName = _LogName(Cheese);

var muenster = new CheeseWLogName("muenster");

muenster.logName();
