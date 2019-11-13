window.addEventListener("load", init);
let result;

function init()
{
    console.log("loaded")
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "http://localhost:5000/car/carname",
            success: function(data){
               result=data;
              console.log(result);
              let distinctbrand = [...new Set(result.map(x => x.brand))];
              let carList = document.getElementById("car-datalist");
              distinctbrand.forEach(brand => {
                //Ignore null entries
                if (brand === "") {
                } else {
                  let optionBrand = document.createElement("option");
                  optionBrand.value = brand;
                  carList.appendChild(optionBrand);
                }
              });

            },
            error:function(err){
                console.log(err);
            }
        });
}

$("#companyname").change(function(){
   
})
