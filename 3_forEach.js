var request=new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v3.1/all")       //https link to access the api from the server.
    request.send();
    request.onload=function(){
        var data=JSON.parse(request.response)                      //storing datas inside the data variable.
        console.log("Details of name,captial,flag are shown below:")
        data.forEach((element,i) => {                             //here for each methods is used to iterate over the elements and  print the data in the console.
            console.log(`
        Name    : ${element.name.common}
        Capital : ${element.capital}
        Flag    : ${element.flags.png}`);                 //here using template literals.
        })
    }