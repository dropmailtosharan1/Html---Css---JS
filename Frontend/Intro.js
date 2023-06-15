var coursesArray = ["Angular", "React", "Vue", "JavaScript", "Python"];
// 
var instructor = 'Kamal';
class Course {
    constructor (courseName, instructor){
        this.courseName=courseName;
        this.instructor=instructor;
    }
    about(){
        return this.courseName + " is being taught by " + this.instructor;
    }
}
// 
function choiceMade(choice, courseChosen){
    document.getElementById('courseName').value=choice;
    var currentCourse = new Course(courseChosen, instructor);
    document.getElementById('courseInfo').innerHTML=currentCourse.about();
}
// 
function validate(){
    if((feedback.like[0].checked == false) && (feedback.like[1].checked == false)){
alert('You must check Yes or No');
    }
}
// 
var dateToday=new Date();
function showDate(){
    var showDate=document.getElementById('dateToday');

    showDate.innerHTML+=dateToday.toLocaleDateString('en-IN', {weekday:'long', year:'numeric', month:'long', day:'numeric'});
    // showDate.innerHTML+=dateToday.toISOString().slice(0,10);
    // showDate.innerHTML+=dateToday.toISOString().split('T')[0];
}
// 
function calculateThis(){
    // result=Math.round(8.6);
    // result=Math.sqrt(81);
    // result=Math.abs(-81);
    // result=Math.ceil(8.2);
    // result=Math.floor(8.9);
    // result=Math.trunc(8.5289);
    // result=Math.min(8,9,5);
    // result=Math.max(8,9,5);
    result=Math.random();

    document.getElementById('result').innerHTML=result;
}
