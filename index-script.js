let request = new XMLHttpRequest();

request.open("GET", "https://api.nasa.gov/planetary/apod?api_key=pOwBAdf2wrjTLhAdv7bD6SvZEPyaupu1osGM41nW");

request.addEventListener("load",function(){
    let apiObject = JSON.parse(request.responseText)
    let imgReceived = document.querySelector("#picture");
    let textApi = document.querySelector("#textApi");
    let date = document.querySelector("#date");
    let imgTitle = document.querySelector("#imgTitle");
    let credits = document.querySelector("#credits");

    textApi.textContent += apiObject.explanation;
    imgReceived.src = apiObject.url;
    date.textContent = apiObject.date;
    credits.textContent += apiObject.copyright;
    imgTitle.textContent = apiObject.title;
})


request.send();

