function loginvalid() {
    var uname = f1.username.value;
    var pwd = f1.password.value;
    var login_id = f1.login_id.value;
    if (uname != "klemca") {
        alert("Invalid Username");
        return false;
    } else if (pwd != "kle123") {
        alert("In valid Password");
        return false;
    } else {
        switch (login_id) {
            case "faculty":
                window.location = "faculty_home.html";
                break;
            case "coordinator":
                window.location = "coordinator_home.html";
                break;
            default:
                window.location = "student_home.html";
        }
    }
}

var rn;
var questions = new Array(5);
var answers = new Array(5);
questions[0] = "What is addition of 2 and 3?";
questions[1] = "What is multiplication of 2 and 3?";
questions[2] = "Which is even number 1, 3, 4, 5?";
questions[3] = "What come next a, e, i, o, ?";
questions[4] = "How many letters are in English aplphabate?";
questions[5] = "Which is max number 5 or 10?";
questions[6] = "Which number come next 2, 4, 6, 8, ?";
questions[7] = "What is the reverse number of 4321?";
questions[8] = "which is smallest number 10, 2, -20, -40?";
questions[9] = "How many letters are in the word 'INDIA' ?";
questions[10] = "which is positive numner 0 or -1?";


answers[0] = "5";
answers[1] = "6";
answers[2] = "4";
answers[3] = "u";
answers[4] = "26";
answers[5] = "10";
answers[6] = "10";
answers[7] = "1234";
answers[8] = "-40";
answers[9] = "5";
answers[10] = "0";

function randomNums() {
    rn = Math.floor(Math.random() * 10) + 1;
    document.getElementById("qn").innerHTML = questions[rn];
}

function qnans() {
    var ans = document.getElementById("ip").value;
    if (answers[rn] == ans) {
        alert("Registered successfully");
        window.open("home_login.html", "_self");
    } else {
        alert("your ans is wrong")
    }
}

function unamevalid() {
    var name = f1.uname.value;
    var check = /^[a-zA-Z]{3,}$/;
    if (check.test(name)) {

    } else {
        alert("Invalid Name Minimum 3 letters are required");
        f1.uname.focus();
    }
}

function pwdvalid() {
    var pwd = f1.pwd.value;
    if (pwd.length >= 6) {

    } else {
        alert("password should contain at least 6 characters");
        f1.pwd.focus();
    }
}

function pwdvalid2() {
    var pwd = f1.pwd.value;
    var pwd2 = f1.pwd2.value;
    if (pwd == pwd2) {

    } else {
        alert("ivalid password match");
        f1.pwd2.focus();
    }
}

function ValidateEmail() {
    var email1 = f1.email.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email1)) {

    } else {
        alert("You have entered an invalid email address!")
        f1.email.focus();
    }
}

function dobvalid() {
    var dob1 = f1.dob.value;
    if (dob1.length >= 10) {

    } else {
        alert("please enter the DOB");
        f1.dob.focus();
    }
}

function mobvalid() {
    var inputtxt = f1.mob.value;
    var check = /^\d{10}$/
    if (check.test(inputtxt)) {

    } else {
        alert("Not a valid Phone Number");
        f1.mob.focus();
    }
}