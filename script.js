window.addEventListener('DOMContentLoaded', function() {
    let header = document.createElement('h1');
    header.className = 'header1';
    let header1 = document.getElementsByClassName('header1');
    header.className = header1;
    let h1Text = document.createTextNode('My Singing Friends');

    let div1 = document.createElement('div');
    div1.className = 'friend';
    let divOne = document.getElementsByClassName('friend').length;
    div1Class = divOne
    let h3Liz = document.createElement('h3');
    let lizText = document.createTextNode('Liz');


    let div2 = document.createElement('div');
    div2.className = 'friend';
    let divTwo = document.getElementsByClassName('friend').length;
    div2.class = divTwo
    let h3Rod = document.createElement('h3');
    let rodText = document.createTextNode('Rod');

    let div3 = document.createElement('div');
    div3.className = 'friend';
    let divThree = document.getElementsByClassName('friend').length;
    div3.class = divThree
    let h3Alan = document.createElement('h3');
    let alanText = document.createTextNode('Alan');

    let div4 = document.createElement('div');
    div4.className = 'friend';
    let divFour = document.getElementsByClassName('friend').length;
    div4.class = divFour
    let h3Fain = document.createElement('h3');
    let fainText = document.createTextNode('Fain');
    
    
    let div5 = document.createElement('div');
    div5.className = 'friend';
    let divFive = document.getElementsByClassName('friend').length;
    div5.class = divFive
    let h3Charles = document.createElement('h3');
    let charlesText = document.createTextNode('Charles');

    header.appendChild(h1Text);
    h3Liz.appendChild(lizText);
    div1.appendChild(h3Liz);
    header.appendChild(div1);
    h3Rod.appendChild(rodText);
    div2.appendChild(h3Rod);
    header.appendChild(div2);
    h3Alan.appendChild(alanText);
    div3.appendChild(h3Alan);
    header.appendChild(div3);
    h3Fain.appendChild(fainText);
    div4.appendChild(h3Fain);
    header.appendChild(div4);
    h3Charles.appendChild(charlesText);
    div5.appendChild(h3Charles);
    header.appendChild(div5);
    document.body.appendChild(header);


})




