var balance=0;
function updatebal(amount){
    balance += amount;
    if(balance < 0){
        alert("Insufficient balance");
        balance=0;
    }
    document.getElementById('balance').textContent='Current Balance: $' + balance.toFixed(2);
}

function addexpense(){
    var amt1=parseFloat(document.getElementById("expenseip").value);
    if(isNaN(amt1)){
        alert("Please enter a valid amount");
        return;
    }
  updatebal(-amt1);
  document.getElementById('expenseip').value="";
}

function addincome(){
    var amt2=parseFloat(document.getElementById('incomeip').value);
    if(isNaN(amt2)){
        alert("Please enter a valid amount");
        return;
    }
    updatebal(amt2);
    document.getElementById('incomeip').value="";
}