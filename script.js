
const opt = document.querySelectorAll("#select-country-from option");
const select = document.querySelectorAll(".selection select");
const btn = document.querySelector("form button");
const firstcurrency = document.querySelector("#select-country-from");
const secondcurrency = document.querySelector("#select-country-to");
const display = document.querySelector(".display");

 const updateflag =(element)=>{
    let currcode = element.value;
    let councode = countryList[currcode];
    let img = element.parentElement.querySelector("img");
    let newsource = `https://flagsapi.com/${councode}/flat/64.png`;
     img.src = newsource;
 }
    for(let codevalue of select){
        for(let currencode in countryList){
            let newoption = document.createElement("option");
            newoption.innerText = currencode;
            newoption.value = currencode;
            codevalue.append(newoption)
            if(codevalue.name === "from" && currencode === "NPR"){
                newoption.selected = true;
            }
            else if(codevalue.name === "to" && currencode === "USD"){
                newoption.selected = true;
            }
            codevalue.addEventListener("change",(evt)=>{
                updateflag(evt.target);
            });
        }
    }
    updateflag(firstcurrency);
    updateflag(secondcurrency);
 const updatexhangerate = async()=>{
     let amount = document.querySelector("form input");
    let amtvalue = amount.value;
    let fromcurren = firstcurrency.value.toUpperCase();
    let tocurren = secondcurrency.value.toUpperCase();
    if(amtvalue ===""  ){
        alert("Please! Enter some number");
        return;
    }
    else if(amtvalue<1){
        alert("Please! Enter higher value than 1");
        return;
    }
     let getexchangeURL =`https://v6.exchangerate-api.com/v6/40b48f97f44797f4ae8ab115/latest/${fromcurren}`;
    let response =await fetch(getexchangeURL);
   let data = await response.json();
   let rate = data.conversion_rates;
   let amountvalue  = parseFloat(amount.value);
    let getexchange = (amtvalue * rate[tocurren]).toFixed(2);
  display.innerText = ` ${amountvalue} ${fromcurren} = ${getexchange} ${tocurren}`;
 }
 btn.addEventListener("click", async(evt)=>{
    evt.preventDefault();
   updatexhangerate();
 });
  window.addEventListener("load",()=>{
    updatexhangerate();
 })



  































































// function getweather(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const weather = {
//                 Temperatuer : 30,
//                 Humidity :80,
//                 city : "kathmandu",
//                 country  : "Nepal"
//             }
//             resolve(weather);
//      });
//     },2000);
// }
//  getweather().then((data)=>{
//     console.log(data);
            
//  }).catch((error)=>{
//     console.log(error);
    
//  })