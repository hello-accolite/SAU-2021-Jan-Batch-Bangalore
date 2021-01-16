class Student {

    constructor(fn, ln, roll, mob, email) {
        this.firstName = fn;
        this.lastName = ln;
        this.rollno = roll;
        this.mob = mob;
        this.email = email;

    }

}

var studentObj = new Student();


function validateForm() {

    var valid = true;
    var form = document.forms["Student_Details"]
    var firstName = form["First_Name"]
    var lastName = form["Last_Name"]
    var rollNumber = form["rollNumber"]
    var mobileNumber = form["MobileNumber"]
    var email = form["email"]
    var gender = form["gender"]
    var stream = form["stream"]
    var choice = form["choice"]


    if (valid == true) {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var mobileNumber = document.getElementById("mobileNumber").value;
        var email = document.getElementById("emailid").value;
        var rollNumber = document.getElementById("rollNumber").value;

        var temp = new Student(firstName, lastName, rollNumber, mobileNumber, email);
        studentObj = temp;


        document.getElementById("lengthFN").innerHTML = firstName;
        document.getElementById("lengthLN").innerHTML = lastName;
        document.getElementById("lengthMob").innerHTML = mobileNumber;
        document.getElementById("lengthEmail").innerHTML = email;
        document.getElementById("lengthNum").innerHTML = rollNumber;


        (() => {
            console.log(`The roll number is: ${rollNumber}`);
            console.log(`The fullname of student is: ${firstName}${lastName}`);
            console.log(`The mobile number is: ${mobileNumber}`);

        })();

        var occupation = (() => {
            var occu = prompt("Please enter your occupation", "Student");
            if (occu != null) {
                document.getElementById("occ").innerHTML = " My Occupation is" + occu;
            }
        });
    }
}

function showDetails() {

    if (studentObj.rollno != rollNo.value || rollNo.value == "") {
        alert("Error: Either Rollno is blank or enter correct Rollno !!!");
        console.log(rollNo.value);
        console.log(studentObj.rollno);
    } else {
        det = "Details:";
        for (var x in studentObj) {
            det += "\n" + studentObj[x];
        }
        alert(det);
    }
}