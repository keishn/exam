document.getElementById('invalid').onclick = function(){
    localStorageArray = [];
    localStorage.clear();
    location.reload();
}

// wher - probel, hc - hashteg
var wher ="", hc=1
function checkErrorXML(x){
    wher = ""
    hс = 1
    checkXML(x)
}

// l - line what was bad, nam - number where bad, i - counter
function checkXML(n){
    var l, i, nam
    nam = n.nodeName
    if (nam == "h3"){
        if (hс == 0){
            return;
        }
        hс = 0
    }
    if (nam == "#text"){
        wher = wher + n.nodeValue
    }
    l = n.childNodes.length
    for (i = 0; i < l; i++){
        checkXML(n.childNodes[i])
    }
}

function validateXML(txt){

    if (document.implementation.createDocument){
        try{
            var text = document.getElementById(txt).value;
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(text,"application/xml");
        }
        catch(err){
            alert(err.message)
        }

        if (xmlDoc.getElementsByTagName("parsererror").length>0){
            checkErrorXML(xmlDoc.getElementsByTagName("parsererror")[0]);
            document.getElementById("good-bad").style.display = "block";
            document.getElementById("good-bad").innerHTML = '<div>'+ wher +'</div>';
        }
        else{
            document.getElementById("good-bad").style.display = "block";
            document.getElementById("good-bad").innerHTML = "<div>Fine.</div>";
        }
    }
    else{
        alert('Alles ist schlecht');
    }
}
