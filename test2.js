let submit = document.getElementById("submit");
let result = document.getElementById("result")
 function numberOneTriangle(){
    let n = Number(document.getElementById("number-triangle").value)
    let striangle ="";
    if((n < 10) && (n >1)){
        for(let i = 0; i < n; i++){
            let width = "";
            for(let j = 0; j <= i; j++){
                width +="*";
            }
            striangle +=`${width}<br>`
        }
        result.innerHTML = striangle
    }
 }
submit.addEventListener("click", numberOneTriangle)
