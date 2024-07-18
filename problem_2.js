// Calculate Cutoff for Given Marks
// Check Whether he/she is eligible to apply the course

/* Input */

const studentMarks = {
    "maths": 100,
    "physics": 100,
    "chemistry": 100,
    "biology": 100
};
/* Input */


/* Logic Implementation Function */
let cutoff = 0


function calculateCutoff(marksJson) {
    
    /* Write your logic here --- Start */
 console.log(marksJson.maths);
 console.log(marksJson.physics);
 console.log(marksJson.chemistry);
 console.log(marksJson.biology);
 let totalmarks=marksJson.maths+marksJson.physics+marksJson.chemistry+marksJson.biology;
     cutoff=totalmarks/4;
    /* Write your logic here --- End */
    console.log('The cutoff is:'+ cutoff);
}

/* Logic Implementation Function */


/* Logic Implementation Function */
const eligibilityCutOff = 75
function checkEligibility(marks){
    /* Write your logic here --- Start */
        if(marks>=eligibilityCutOff){
            console.log("You are eligible");
        }
            else{
                console.log("You are Not Eligible");
            }
        
    
    // this function should return message like "You are Eligible" or "You are not Eligible"

    /* Write your logic here --- End */
}
/* Logic Implementation Function */


/* Function Call */
calculateCutoff(studentMarks);
checkEligibility(cutoff);
/* Function Call */

/* Expected Output */

// The cutoff is: 77.80
// You are Eligible

/* Expected Output */