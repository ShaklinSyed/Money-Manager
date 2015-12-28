document.addEventListener("DOMContentLoaded",function(){
	console.log("ready");
	var expenses = {

	data : [],
	income : 50000,
	exp : 0,

	//Adds Data to the working array
	addData : function(obj){
		this.data.push(obj);
		this.exp += Number(obj.amt);
		this.renderData(obj.title,obj.amt);
		if(arguments.length == 1){
			this.storeData();	
		}
		console.log(this.data);
	},

	//Updates the view
	renderData : function(descr,amount){
		console.log("view");
		document.getElementById("income").innerHTML = this.income;

			var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var desc1 = document.createTextNode(descr);
            var amt1 = document.createTextNode(amount);
            td1.appendChild(desc1);
            td2.appendChild(amt1);
            tr.appendChild(td1);
            tr.appendChild(td2);
            document.getElementById("expense").appendChild(tr);

		document.getElementById("balance").innerHTML = this.income - this.exp; 
	},

	//Store the data to local repository
	storeData : function(){
		console.log("Store");
		var storage = JSON.stringify(this.data);
		localStorage.setItem("data", storage); 
	},

	//Gets the data from local storage when browser has been reopened
	getFromStorage : function(){
		console.log("get From Storage");
		if(localStorage.getItem("data")){
			var temp = localStorage.getItem("data");
			var storage = JSON.parse(temp);

			for(var i =0;i<storage.length;i++){
				this.addData(storage[i],"foobar");
			}
		}
	}
};

expenses.getFromStorage();
	//Event Listener for button click - adds expense data
	document.getElementById("btn-exp").addEventListener("click",function(){
		var desc = document.getElementById("desc").value;
        var amt = document.getElementById("amt").value;

		if(desc != "" && amt != ""){
			var obj = {};
			obj.title = desc;
			obj.amt = amt;
			expenses.addData(obj);
		}
	});
});