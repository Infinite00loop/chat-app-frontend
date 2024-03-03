const tabledata=document.getElementById('tabledata');

window.addEventListener('DOMContentLoaded',()=>{
    var newRow=document.createElement("tr");
    var newCell=document.createElement("td");
    newCell.textContent=localStorage.getItem('username')+" joined.";
    newRow.appendChild(newCell);
    tabledata.appendChild(newRow);
    })