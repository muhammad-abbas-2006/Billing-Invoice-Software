// Navbar button function Start

let citybtn = document.getElementById('city')
let shopbtn = document.getElementById('shop')
let datebtn = document.getElementById('date')
let getlis1 = document.getElementById('list1')
let getlis2 = document.getElementById('list2')
let getlis3 = document.getElementById('list3')
let Data_lis = document.getElementById('list')
let getinp = document.getElementById('inpN')
let getprice = document.getElementById('inpP')
let gettotal = document.getElementById('bill')



function btnc(){
    let pro = prompt("Enter City Name",)
    getlis1.innerHTML += `<li class="list-group-item list-group-item-primary" aria-disabled="true">City : ${pro}</li>`
    citybtn.hidden= true;

}
function btns(){
    let pro = prompt("Enter Shop Name")
    getlis2.innerHTML += `<li class="list-group-item list-group-item-primary" aria-disabled="true">${pro} shop</li>`
    shopbtn.hidden= true;
}
function btnd(){
    let pro = prompt("Enter Current Date",'Day/Month/Year')
    getlis3.innerHTML += `<li class="list-group-item list-group-item-primary" aria-disabled="true">${pro}</li>`
    datebtn.hidden= true;
}


function btnA() {
    if (getinp.value == "" || getprice.value == '') {
        

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill out given requriements !",
          });


    } else {
        Data_lis.innerHTML += `
            <li class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
                <div class="task-text text-start p-3">${getinp.value}</div>
                <div class="task-text text-center p-3 price">${getprice.value} Rs.</div>
                <div class="text-end"><button type="button" class="btn-li btn-sm btn btn-danger" onclick="remove(this)">Remove</button></div>
            </li>
        `;
        getinp.value = '';
        getprice.value = '';
    }
}

function btnT() {
    let total = 0;
    let prices = document.querySelectorAll('.price');

    prices.forEach(item => {
        total += parseFloat(item.textContent);
    });

    gettotal.textContent = `Total : ${total} Rs.`;
}



function remove(e){
    e.parentNode.parentNode.remove()
}
function btnD(){
    window.location.reload();
}

 
