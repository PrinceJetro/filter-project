let b = document.getElementById("buns")
let d = document.getElementById("doughnuts")
let e = document.getElementById("eggrolls")
let m = document.getElementById("meatpies")

norm = () =>{
    document.getElementById("head").innerText="All available Goodies";
    document.getElementById("main").innerHTML= a
}

buns =() =>{
    document.getElementById("head").innerText="Below are the available Buns";
    document.getElementById("main").innerHTML= b
}

meatpies = () =>{
    document.getElementById("head").innerText="Below are the available Meatpies";
    document.getElementById("main").innerHTML= m
    
    

}

eggrolls = () =>{
    document.getElementById("head").innerText="Below are the available Eggrolls";
    document.getElementById("main").innerHTML= e
   

}

doughnuts = () =>{
    document.getElementById("head").innerText="Below are the available Doughnuts";
    document.getElementById("main").innerHTML= d
}

a =`<img src="buns.jfif"/>,<img src="buns1.jfif">,<img src="buns2.jfif">,<img src="buns3.jfif">,
<img src="donut.jfif"/>,<img src="donut1.jfif">,<img src="donut2.jfif">,<img src="donut3.jfif">,
<img src="eggroll.jfif"/>,<img src="eggroll1.jfif">,<img src="eggroll2.jfif">,<img src="eggroll3.jfif">,
<img src="meatpie.jfif"/>,<img src="meatpie1.jfif">,<img src="meatpie2.jfif">,<img src="meatpie3.jfif">`;


b = `<img src="buns.jfif"/>,<img src="buns1.jfif">,<img src="buns2.jfif">,<img src="buns3.jfif">`;

d =`<img src="donut.jfif"/>,<img src="donut1.jfif">,<img src="donut2.jfif">,<img src="donut3.jfif">`;

e =`<img src="eggroll.jfif"/>,<img src="eggroll1.jfif">,<img src="eggroll2.jfif">,<img src="eggroll3.jfif">`;

m = `<img src="meatpie.jfif"/>,<img src="meatpie1.jfif">,<img src="meatpie2.jfif">,<img src="meatpie3.jfif">`;
