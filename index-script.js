let newRequestButton = document.querySelector("#submitNewRequest");

//Abrindo requisição da API da NASA

let request = new XMLHttpRequest();

request.open("GET", "https://api.nasa.gov/planetary/apod?api_key=pOwBAdf2wrjTLhAdv7bD6SvZEPyaupu1osGM41nW");

//Adicionando ao carregamento da página o conteúdo puxado da requisição da API da NASA

request.addEventListener("load",function(){
    let apiObject = JSON.parse(request.responseText)
    let imgReceived = document.querySelector("#picture");
    let textApi = document.querySelector("#textApi");
    let date = document.querySelector("#date");
    let imgTitle = document.querySelector("#imgTitle");
    let credits = document.querySelector("#credits");
    let imgReceivedAlt = document.querySelector("#pictureAlt");

    textApi.textContent += apiObject.explanation;
    textApi.classList.add("textImg");
    date.textContent = apiObject.date;
    date.classList.add("dateImg");
    credits.textContent += apiObject.copyright;
    credits.classList.add("copyright");
    imgTitle.textContent = apiObject.title;
    imgTitle.classList.add("titleImg");

    if (apiObject.media_type == "image"){
        imgReceivedAlt.src = apiObject.url;
        imgReceived.classList.add("invisible");
    } else{
        imgReceived.src = apiObject.url;
        imgReceivedAlt.classList.add("invisible");
    }

    imgReceivedAlt.classList.add("image");
    imgReceived.classList.add("video");
})

//Adicionando ao botão o evento para nova requisição a partir da data fornecida

newRequestButton.addEventListener("click", function(){
    let customizedRequest = new XMLHttpRequest();
    let form = document.querySelector("#searchDate");
    let newApiUrl = "https://api.nasa.gov/planetary/apod?api_key=pOwBAdf2wrjTLhAdv7bD6SvZEPyaupu1osGM41nW&date=" + form.value;

    customizedRequest.open("GET",newApiUrl);

    customizedRequest.addEventListener("load",function(event){
        let newApiObject = JSON.parse(customizedRequest.responseText);

        //Trecho do código copiado da requisição padrão feita no carregamento da página para alteração do que foi requisitado

        let imgReceived = document.querySelector("#picture");
        let textApi = document.querySelector("#textApi");
        let date = document.querySelector("#date");
        let imgTitle = document.querySelector("#imgTitle");
        let credits = document.querySelector("#credits");
        let imgReceivedAlt = document.querySelector("#pictureAlt");

        textApi.textContent += newApiObject.explanation;
        textApi.classList.add("textImg");
        date.textContent = newApiObject.date;
        date.classList.add("dateImg");
        credits.textContent += newApiObject.copyright;
        credits.classList.add("copyright");
        imgTitle.textContent = newApiObject.title;
        imgTitle.classList.add("titleImg");

        if (newApiObject.media_type == "image"){
            imgReceivedAlt.src = newApiObject.url;
            imgReceived.classList.add("invisible");
            imgReceivedAlt.classList.remove("invisible");
        } else{
            imgReceived.src = newApiObject.url;
            imgReceivedAlt.classList.add("invisible");
            imgReceived.classList.remove("invisible");
        }

        imgReceivedAlt.classList.add("image");
        imgReceived.classList.add("video");

        event.preventDefault();
        
    })
    customizedRequest.send();
});




request.send();

