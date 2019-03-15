var colors=generaterandomcolorarray(9); 
var diflevel=9;

var box=document.querySelectorAll(".box");
function pickacolor()
{
    var randomcolor=Math.random();
    randomcolor=randomcolor*diflevel;
    randomcolor=randomcolor-randomcolor%1;
    return colors[randomcolor];
}

var picked_color=pickacolor();

per=percentages(picked_color);

var heading_color=document.querySelector("#heading_color");
heading_color.textContent=picked_color;

explanation=document.querySelector("#explanation");
explanation.textContent="( Choose the color that contains "+per[0]+"% of red color, "+per[1]+"% of green color and "+per[2]+"% of blue color )";

var easymode=document.querySelector("#easymode");
var mediummode=document.querySelector("#mediummode");
var hardmode=document.querySelector("#hardmode");

easymode.addEventListener("click",selecteasymode);
mediummode.addEventListener("click",selectmediummode);
hardmode.addEventListener("click",selecthardmode);

function selecteasymode()
{
    hardmode.classList.remove("selectedmode");
    mediummode.classList.remove("selectedmode");
    easymode.classList.add("selectedmode");
    diflevel=3;
    
    var two=document.querySelectorAll(".two");
    for(var i=0;i<=2;i++)
    {
        two[i].style.backgroundColor="rgb(0, 51, 80)";   
    }
    var three=document.querySelectorAll(".three");
    for(var i=0;i<=2;i++)
    {
        three[i].style.backgroundColor="rgb(0, 51, 80)";   
    } 
    clickmainbutton();   
}

function selectmediummode()
{
    hardmode.classList.remove("selectedmode");
    easymode.classList.remove("selectedmode");
    mediummode.classList.add("selectedmode");
    diflevel=6;
    
    var three=document.querySelectorAll(".three");
    for(var i=0;i<=2;i++)
    {
        three[i].style.backgroundColor="rgb(0, 51, 80)";   
    }
    clickmainbutton();   
}
function selecthardmode()
{
    easymode.classList.remove("selectedmode");
    mediummode.classList.remove("selectedmode");
    hardmode.classList.add("selectedmode");
    diflevel=9;
    clickmainbutton();   
}

var mainbutton=document.querySelector("#mainbutton");
mainbutton.addEventListener("click",clickmainbutton);

function clickmainbutton()
{
    
    var colors=generaterandomcolorarray(diflevel); 
    var box=document.querySelectorAll(".box");

    var ran=Math.random()*diflevel;
    ran=ran-ran%1;
    picked_color=colors[ran];
    per=percentages(picked_color);
    explanation=document.querySelector("#explanation");
    explanation.textContent="( Choose the color that contains "+per[0]+"% of red color, "+per[1]+"% of green color and "+per[2]+"% of blue color )";

    var message=document.querySelector("#message");
    message.textContent=" "

    var heading_color=document.querySelector("#heading_color");
    heading_color.textContent=picked_color;
    var mainbutton=document.querySelector("#mainbutton");
    mainbutton.textContent="NEW COLORS??"
    mainbutton.addEventListener("click",clickmainbutton);

    for(var i=0;i<box.length;i++)
    {
        box[i].style.backgroundColor=colors[i];
        box[i].addEventListener("click",clickthecolor);
    }   
}

for(var i=0;i<box.length;i++)
{
    box[i].style.backgroundColor=colors[i];
    box[i].addEventListener("click",clickthecolor);
}

function percentages(str)
{
    var per=str;
    per.split("(");
    per=per.slice(4);
    per=per.split(")");
    per=per[0];
    per=per.split(",");
    per[0]=Number(per[0]);
    per[1]=Number(per[1]);
    per[2]=Number(per[2]);
    per[3]=per[0]+per[1]+per[2];
    per[0]=(per[0]/per[3])*100;
    per[0]=per[0]*100;
    per[0]=(per[0])-(per[0]%1);
    per[0]=per[0]/100;
    per[1]=(per[1]/per[3])*100;
    per[1]=per[1]*100;
    per[1]=per[1]-(per[1]%1);
    per[1]=per[1]/100
    per[2]=(per[2]/per[3])*100;
    per[2]=per[2]*100;
    per[2]=per[2]-(per[2]%1);
    per[2]=per[2]/100;
    return per;
}

function clickthecolor()
{
    var clicked_color=this.style.background;
    if(clicked_color==picked_color)
    {
        message.textContent="You Win...";
        mainbutton.textContent="PLAY AGAIN??"
        changetoacolour();
    }
    else
    {
        this.style.backgroundColor="rgb(0, 51, 80)";  
        message.textContent="Try Again..";
    }
}

function changetoacolour()
{
    for(var i=0;i<diflevel;i++)
    {
        box[i].style.backgroundColor=picked_color; 
    }
}

function generaterandomcolorarray(num)
{
    var array=[];
    for(var i=0;i<num;i++)
    {
        array.push(getarandomcolor());
    }
    return array;
}

function getarandomcolor()
{
    var r=Math.random()*256;
    r=r-r%1;
    var g=Math.random()*256;
    g=g-g%1;
    var b=Math.random()*256;
    b=b-b%1; 
    return "rgb"+"("+r+", "+g+", "+b+")";
}

