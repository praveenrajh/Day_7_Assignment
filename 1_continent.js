var request=new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v3.1/all")       //https link to access the api from the server.
    request.send();
    request.onload=function(){
        var data=JSON.parse(request.response)                     //storing datas inside the data variable.
        data=data.filter((country)=>country.region==="Asia")      //filtering the data that are in Asia continent by using the filter method.
        console.log("Asian continent countries are shown below:")
        data.forEach((element,i) => {                             //here for each methods is used to iterate over the elements and  print the data in the console.
            console.log(`
            ${i} ${element.name.common}`);                        //here using template literals.
        })
    }