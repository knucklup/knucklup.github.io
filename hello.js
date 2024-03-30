let tijdstip = 40;

let wortelbuttonon = document.getElementById("knop1");
let wortelbuttonof = document.getElementById("knop2");
let weidebuttonon = document.getElementById("knop3");
let weidebuttonof = document.getElementById("knop4");
wortelbuttonon.addEventListener("change", function(){
    tijdstip+=10;
    document.getElementById("ophaaltijdstip").textContent = "Je moet geike gaan halen om: 19:"+ tijdstip;
})
wortelbuttonof.addEventListener("change", function(){
    tijdstip-=10;
    document.getElementById("ophaaltijdstip").textContent = "Je moet geike gaan halen om: 19:"+ tijdstip;
})
weidebuttonon.addEventListener("change", function(){
tijdstip+=20;
    document.getElementById("ophaaltijdstip").textContent = "Je moet geike gaan halen om: 19:"+ tijdstip;
})
weidebuttonof.addEventListener("change", function(){
    tijdstip-=20;
    document.getElementById("ophaaltijdstip").textContent = "Je moet geike gaan halen om: 19:"+ tijdstip;
})