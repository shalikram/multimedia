function addPerson(){
        var list = document.createElement("li");
        var name = document.getElementById("add-person").value;
        //console.log(name);
        list.innerHTML = name;