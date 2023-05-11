let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");   //DOUBLT
//Process the request on server side and retrive the data.
xhr.onload=function(){
    //Please provide me data if my request lites in range of status code 200-<300.
    if(xhr.status==200){
        //provide the data to the server
        let resdata=JSON.parse(this.response);
        var data=[];
        for(let i=0;i<resdata.length;i++){
            if(resdata[i].currencies!==undefined){
             if(resdata[i].currencies[0].name==="United States dollar"){
                data.push(resdata[i]);
             }
        }}
        console.log("Country which used US Dollars as currency are shown below:");
        data.forEach((a,i)=>{
            console.log(`
            ${i} Country Name : ${a.name}
            `)
        })
    }}
xhr.send();