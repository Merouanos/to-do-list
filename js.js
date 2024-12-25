let enter=document.querySelector("input[type='text']");
let send=document.querySelector("input[type='submit']");
let clear=document.getElementById("clear");
let toadd=document.getElementById("loc");
let tasks=[];


let mydiv=document.createElement("div");
mydiv.classList="bg-gray-300 awesome p-5";

tasks.forEach(addElement);

function addElement(info)
{
    let ele=mydiv.cloneNode();
    ele.innerHTML=`
        <div class="w-full flex p-2 justify-between bg-white">
          <p>${info}</p>
          <button class="bg-red-500 rounded-xl justify-evenly px-2 hover:opacity-60 text-white">delete</button>
      </div>
    `
    toadd.appendChild(ele);
    const btn=ele.querySelector("button");
    btn.onclick=function(e){
        e.target.parentElement.parentElement.remove();
        tasks.splice(tasks.indexOf(e.target.previousElementSibling.innerText),1);
        window.localStorage.arr=tasks.join("ind_c$");
        window.localStorage.arr+="ind_c$";
    }
}


function addToLocal()
{
    if(window.localStorage.arr)
   window.localStorage.arr=tasks.join("ind_c$");
    else
    window.localStorage.arr=tasks[0];
    window.localStorage.arr+="ind_c$";
    console.log(window.localStorage.arr);
}

if(window.sessionStorage.value)
    enter.value=window.sessionStorage.value;


if(window.localStorage.getItem("arr")!=null)
{
    tasks=window.localStorage.arr.split("ind_c$").slice(0,-1);
    tasks.forEach(addElement);
   console.log(tasks);
}

enter.onblur=function()
{
    window.sessionStorage.value=enter.value;
    
}



let sending = function()
{
    if(enter.value)
    {
        enter.value= enter.value.split("").filter((x)=>x!="<"&&x!=">").join("");
      addElement(enter.value);
        tasks.push(enter.value);
        console.log(tasks);
    addToLocal()
    enter.value="";
    window.sessionStorage.value="";
    
       
    
    }
}
enter.addEventListener("keydown",(x)=>{

    if (x.key === "Enter") 
        sending();
      
});
send.onclick=sending




clear.onclick=function()
{
    let deleting=document.querySelectorAll(".awesome");
    window.localStorage.clear();
    tasks=[];
    deleting.forEach((x)=>{
        x.remove();
    });
    
}
