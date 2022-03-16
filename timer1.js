const scheduleBeep = function(delay) {   
    delay = Number(delay);   
    if (!isNaN(delay) && delay > 0) {     
    setTimeout(beep, delay * 1000);   
    } 
}

const beep = function() {

    process.stdout.write("BEEP!\n");

} 

const numbers = process.argv.slice(2);  
for (const num of numbers) {   
    scheduleBeep(num); 
}
