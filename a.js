document.getElementById('studentForm').addEventListener('submit', function(event) {
    
    event.preventDefault();


    const rollNumber = event.target.rollNumber.value.trim();
    const name = event.target.name.value.trim();
    const department = event.target.department.value;
    const dob = event.target.dob.value;
    const mobileNumber = event.target.mobileNumber.value.trim();
    const email = event.target.email.value.trim();

  
    if (!rollNumber || !name || !department || !dob || !mobileNumber || !email) {
        alert("Please fill out all fields.");
        return;
    }


    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

  
    const studentData = {
        rollNumber,
        name,
        department,
        dob,
        mobileNumber,
        email
    };

    console.log("Submitted Student Data:", studentData);
    alert("Student details submitted successfully!");
});
