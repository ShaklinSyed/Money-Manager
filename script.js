document.addEventListener("DOMContentLoaded",function(){
    console.log("ready");

    
    //2.Creates an object and appends to localStorage
    var addExpense = function(title,amount){
        var obj = {};
        obj.title = title;
        obj.amount = amount;

        exp += Number(amount);
        var temp = localStorage.getItem("expense");
        var expense = JSON.parse(temp);
        expense.push(obj);
        
        var temp = JSON.stringify(expense);
        localStorage.setItem("expense",temp);
    }
    
    //1.Event Listeners
    document.getElementById("btn-exp").addEventListener("click",function(){
        var desc = document.getElementById("desc").value;
        var amt = document.getElementById("amt").value;

        if(desc != "" && amt != ""){
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var desc1 = document.createTextNode(desc);
            var amt1 = document.createTextNode(amt);
            td1.appendChild(desc1);
            td2.appendChild(amt1);
            tr.appendChild(td1);
            tr.appendChild(td2);
            document.getElementById("expense").appendChild(tr);
            exp += Number(amt);
            console.log(exp);
            var bal = income - exp ;

            document.getElementById("balance").innerHTML = bal;
            addExpense(desc,amt);

        }
    });
});
