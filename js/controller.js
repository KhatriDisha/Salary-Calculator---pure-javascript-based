window.addEventListener("DOMContentLoaded" , init);

function init() {

    
    fillWithZeros();
    bindEvents();

    
}

function fillWithZeros(){

    var spans = document.querySelectorAll("span");
    for(let span of spans){
        span.innerText = '0';
    }
}

function bindEvents(){

    document.querySelector("#compute").addEventListener("click" , computeSalary);

}

function computeSalary() {

     var basicSalary = isNaN(parseFloat(document.querySelector("#salary").value))?0 :parseFloat(document.querySelector("#salary").value);
     salaryOperations.takeSalary(basicSalary);
     printSalary();
}

function printSalary() {

    for(let key in salaryOperations){

        if(typeof salaryOperations[key] === "function"){

            if(key != 'takeSalary'){

                document.querySelector("#" + key).innerHTML = salaryOperations[key]();
            }

        }
    }
    //document.querySelector("#hra").innerHTML = salaryOperations.hra();
}