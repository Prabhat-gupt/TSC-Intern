
var forminfodata = [];

//  Function for Validation for Email and Password
function validationEP(e){
    // e.preventDefault();
    var email = document.getElementById("emailid").value;
    var password = document.getElementById("paswd").value;
    if(email.length===0 || password.length===0){
        if(email.length===0){
            document.getElementById("emailspan").innerHTML = "Enter your Email-ID";
            document.getElementById("emailspan").style.color = "red";
            document.getElementById("emailspan").style.fontSize = "11px";
            return false;
        }
        if(email.length!=0){
            document.getElementById("emailspan").innerHTML = "Credentials are correct";
            document.getElementById("emailspan").style.color = "green";
            document.getElementById("emailspan").style.fontSize = "11px";
        }
        if(password.length===0){
            document.getElementById("paswdspan").innerHTML = "Enter your password";
            document.getElementById("paswdspan").style.color = "red";
            document.getElementById("paswdspan").style.fontSize = "11px";
            return false;
        }
    }
    else if(email.length!=0 && password.length!=0){
        document.getElementById("emailspan").innerHTML = "Credentials are correct";
        document.getElementById("emailspan").style.color = "green";
        document.getElementById("emailspan").style.fontSize = "11px"

        document.getElementById("paswdspan").innerHTML = "Credentials are correct";
        document.getElementById("paswdspan").style.color = "green";
        document.getElementById("paswdspan").style.fontSize = "11px";
        return true;
    }
}


// Function for validation for UserInformation page1
function validationUI1(){
    var username = document.getElementById("user").value;
    var firstname = document.getElementById("first").value;
    var lastname = document.getElementById("last").value;

    if(username.length===0 ||firstname.length===0 || lastname.length===0){
        if(username.length===0){
            document.getElementById("userspan").innerHTML = "Enter your username";
            document.getElementById("userspan").style.color = "red";
            document.getElementById("userspan").style.fontSize = "11px";
            return false;
        }
        if(username.length!=0){
            document.getElementById("userspan").innerHTML = "Credentials are correct";
            document.getElementById("userspan").style.color = "green";
            document.getElementById("userspan").style.fontSize = "11px";
        }
        if(firstname.length===0 || lastname.length===0){
            if(firstname.length===0){
                document.getElementById("firstspan").innerHTML = "Enter your firstname";
                document.getElementById("firstspan").style.color = "red";
                document.getElementById("firstspan").style.fontSize = "11px";
                return false;
            } 
            if(firstname.length!=0){
                document.getElementById("firstspan").innerHTML = "Credentials are correct";
                document.getElementById("firstspan").style.color = "green";
                document.getElementById("firstspan").style.fontSize = "11px";
            }
            if(lastname.length===0){
                document.getElementById("lastspan").innerHTML = "Enter your lastname";
                document.getElementById("lastspan").style.color = "red";
                document.getElementById("lastspan").style.fontSize = "11px";
                return false;
            }
            if(lastname.length!=0){
                document.getElementById("lastspan").innerHTML = "Credentials are correct";
                document.getElementById("lastspan").style.color = "green";
                document.getElementById("lastspan").style.fontSize = "11px";
                return true;
            }
        }
    }
    if(username.length!=0 && firstname.length!=0 ){
        document.getElementById("userspan").innerHTML = "Credentials are correct";
        document.getElementById("userspan").style.color = "green";
        document.getElementById("userspan").style.fontSize = "11px";

        document.getElementById("firstspan").innerHTML = "Credentials are correct";
        document.getElementById("firstspan").style.color = "green";
        document.getElementById("firstspan").style.fontSize = "11px";

        document.getElementById("lastspan").innerHTML = "Credentials are correct";
        document.getElementById("lastspan").style.color = "green";
        document.getElementById("lastspan").style.fontSize = "11px";
        return true;
    }
}


// Function for Validation for UserInformation page2
function validationUI2(){
    var company = document.getElementById("company").value;
    var experience = document.getElementById("experience").value;
    var designation = document.getElementById("designation").value;

    if(company.length===0 || experience.length===0 || designation.length===0){
        if(company.length===0){
            document.getElementById("companyspan").innerHTML = "Enter your company";
            document.getElementById("companyspan").style.color = "red";
            document.getElementById("companyspan").style.fontSize = "11px";
            return false;
        }
        if(company.length!=0){
            document.getElementById("companyspan").innerHTML = "Credentials are correct";
            document.getElementById("companyspan").style.color = "green";
            document.getElementById("companyspan").style.fontSize = "11px";
        }
        if(experience.length===0 || designation.length===0){
            if(experience.length===0){
                document.getElementById("experiencespan").innerHTML = "Enter your experience";
                document.getElementById("experiencespan").style.color = "red";
                document.getElementById("experiencespan").style.fontSize = "11px";
                return false;
            }
            if(experience.length!=0){
                document.getElementById("experiencespan").innerHTML = "Credentials are correct";
                document.getElementById("experiencespan").style.color = "green";
                document.getElementById("experiencespan").style.fontSize = "11px";
            }
            if(designation.length===0){
                document.getElementById("designationspan").innerHTML = "Enter your experience";
                document.getElementById("designationspan").style.color = "red";
                document.getElementById("designationspan").style.fontSize = "11px";
                return false;
            }
            if(designation.length!=0){
                document.getElementById("designationspan").innerHTML = "Credentials are correct";
                document.getElementById("designationspan").style.color = "green";
                document.getElementById("designationspan").style.fontSize = "11px";
            }
        }
    }
    if(company.length!=0 && experience.length!=0 && designation.length!=0){
        document.getElementById("companyspan").innerHTML = "Credentials are correct";
        document.getElementById("companyspan").style.color = "green";
        document.getElementById("companyspan").style.fontSize = "11px";

        document.getElementById("experiencespan").innerHTML = "Credentials are correct";
        document.getElementById("experiencespan").style.color = "green";
        document.getElementById("experiencespan").style.fontSize = "11px";

        document.getElementById("designationspan").innerHTML = "Credentials are correct";
        document.getElementById("designationspan").style.color = "green";
        document.getElementById("designationspan").style.fontSize = "11px";
        return true;
    }
}


function hides(){
    // debugger
    if(validationEP()){
        var s = document.getElementById("signup");
        s.style.display = "none";
        var p1 = document.getElementById("personal1");
        p1.style.display = "block";


        const sform = document.getElementById("emailpassword");
        sform.addEventListener('submit',emailpassword);
        function emailpassword(event){
            event.preventDefault();
            const formdata = new FormData(event.target);
            const formdataobj1 = {};
            formdata.forEach((value,key) => (formdataobj1[key] = value));
            forminfodata.push(formdataobj1);
            // var str = JSON.stringify(formdataobj1);
            // document.write(str);
        }
    }
}

function hidep1(){
    if(validationUI1()){
        var p1 = document.getElementById("personal1");
        p1.style.display = "none";
        var p2 = document.getElementById("personal2");
        p2.style.display = "block";

        const sform = document.getElementById("userfulllastdata");
        sform.addEventListener('submit',userfullast);
        function userfullast(event){
            event.preventDefault();
            const formdata = new FormData(event.target);
            const formdataobj2 = {};
            formdata.forEach((value,key) => (formdataobj2[key] = value));
            forminfodata.push(formdataobj2);
            
            // var str = JSON.stringify(formdataobj2);
            // document.write(str);
        }       
    }
}

function shows(){
    var si = document.getElementById("signup");
    si.style.display = "block"; 
    var p1 = document.getElementById("personal1");
    p1.style.display = "none";  
}

function showp1(){
    var p2 = document.getElementById("personal2");
    p2.style.display = "none";
    var p1 = document.getElementById("personal1");
    p1.style.display = "block";
}

function submitpage(){
    if(validationUI2()){
        debugger
        // var p2 = document.getElementById("personal2");
        // p2.style.display = "none";
        // var showinfo = document.getElementById("showinfo");
        // showinfo.style.display = "block";

        
        const comexdeform = document.getElementById("compexperdesig");
        comexdeform.addEventListener('submit',comexpedesig);
        function comexpedesig(event){
            event.preventDefault();
            const formdata = new FormData(event.target);
            const formdataobj3 = {};
            formdata.forEach((value,key) => (formdataobj3[key] = value));
            forminfodata.push(formdataobj3);
            // var str = JSON.stringify(formdataobj3);
            // document.write(str);
        }

        const forminformationdata = forminfodata.map(formdata => {
            return formdata;
        });

        console.log(forminformationdata);
        document.getElementById("formallinfo").inert = forminformationdata;

        // var email = document.getElementById("emailid").value;
        // var paswd = document.getElementById("paswd").value;
        // var user = document.getElementById("user").value;
        // var first = document.getElementById("first").value;
        // var last = document.getElementById("last").value;
        // var company = document.getElementById("company").value;
        // var experience = document.getElementById("experience").value;
        // var designation = document.getElementById("designation").value;
        // const userInfo = [email]; 
        // userInfo.push(email);
        // var emaild = document.getElementById("emaildata");
        // emaild.value = userInfo[0];

        // var paswd = document.getElementById("paswd").value;
        // var paswdata = document.getElementById("paswdata");
        // paswdata.value = paswd;

        // var username = document.getElementById("user").value;
        // var userdata = document.getElementById("userdata");
        // userdata.value = username;

        // var firstname = document.getElementById("first").value;
        // var firstdata = document.getElementById("firstdata");
        // firstdata.value = firstname;

        // var lastname = document.getElementById("last").value;
        // var lastdata = document.getElementById("lastdata");
        // lastdata.value = lastname;

        // var company = document.getElementById("company").value;
        // var companydata = document.getElementById("companydata");
        // companydata.value = company;

        // var experience = document.getElementById("experience").value;
        // var experiencedata = document.getElementById("experiencedata");
        // experiencedata.value = experience;

        // var designation = document.getElementById("designation").value;
        // var designationdata = document.getElementById("designationdata");
        // designationdata.value = designation;
    }
}





