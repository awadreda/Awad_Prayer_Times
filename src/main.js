//get cities of country

// https://countriesnow.space/api/v0.1/countries/cities

//{

//      "country": "egypt"
// }


// get all countries
// https://countriesnow.space/api/v0.1/countries


// get prayes of

// https://api.aladhan.com/v1/timingsByCity/20-09-2024?city=Unayzah&country=Saudi+Arabia&method=4&adjustment=1


let prayer_timeDiv =document.getElementById("prayer_time");

let CountryBox = document.getElementById("countries");

let cityBox = document.getElementById("cities");


console.log(CountryBox);


console.log(document.querySelector("#pray-box_Asr  div:nth-child(2)"));


console.log(document.querySelector(`#pray-box_Asr  #pray-time`));


function getPrayFormAPI()
{

  fetch(
    "https://api.aladhan.com/v1/timingsByCity/20-09-2024?city=Unayzah&country=Saudi+Arabia&method=4&adjustment=1")
    .then((response) => response.json())
    .then((json) => {
      // console.log(json.data.timings.Asr);
      // getHistroy(json);
      // console.log(json.data.timings);

      let result = json.data.timings;
      tempShowing(result);
    });


}


function tempShowing(josn)
{


  document.querySelector("#pray-box_Fajr div:nth-child(2)").innerHTML =
    Convert24To12(josn.Fajr);
  
  document.querySelector("#pray-box_Sunrise div:nth-child(2)").innerHTML =
    Convert24To12(josn.Sunrise);

  document.querySelector("#pray-box_Dhuhr div:nth-child(2)").innerHTML =
    Convert24To12(josn.Dhuhr);
  
  document.querySelector(
    "#pray-box_Asr div:nth-child(2)"
  ).innerHTML = Convert24To12(josn.Asr);
  
  
  document.querySelector("#pray-box_Maghrib div:nth-child(2)").innerHTML =
    Convert24To12(josn.Maghrib);
  
  document.querySelector("#pray-box_Isha div:nth-child(2)").innerHTML =
    Convert24To12(josn.Isha);



}


getPrayFormAPI();







function buildPrayBox(city)
{





}




function getAllCountries()
{

  return new Promise((resolve,reject) =>   {

    
    fetch(`https://countriesnow.space/api/v0.1/countries`)
    .then((response) => response.json())
    .then((json) => {
      
      console.log(json.data[0].country);
      
      fillCountriesBox(json.data);
      
      // for(let i=0;i<json.data.length;i++)
      //   {
      
      
      //     console.log(json.data[i].country);
      
      // }
      resolve();
      
    })
  })

}

function fillCountriesBox(json)
{

  CountryBox.innerHTML = "";


  for(let i=0;i<json.length;i++)
  {

    let option = document.createElement('option');

    option.value=json[i].country;

    option.innerHTML=json[i].country;

    CountryBox.appendChild(option);


  }




}


// getAllCountries();

console.log(`${document.getElementById("countries").value}`);


function getCitiesOfCountry(){


  fetch(`https://countriesnow.space/api/v0.1/countries/cities`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      country: `${document.getElementById("countries").value}`,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      // console.log(json.data);
      fillCitiesBox(json.data);
    });


}



function fillCitiesBox(json)
{

    cityBox.innerHTML="";

    for(let i= 0;i<json.length;i++)
    {

        let option =document.createElement("option");

        option.value=json[i];

        option.innerHTML=json[i];

        cityBox.appendChild(option);

    }


}





// console.log("test !!!!!!!!!!!!")
// let st = "awad reda";

//  console.log(st.includes(" "));

//   st = st.replace(" ","+");
//  console.log(st.replace(" ", "+"));
//  console.log(st);
 




// String.toString
function updateTimePrayer(country,city)
{

  

  //  String.toString(country)

  //  String.toString(city);

  if(country.includes(" "))
  {
    country = country.replace(" ","+");

  }

  if(city.includes(" "))
  {
    city = city.replace(" ","+");

  }

   fetch(
     `https://api.aladhan.com/v1/timingsByCity/20-09-2024?city=${city}&country=${country}&method=4&adjustment=1`
   )
     .then((response) => response.json())
     .then((json) => {
      //  console.log(json.data.timings.Asr);

      //  console.log(json.data.timings);
      // getHistroy(json);
      // console.log(json.data.)
       let result = json.data.timings;
      // console.log(country);
      // console.log(city);

       tempShowing(result);
     });

     fillLocationInfo(country, city);

}


function fillLocationInfo(country,city)
{


console.log(country,city)
document.getElementById("country-value").innerHTML=country ;
document.getElementById("city-value").innerHTML=city ;

}


let ChangeCityButton = document.getElementById("change");


ChangeCityButton.addEventListener("click", function(){

  updateTimePrayer(
    document.getElementById("countries").value,
    document.getElementById("cities").value
  );

})






function getHistroy(json) {

  console.log("From Histroy");

  console.log(json.data);
  
}







window.onload = function(){
  
  getAllCountries()
  .then(()=>{

    getCitiesOfCountry();

  })
  
}





CountryBox.onchange = function (){

  getCitiesOfCountry();
}





let st = "13:04";

console.log(st.slice(0,2));
let res = st.slice(0, 2);

console.log(res -12);

console.log(st.replace(0,`01`))





function Convert24To12(time)
{

  // console.log(typeof time);


let hours = time.slice(0,2);
// console.log(`0${hours - 12}${time.slice(2)} pm`);

// console.log(hours >12);

  return  hours < 12 ?  `${time} am` : `0${hours-12}${time.slice(2)} pm`; 


}
