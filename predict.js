window.addEventListener("load", init);
let result;

function init()
{
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "http://localhost:5000/car/Carname/",
            success: function(data){
               result=data;
              console.log(result);
              let carList = document.getElementById("car-datalist");
                result.forEach(v => {
                    let optionCompany = document.createElement("option");
                    optionCompany.value = v.company;
                    carList.appendChild(optionCompany);
                });
            },
            error:function(err){
                console.log(err);
            }
        });
        function getFilter(){
            console.log(result)  
        }
}

$("#companyname").change(function(){
    console.log("change");

})
