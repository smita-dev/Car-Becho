window.addEventListener("load", init);
let result;
let carList = document.getElementById("car-datalist");
function init()
{
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "http://localhost:5000/car/Carprice/",
            success: function(data){
               result=data;
              console.log(result);
            //   result.forEach(v=>{
            //     console.log(v.company);
                result.forEach(v => {
                    let optionCompany = document.createElement("option");
                    optionCompany.value = v.company;
                    carList.appendChild(optionCompany);
                });
            // })
            },
            error:function(err){
                console.log(err);
            }
        });
        function getFilter(){
            // console.log(result)  
        }
}