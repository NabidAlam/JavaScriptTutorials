// let iAmGlobal = 'someVal'

// if(iAmGlobal){
//     let iAmLocal = 'someLocalVal'
//     iAmGlobal = 'inside the iAmGlobal'
//     console.log(iAmGlobal);
//     console.log(iAmLocal);
// }

// console.log(iAmGlobal);

//Kings Territory problem

let king = 'John';

if(true){
    let king = 'Sam'

    if(true){
        let king = 'Ram'
        console.log(king)
    }
}

if(true){
    console.log("2nd king "+king)
}