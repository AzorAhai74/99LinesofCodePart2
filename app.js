let friends = ['Bo', 'Rod', 'Alan', 'Fain', 'Charles'];

let n = 99;



function buttonClick() {
    document.querySelector('.button');
    for (i = 0; i < friends.length; i++) { 
        for (let n = 99; n > 0; n--) {            
            let j = n - 1;
            if (n === 1) {
                console.log(+ n + ' line of code in the file,' , + n + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
            } else {
            console.log(+ n + ' lines of code in the file,', + n +  ' lines of code; ' + friends[i] + ' strikes one out,clears it all out, ' + j + ' lines of code in the file');      
            }
        }  
    }
}



