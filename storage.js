document.addEventListener("DOMContentLoaded",function(){
    var populate = function(arr){
            var tble = document.getElementById("expense");
            for(i in arr){
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                var desc = document.createTextNode(arr[i].title);
                var amt = document.createTextNode(arr[i].amount);
                console.log(i,arr[i].amount);
                td1.appendChild(desc);
                td2.appendChild(amt);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tble.appendChild(tr);
            }
        }

//Checks if income and expense are there in local storage
    if(typeof(Storage) != undefined){
        if(localStorage.getItem("expense")){
            var temp = localStorage.getItem("expense");
            var expense = JSON.parse(temp);
            populate(expense);
        }
        else{
            localStorage.setItem("expense","[]");
        }
    }
    else{
        console.log("sorry there is no support for the browser you use");
    }
});

