const form = document.getElementById('form');
// const username = document.getElementById('username');
const email = document.getElementById('email');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const pnumber = document.getElementById('pnumber');
const college = document.getElementById('college');

// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

//Show input error messages

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        showError(input,'Email is not invalid');
    }
}

//checkRequired fields
// function checkRequired(inputArr) {
//     inputArr.forEach(function(input){
//         if(input.value.trim() === ''){
//             showError(input,`${getFieldName(input)} is required`)
//         }else {
//             showSucces(input);
//         }
//     });
// }

//check input Length
// function checkLength(input, min ,max) {
//     if(input.value.length < min) {
//         showError(input, `${getFieldName(input)} must be at least ${min} characters`);
//     }else if(input.value.length > max) {
//         showError(input, `${getFieldName(input)} must be les than ${max} characters`);
//     }else {
//         showSucces(input);
//     }
// }

//get FieldName
// function getFieldName(input) {
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// check passwords match
// function checkPasswordMatch(input1, input2) {
//     if(input1.value !== input2.value) {
//         showError(input2, 'Passwords do not match');
//     }
// }
function writeExcel(email, fname, lname, pnumber, college){
    const formData = new FormData(form);

        // Create a new workbook
        const wb = XLSX.utils.book_new();
        const wsData = [
            ["First Name", "Last Name", "Email", "College", "Phone Number"],
            [fname.value, lname.value, email.value, college.value, pnumber.value]
        ];

        // Create a worksheet and add the data
        const ws = XLSX.utils.aoa_to_sheet(wsData);

        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(wb, ws, "Form Data");

        // Save the workbook as an XLSX file
        XLSX.writeFile(wb, "form_data.xlsx");
}

//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();
    checkEmail(email);
    writeExcel(email, fname, lname, pnumber, college);
    // checkRequired([username, email, password, password2]);
    // checkLength(username,3,15);
    // checkLength(password,6,25);
    
    // checkPasswordMatch(password, password2);
    
}); 