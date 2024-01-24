document.addEventListener("keypress", (event)=>{
    if(event.key == "Enter"){
        addListItem()
    }
})

document.addEventListener("click", (event)=>{
    if(event.target.tagName === "LI"){
        console.log("clicked li")
        event.target.classList.toggle("checked")
    }
    if(event.target.tagName === "SPAN"){
        console.log("clicked span")
        event.target.parentElement.remove()
        var list = document.getElementById("checklist")
        if(list.getElementsByTagName('li').length === 0) {
            document.getElementById("listMessage").style.display = "block";
        }
    }
})

function addListItem(){
    var inputText = document.getElementById("itemDescription")
    if (inputText.value == "") {
        alert("Type something before adding")
    } else {
        var list = document.getElementById("checklist")
        var li = document.createElement("li")
        li.innerHTML = inputText.value
        if(list.getElementsByTagName('li').length === 0) {
            document.getElementById("listMessage").style.display = "none";
        }
        list.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        var hr = document.createElement("hr")
        li.appendChild(hr)
        inputText.value = ""
    }
}