/* Write a function called countdown that accepts 
a number as a parameter and every 1000 milliseconds 
decrements the value and console.logs it. 
Once the value is 0 it should log “DONE!” and stop.
*/

function countDown(num) {
    let timer = setInterval(function(){
        for (let newNum = num - 1; newNum >= 0; newNum--){
            if (newNum === 0){
                clearInterval(timer);
                console.log("DONE")
                break;
            }
        console.log(newNum)
        }
    }, 1000)
  }
  
  countDown(10);