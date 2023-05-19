

function eventButtonHandler0(){
    const eventDetails = document.getElementById('eventDetails0');
    const buttonText = document.getElementById('eventButton0');
    let eventDetailsState = eventDetails.style.display;

    if(eventDetailsState === 'block'){
        eventDetails.style.display = 'none';
        buttonText.textContent = "Show Details";
    } else {
        eventDetails.style.display = 'block';
        buttonText.textContent = "Hide Details";
    }
}

function eventButtonHandler1(){
    let eventDetails = document.getElementById('eventDetails1');
    let buttonText = document.getElementById('eventButton1');
    let eventDetailsState = eventDetails.style.display;

    if(eventDetailsState === 'block'){
        eventDetails.style.display = 'none';
        buttonText.textContent = "Show Details";
    } else {
        eventDetails.style.display = 'block';
        buttonText.textContent = "Hide Details";
    }
}

function eventButtonHandler2(){
    let eventDetails = document.getElementById('eventDetails2');
    let buttonText = document.getElementById('eventButton2');
    let eventDetailsState = eventDetails.style.display;

    if(eventDetailsState === 'block'){
        eventDetails.style.display = 'none';
        buttonText.textContent = "Show Details";
    } else {
        eventDetails.style.display = 'block';
        buttonText.textContent = "Hide Details";
    }
}


function menuClick(){
    const dropDown = document.getElementById('drowndownEvent');
    let dropDownSetting = dropDown.style.display;

    if(dropDownSetting === 'block'){
        dropDown.style.display = 'none';
    } else {
        dropDown.style.display = 'block';
    }
    
    window.onresize = function screenUpdate(){
        if(window.innerWidth > 767){
            dropDown.style.display = 'none';
        }
    }
}

window.onscroll = function(){
    let albums = document.querySelector(".albumsContainer");
    let events = document.querySelector("#upcoming-events");
    let scrollDown = this.scrollY;

    if(scrollDown === 0){
        events.style.animation = 'none';
    albums.style.animation = 'none';
    } else {
        events.style.animation = 'fadeIn 5s';
        albums.style.animation = 'fadeIn 5s';
    }

}


