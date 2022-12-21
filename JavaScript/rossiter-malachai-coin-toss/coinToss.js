function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return  new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5 && attempts <= 100) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
                console.log(headsCount);
            }
        }
        if (attempts <= 100) {
            resolve(`It took ${attempts} tries to flip five "heads"`);
        } else {
            reject ("your luck is kind of impressively bad");
        }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log("while five heads is going, I have time to call yo mom a hoe");
