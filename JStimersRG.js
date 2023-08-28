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

  randomGame(.3);