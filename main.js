// displaying the output
document.getElementById('output').style.visibility = 'hidden';

// Grabbing the typed input value
let input = document.getElementById('bitcoinsInput');

// Adding an event listener
input.addEventListener('input', moneyValue);


// The function moneyValue
function moneyValue(e){
    
    console.log("Don't Forget You're the Best!");
    
    // Getting the value of the input
    let bitcoinValue = document.getElementById('bitcoinsInput').value;
    console.log(bitcoinValue);
     if(bitcoinValue === 0){
        document.getElementById('output').style.visibility = 'visible';
    }
    else{
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('dirhamsOutput').innerHTML = Math.abs(bitcoinValue) * 72174.02 + " Dhs";
        document.getElementById('kwdOutput').innerHTML = Math.abs(bitcoinValue) * 2215.60  + " د.ك";
        document.getElementById('bhdOutput').innerHTML = Math.abs(bitcoinValue) * 2675.50  + " د.ب";
        document.getElementById('omrOutput').innerHTML = Math.abs(bitcoinValue) * 5676.85 + " ر.ع";
        document.getElementById('jodOutput').innerHTML = Math.abs(bitcoinValue) * 5044.54 + " د.أ";
        document.getElementById('eurosOutput').innerHTML = Math.abs(bitcoinValue) * 6523.39 + " €";
        document.getElementById('dollarsOutput').innerHTML = Math.abs(bitcoinValue) * 7101.46 + " $";
        document.getElementById('poundsOutput').innerHTML = Math.abs(bitcoinValue) * 5676.85 + " ₤";
        document.getElementById('yenOutput').innerHTML = Math.abs(bitcoinValue) * 762744.49 + " ¥";
        document.getElementById('dzOutput').innerHTML = Math.abs(bitcoinValue) * 911491.99  + "  MDRRR PTDRRR";

    }

}