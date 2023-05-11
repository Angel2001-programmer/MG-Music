function menuClick(dropDownSetting){
    var dropDown = document.getElementById('drowndownEvent');
    var dropDownSetting = dropDown.style.display;

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

