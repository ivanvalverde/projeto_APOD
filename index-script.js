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
    textApi.classList.add("textImg");
    imgReceived.src = apiObject.url;
    imgReceived.classList.add("video");
    date.textContent = apiObject.date;
    date.classList.add("dateImg");
    credits.textContent += apiObject.copyright;
    credits.classList.add("copyright");
    imgTitle.textContent = apiObject.title;
    imgTitle.classList.add("titleImg");
})


request.send();

