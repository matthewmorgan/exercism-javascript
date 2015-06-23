var STUDENTS = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];
var PLANTS = {'G':'grass','C':'clover','R':'radishes','V':'violets'};

var fetchStudentPlants = function(student, students, row1, row2){
	var offset=students.indexOf(student)*2;
	var plantCode=row1.slice(offset,offset+2)+row2.slice(offset, offset+2);
	return plantCode.split('').map(function(code){
		return PLANTS[code];
	});
};

function KindergartenGarden(diagram, students){
	this.students = students ? students.sort() : STUDENTS;
	this.row1=diagram.split('\n')[0];
	this.row2=diagram.split('\n')[1];
	this.students.forEach(function(student){
		this[student.toLowerCase()] = fetchStudentPlants(student, this.students, this.row1, this.row2);
	}.bind(this));
};

module.exports = KindergartenGarden;

