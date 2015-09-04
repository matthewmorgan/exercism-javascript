//var Robot = require('./robot_name');
//
//describe("Robot", function() {
//  it("has a name", function() {
//    var robot = new Robot();
//    console.log(robot.name);
//    expect(robot.name).toMatch(/^[A-Z]{2}\d{3}$/);
//  });
//
//  it("name is the same each time", function() {
//    var robot = new Robot();
//    expect(robot.name).toEqual(robot.name);
//  });
//
//  it("different robots have different names", function() {
//    var robotOne = new Robot();
//    var robotTwo = new Robot();
//    expect(robotOne.name).not.toEqual(robotTwo.name);
//
//  });
//
//  it("different robots increment nameCount", function() {
//    var robotOne = new Robot();
//    var robotTwo = new Robot();
//    console.log(robotOne.nameCount, robotTwo.nameCount);
//    expect(robotOne.nameCount).toEqual(robotTwo.nameCount);
//    expect(robotOne.used).toEqual(robotTwo.used);
//  });
//
//  it("is able to reset the name", function() {
//    var robot = new Robot();
//    var originalName = robot.name;
//    robot.reset();
//    var newName = robot.name;
//    expect(originalName).not.toEqual(newName);
//  });
//
//  it("names are not repeated even with very large production of robots", function(){
//    var usedNames={};
//    var robot=new Robot();
//    usedNames[robot.name]=true;
//    var nameCount=1;
//    for (var ii=0;ii<676000;ii++){
//      robot.reset();
//      expect(usedNames[robot.name]).toEqual(undefined);
//      usedNames[robot.name]=true;
//      console.log(nameCount++);
//    }
//  })
//});
