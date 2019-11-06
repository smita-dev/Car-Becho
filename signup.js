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
    if(password.length<6)
    {
        alert('Password should be at least 6 characters');
    }

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:5000/api/signup",
        data:{
            email: email,
            password:password
        },
        success: function (data) {
            window.location.href = "login.html";
        },
        error:function(err){
            console.log("fail")
        }
    })
})