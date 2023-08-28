/* Write a function called randomGame that selects a random number 
between 0 and 1 every 1000 milliseconds and each time that a random number 
is picked, add 1 to a counter. If the number is greater than .75, stop the 
timer and console.log the number of tries it took before we found a number greater than .75.
*/

function randomGame() {
    let ranDum = 0;
    let count = 0;
    let timer = setInterval(function () {
        ranDum = Math.random();
        count++;
        if (ranDum > .75){
            clearInterval(timer);
            console.log("This took " + count + " times before .75");
        }
    }, 1000);
  }

  randomGame(.7);