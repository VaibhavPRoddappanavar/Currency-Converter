
  let col2selects=document.querySelectorAll(".col2 select");

  for(let select of col2selects)
  {
     for(code in countryList)
       {
           let newoption=document.createElement("option");
           newoption.value=code;
           newoption.innerText=code;
           select.appendChild(newoption);
           if(select.id=="choice1"&&code=="USD")
           {
               newoption.setAttribute("selected","selected");
           }
           if(select.id=="choice2"&&code=="INR")
           {
               newoption.setAttribute("selected","selected");
           }
       }
       select.addEventListener("change",(evt)=>{
        changeFlag(evt.target);
       })       
  }

  function changeFlag(element)
  {
     let a1=element.value;
     if(element.id=="choice1")
     document.querySelector(".img1").src="https://flagsapi.com/"+countryList[a1]+"/flat/64.png";
     if(element.id=="choice2")
     document.querySelector(".img2").src="https://flagsapi.com/"+countryList[a1]+"/flat/64.png";
  }
 
 btn=document.querySelector(".btn");
 btn.addEventListener("click",()=>{
    let amount=document.querySelector(".textbox").value;
    if(amount<=0)
    {
        alert("Please enter a valid amount");
        return;
    }
    let c1=document.querySelector("#choice1").value;
    let c2=document.querySelector("#choice2").value;
    
    var myHeaders = new Headers();
    myHeaders.append("apikey", "90F22vMBhLSRP9hsnNd6Xzc7jYHHSgnJ");

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  let para=document.querySelector(".para");

    fetch("https://api.apilayer.com/exchangerates_data/convert?to="+c2+"&from="+c1+"&amount="+amount, requestOptions)
    .then(response => response.json())
    .then(obj =>{ console.log(obj.result);
                     para.innerText=amount+c1+"="+obj.result+c2;
                   }
         )
    .catch(error => console.log('error', error));



 })




























  