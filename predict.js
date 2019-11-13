let seletedBrand;
let result;
let selectedModel;
let seletedKmDriven;
let inssurance=true;
let noOfOwner;
window.addEventListener("load", init);


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
    seletedBrand=document.getElementById("companyname").value;
    console.log(seletedBrand);
    $.ajax({
        type:"POST",
        dataType:"json",
        url:"http://localhost:5000/car/modelname",
        data:{
            brand:seletedBrand
        },
        success:function(data)
        {
           displaymodel(data);
        },
        error:function(err){
            console.log(err);
        }
    })
})
function displaymodel(model)
{
    console.log(model);
    let distinctModel=[...new Set(model.map(v=>v.model))];
    console.log(distinctModel);
    let modelList = document.getElementById("model-datalist");
    distinctModel.forEach(model=>{
        if(model===""){
        }else{
            let optionModel=document.createElement('option');
            optionModel.value=model;
            modelList.appendChild(optionModel);
        }
    })

}

$(".evaluate-btn").click(function(){
    selectedModel=document.getElementById("modelname").value;
    seletedKmDriven=document.getElementById("kmDriven").value;
    inssurance=document.getElementById("inssurance").value;
    noOfOwner=document.getElementById("owner").value;
    console.log(seletedBrand)
    console.log(selectedModel);
    console.log(seletedKmDriven);
    console.log(inssurance);
    console.log(noOfOwner);
})