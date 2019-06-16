let totalEl = document.querySelector(".total");

let arith = "";
let arr = [];
let arr3 = "";

function multiply()
{
    for(let i = 0; i < arr.length; i++)
    {
        arr[i] = +arr[i];
    }
    arr3 = arr.reduce((a, b) => a * b);
}
function division()
{
    for(let i = 0; i < arr.length; i++)
    {
        arr[i] = +arr[i];
    }
    arr3 = arr.reduce((a, b) => a / b);
}
function plus()
{
    totalEl.value = "+";
    arith = "+"
}
function times()
{
    totalEl.value = "x";
    arith = "x";
}
function divide()
{
    totalEl.value = "/";
    arith = "/"
}
function display()
{
    if(arith === "+" && (arr.length - 1) > 1)
    {
        arr3 = arr3 + Number(arr[arr.length - 1]);
        totalEl.value = arr3;
    }
    else if(arith === "+")
    {
        totalVal();
        totalEl.value = arr3;
    }
    
    if(arith === "x" && (arr.length - 1) > 1)
    {
        arr3 = arr3 * Number(arr[arr.length - 1]);
        totalEl.value = arr3;
    }
    else if(arith === "x")
    {
        multiply();
        totalEl.value = arr3;
    }
    
    if(arith === "/" && (arr.length - 1) > 1)
    {
        arr3 = arr3 / Number(arr[arr.length - 1]);
        totalEl.value = arr3;
    }
    else if (arith === "/") 
    {
        division();
        totalEl.value = arr3;
    }
}
function add(num)
{
    arr.push(num);

   for(let key in arr)
   {
       totalEl.value = +arr[key];
   }

}
function totalVal()
{
    for(let i = 0; i < arr.length; i++)
    {
        arr[i] = +arr[i];
    }
    totalEl.value = arr.reduce((a, b) => a + b);
    arr3 = arr.reduce((a, b) => a + b);
}
function clearCalc()
{
    window.location.reload();
}

/* Runs the Calculator */
function calculator()
{
    display();
}