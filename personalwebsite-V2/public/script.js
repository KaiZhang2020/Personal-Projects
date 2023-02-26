if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready() {
    var buttons = document.getElementsByClassName('edu-tag')
    for(var i = 0; i < buttons.length; i++){
        var button = buttons[i];
        button.addEventListener('click', function(e) {
            var currtab = document.getElementsByClassName("tab-content-displayed")
            currtab[0].classList.replace("tab-content-displayed", "tab-content-hidden")
            currtab = null;
            if(e.target.id == "bc-button"){
                var newTab = document.getElementById("bc");
                newTab.classList.replace("tab-content-hidden","tab-content-displayed")
            }else if(e.target.id == "uwb-button"){
                var newTab = document.getElementById("uwb");
                newTab.classList.replace("tab-content-hidden","tab-content-displayed")
            }else if(e.target.id == "nhs-button"){
                var newTab = document.getElementById("nhs");
                newTab.classList.replace("tab-content-hidden","tab-content-displayed")
            }
        })
    }
}