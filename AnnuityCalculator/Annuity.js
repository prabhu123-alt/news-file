var agevalue = document.getElementById("agevalue");
var agepra = document.getElementById("agepra");
var AmountValue = document.getElementById("AmountValue");
var Amountpra = document.getElementById("Amountpra");
var ReturnRange = document.getElementById("ReturnRange");
var ReturnValue = document.getElementById("ReturnValue");
var YearRange = document.getElementById("YearRange");
var YearValue = document.getElementById("YearValue");
var yearlyAnnuity=document.getElementById("yearlyAnnuity");
var annuityfinal=document.getElementById("annuityfinal");
var yearsnumber =document.getElementById("yearsnumber");
var yearly = document.getElementById("yearly");
var imgehides=document.getElementById("imge-hides");
var imgehidess=document.getElementById("imge-hidess");
var imagehide=document.getElementById("image-hide");
var imagehide2=document.getElementById("image-hide2");
var righttwo=document.getElementById("righttwo");
var image=document.getElementById("image");


function agedata() {
    const age = parseInt(agevalue.value, 10);

    if (isNaN(age) || age < 40 || age > 80) {
        agepra.innerText = "Age criteria for calculation is between 40-80 yrs";
        agepra.style.color = "red";
        imgehides.style.display="block";
        agepra.style.display = "block";
        imagehide.style.borderColor = "red";
        imagehide.style.borderColor = "auto";
       
    } else {
        agepra.style.display = "none";
        imagehide.style.borderColor = "";
        imgehides.style.display="none";
    }
};
imgehides.addEventListener('click', function() {
    agepra.style.display = "none";
    imgehides.style.display = "none";
    agevalue.value="";
});
function amountdata() {
    const amount = parseFloat(AmountValue.value);
    if (isNaN(amount) || amount < 100000) {
        Amountpra.style.color = "red";
        Amountpra.style.display = "block";
        imgehidess.style.display="block";
        imagehide2.style.borderColor = "auto";
        imagehide2.style.borderColor = "red";
        Amountpra.innerText = "Minimum amount to invest should be ₹1,00,000";
    } else {
        Amountpra.style.display = "none";
        imagehide2.style.borderColor = "";
        imgehidess.style.display="none";
    }
};
imgehidess.addEventListener('click', function() {
    Amountpra.style.display = "none";
    imgehidess.style.display = "none";
    AmountValue .value="";
});
AmountValue.addEventListener("input", amountdata);
agevalue.addEventListener("input", agedata);

function getIndianRupees(value) {
    return `₹ ${value.toLocaleString('en-IN')}`;
}

const calculAnnutiyv = () => {
    // Parse input values with default fallback
    var amount = parseInt(AmountValue.value) || 10;
    var rateofInvest = parseInt(ReturnValue.value) || 10;
    var yearvlaus = parseInt(YearValue.value) || 10;
    var calcurate = rateofInvest / 100;
    var age = parseFloat(agevalue.value);
    var caculAnnuity = amount * (calcurate * Math.pow(1 + calcurate, yearvlaus)) / (Math.pow(1 + calcurate, yearvlaus) - 1);

    const adjustedAnnuity =caculAnnuity * (1 + age) /40;
    var age = parseFloat(agevalue.value);
    var YearRanges = parseFloat(YearRange.value);
    let newage =  YearRanges - age;

    if (isNaN(age) || isNaN(YearRanges)) {
        yearsnumber.textContent =YearRanges ;
        return;
    }
    annuityfinal.textContent = getIndianRupees((adjustedAnnuity).toFixed(0));
    yearlyAnnuity.textContent = getIndianRupees((caculAnnuity).toFixed(0));
    yearlyAnnuity.style.display = "block";
    annuityfinal.style.display = "block";
    yearly.textContent = annuityfinal.textContent;
    yearsnumber.textContent =newage; 
};
ReturnRange.addEventListener('input', calculAnnutiyv);
AmountValue.addEventListener('input', calculAnnutiyv);
YearRange.addEventListener('input', calculAnnutiyv);

var value=`${ReturnRange.value} %`;

const savings=(()=>{
    ReturnValue.value=ReturnRange;
    YearValue.value=YearRange;
   
})
ReturnRange.addEventListener('input',()=>{
    ReturnValue.value=`${ReturnRange.value} %`;
});
YearRange.addEventListener('input',()=>{
    YearValue.value=`${YearRange.value} years`;
   
});

const btn = document.getElementById("btn");

function btnclick() {
    const age = parseInt(agevalue.value, 10);
    if (agevalue.value === "") {
        agepra.innerText = "Age criteria for calculation is between 40-80 yrs";
        agepra.style.display = "block";
        agepra.style.color = "red";
        imagehide.style.borderColor = "red";
        imagehide2.style.borderColor = "red";
        agevalue.style.outlineStyle = "solid";
        
    } else {
        agepra.style.display = "none";
        agevalue.style.outlineStyle = "none";
        image.style.display = "none";
        righttwo.style.display ="block";
    }
    const amount = parseFloat(AmountValue.value);
    if (isNaN(amount) || amount < 100000) {
        Amountpra.style.color = "red";
        Amountpra.style.display = "block";
        Amountpra.style.fontSize = "13px";
        AmountValue.style.outlineStyle = "auto";
        AmountValue.style.outlineColor = "red";
        Amountpra.innerText = "Minimum amount to invest should be ₹1,00,000";
    } else {
        Amountpra.style.display = "none";
        AmountValue.style.outlineStyle = "none";
    }
}
btn.addEventListener("click", btnclick);
btn.addEventListener("input", btnclick);
