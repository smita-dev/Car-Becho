let Fname;
let Lname;
let Email;
let password;
let rPassword;

$("#signupbtn").click(function(){
    console.log("sdjhf")
    email=$(".email").val();
    password=$(".password").val();
    passwordRepeat=$(".repeat-password").val();

    console.log(email);
    console.log(password);
    if(password!=passwordRepeat)
    {
        alert("password is not same !!!");
    }
    if(!email || !password || !passwordRepeat)
    {
        alert("Please fill in all fields");
    }
    // if(password.length<6)
    // {
    //     alert('Password should be at least 6 characters');
    // }

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:5000/api/signup",
        data:{
            email: email,
            password:password
        },
        success: function (){
            console.log("ajax call done successfully")
            window.location.href = "/home.html";
        },
        error:function(err){
            window.location.href = "/signup.html";
        }
    })
})


$("#loginbtn").click(function(){
    email=$(".email").val();
    password=$(".password").val();
    console.log(email)
    console.log(password)
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:5000/api/login",
        data:{
            email: email,
            password:password
        },
        success: function () {
            // window.location.href = "login.html";
            console.log("ajax call done successfully")
            window.location.href = "home.html";
        },
        error:function(err){
            console.log("fail")
        }
    })
})