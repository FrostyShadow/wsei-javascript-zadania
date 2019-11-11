var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

var robot1 = new Robot("Randy"), robot2 = new Robot("Bob"), robot3 = new Robot("Dave");
robot1.sayHi(robot2.name);
robot2.sayHi(robot1.name);
robot3.sayHi(robot1.name);

robot1.changeName("Monty");
robot1.sayHi(robot3.name);