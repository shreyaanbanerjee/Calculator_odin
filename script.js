const container=document.createElement("div");
const html=document.querySelector("html");
const body=document.querySelector("body");
body.appendChild(container);
container.classList.add("container");
const h1=document.createElement("h1");
container.appendChild(h1);
h1.textContent="Calculator";
const calculator=document.createElement("div");
container.appendChild(calculator);
const result=document.createElement("input");
calculator.appendChild(result);
container.classList.add("container");
calculator.classList.add("calculator");
result.classList.add("result");
const row_1=document.createElement("div");
const row_2=document.createElement("div");
const row_3=document.createElement("div");
const row_4=document.createElement("div");
const row_5=document.createElement("div");
const one=document.createElement("button");
one.textContent="0";
const dot=document.createElement("button");
dot.textContent=".";
const modulo=document.createElement("button");
modulo.textContent="%";
const clear=document.createElement("button");
clear.textContent="AC";
row_1.appendChild(one);
row_1.appendChild(dot);
row_1.appendChild(clear);
row_1.appendChild(modulo);
for (let i = 0; i < 3; i++) 
    {
    const temp=document.createElement("button");
    row_2.appendChild(temp);
    temp.textContent=7+i;
}
const division=document.createElement("button");
row_2.appendChild(division);
division.textContent="/";
for (let i = 0; i < 3; i++) 
    {
    const temp=document.createElement("button");
    row_3.appendChild(temp);
    temp.textContent=4+i;
}
const multiplication=document.createElement("button");
row_3.appendChild(multiplication);
multiplication.textContent="X";
for (let i = 0; i < 3; i++) 
    {
    const temp=document.createElement("button");
    row_4.appendChild(temp);
    temp.textContent=1+i;
}
const subtraction=document.createElement("button");
row_4.appendChild(subtraction);
subtraction.textContent="-";
const equal=document.createElement("button");
row_5.appendChild(equal);
equal.textContent="=";
const addition=document.createElement("button");
row_5.appendChild(addition);
addition.textContent="+";
row_1.classList.add("row");
calculator.appendChild(row_1);
calculator.appendChild(row_2);
calculator.appendChild(row_3);
calculator.appendChild(row_4);
calculator.appendChild(row_5);
row_2.classList.add("row");
row_3.classList.add("row");
row_4.classList.add("row");
row_5.classList.add("row");
// const cells=document.querySelector(".row");
// cells.children.classList.add("cell");
let divide0=false;
let decimal=-1;
function add(a,b)
{
return a+b;
}
function subtract(a,b)
{
    return a-b;
}
function multiply(a,b)
{
    return a*b;
}
function divide(a,b)
{
    if(b==0)
        divide0=true;;
    return a/b;
}
function mod(a,b)
{
    return a%b;
}
function operate(a,o,b)
{
    let r;
    if(o==="+")
       r=add(a,b);
    else if(o==='-')
        r=subtract(a,b);
    else if(o==='/')
        r=divide(a,b);
    else if(o==='X')
        r=multiply(a,b);
    else if(o==='%')
        r=mod(a,b);
    return r;
}
clear.addEventListener("click",()=>
{
    result.value="";
    operator=null;first=0;
    second=0;
})
let first=0;
let operator=null;
let second=0;
const buttons=document.querySelectorAll("button");
let temp_result;
function handleKeyPress(event) {
    const key = event.key;
    if(key==='.')
        {
            if(decimal===-1)
            {decimal=0;
            result.value+=".";}
        }
   else if(!isNaN(key))
        {
            if(operator===null)
                {
                     if(decimal===-1)
                    first=first*10+parseFloat(key);
                else
                {
                   first+=parseFloat((key)/(Math.pow(10,decimal+1)));
                }
                }
                else
                {
                    if(decimal===-1)
                    {second=second*10+parseFloat(key);
                    temp_result=operate(first,operator, second);
                    first=temp_result;
                    operator=null;
                    }
                    else
                    second+=parseFloat((key)/(Math.pow(10,decimal+1)));
                }
            result.value+=key;
        }
     else if(key ==="+" || key==="-" || key==="X" || key==="/" || key==='%')
        {
            operator=key;
        result.value+=operator;
        decimal=-1;
        second=0;
    }
    else if(key==="=")
        {
            decimal=-1;
            if(divide0)
                {
                    result.value="You can't divide by 0...hit AC";  
                }
           else if(temp_result)
                {
                    result.value=temp_result;
                    operator=null;
                    second=0;
                }
        }
  }
buttons.forEach(element => {
    // element.addEventListener("mouseon",()=>
    // {
    //     element.style.backgroundColor="white";
    // })
    element.addEventListener('click',()=>
    {
        if(element.textContent==='.')
            {
                if(decimal===-1)
                {decimal=0;
                result.value+=".";}
            }
       else if(!isNaN(element.textContent))
            {
                if(operator===null)
                    {
                         if(decimal===-1)
                        first=first*10+parseFloat(element.textContent);
                    else
                    {
                       first+=parseFloat((element.textContent)/(Math.pow(10,decimal+1)));
                    }
                    }
                    else
                    {
                        if(decimal===-1)
                        {second=second*10+parseFloat(element.textContent);
                        temp_result=operate(first,operator, second);
                        first=temp_result;
                        operator=null;
                        }
                        else
                        second+=parseFloat((element.textContent)/(Math.pow(10,decimal+1)));
                    }
                result.value+=element.textContent;
            }
         else if(element.textContent ==="+" || element.textContent==="-" || element.textContent==="X" || element.textContent==="/" || element.textContent==='%')
            {
                operator=element.textContent;
            result.value+=operator;
            decimal=-1;
            second=0;
        }
        else if(element.textContent==="=")
            {
                decimal=-1;
                if(divide0)
                    {
                        result.value="You can't divide by 0...hit AC";  
                    }
               else if(temp_result)
                    {
                        result.value=temp_result;
                        operator=null;
                        second=0;
                    }
            }
    })   
});
document.addEventListener("keydown",handleKeyPress);
const variables=document.querySelectorAll("button:not(clear):not(equal)");
