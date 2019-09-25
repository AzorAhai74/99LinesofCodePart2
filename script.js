window.addEventListener(DOMContentLoaded, function() {
let friends = ['Bo', 'Rod', 'Alan', 'Fain', 'Charles'];

let n = 99;



function buttonClick() {
    document.querySelector('.button');
    let div = document.createElement('div');
    div.classname = 'friend1';
    let div1 = document.getElementsByClassName('friend');
    div.class = div1;
    let header = document.createElement('h3');
    header.className = 'h3';
    let header1 = document.getElementsByClassName('h3').length;
    header.class = header1;
    let text1 = document.createTextNode('Bo');
    let boParagraph = document.createElement('p');
    let paragraph1 = document.createTextNode(+ n + ' Lines of code in the file,' , + n + ' lines of code; ' + friends[1] + ' strikes out, clears it all out, no more lines of code in the file');
    boParagraph.appendChild(paragraph1);
    header.appendChild(boParagraph);
    header.appendChild(text1);
    div.appendChild(header);
    button.appendChild(div);
    document.body.appendChild(div);
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
})

