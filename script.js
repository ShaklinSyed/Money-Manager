document.addEventListener("DOMContentLoaded",function(){
    console.log("ready");

    var addIncome = function(title,amount){
        var obj = {};
        obj.title = title;
        obj.amount = amount;

        var temp = localStorage.getItem("income");
        var income = JSON.parse(temp);
        income.push(obj);

        var temp = JSON.stringify(income);
        localStorage.setItem("income",temp);
    }

    var addExpense = function(title,amount){
        var obj = {};
        obj.title = title;
        obj.amount = amount;

        var temp = localStorage.getItem("expense");
        var expense = JSON.parse(temp);
        expense.push(obj);
        
        var temp = JSON.stringify(expense);
        localStorage.setItem("expense",temp);
    }

    //Event Handler for Add Income Button
    document.getElementById("btn-inc").addEventListener("click",function(){
        var desc = document.getElementById("desc").value;
        var amt = document.getElementById("amt").value;
        if(desc != "" && amt != ""){
            addIncome(desc,amt);

            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var desc1 = document.createTextNode(desc);
            var amt1 = document.createTextNode(amt);
            td1.appendChild(desc1);
            td2.appendChild(amt1);
            tr.appendChild(td1);
            tr.appendChild(td2);
            document.getElementById("income").appendChild(tr);

        }     
    });

    //Event Handler for Add Expense Button
    document.getElementById("btn-exp").addEventListener("click",function(){
        var desc = document.getElementById("desc").value;
        var amt = document.getElementById("amt").value;

        if(desc != "" && amt != ""){
            addExpense(desc,amt);

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
        }
    });
});
