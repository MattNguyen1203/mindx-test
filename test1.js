

let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let getSum = document.getElementById("sum");
let getList = document.getElementById("list");
let btn = document.getElementById("btn");


function checkSNT (){

    let tmp = 0;
    let sum = 0;
    let list ="";
    let arr=[];
    value1 = Number(number1.value);
    value2 = Number(number2.value);
    if(number1 > number2){
        tmp = value1
        value1 = value2;
        value2 = tmp;
    }
    for(let i = value1; i <= value2; i++){
        if(i >= 2){
            let count = 0;
            for(let j = 1; j <= i; j++){
                if(i % j == 0){
                    count++
                }
            }
    
            if(count == 2){
                arr.push(i)
            }
        }       
    }
    
    if(arr.length > 0){
        for(let arrNum of arr){
            list += `${arrNum}; `
            sum += arrNum
        }
        getSum.innerHTML = sum;
        getList.innerHTML = list 
    }else(
        getList.innerHTML = "Không có số nguyên tố trong khoảng này",
        getSum.innerHTML = null
    )
}

btn.addEventListener("click",checkSNT)



