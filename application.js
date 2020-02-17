document.querySelector('#calculate').addEventListener("click",application);
function application()
{
const total = parseFloat(document.querySelector('#total').value);
const rate = parseFloat(document.querySelector('#rate').value);
const tip1 = total*(rate/100);
const taxpercentage = 5.50;
const tax = total*(taxpercentage/100);
const gtot1 =total+tip1+tax;

tip.textContent='Tip: $' + tip1;
gtot.textContent= '$'+gtot1;

}

