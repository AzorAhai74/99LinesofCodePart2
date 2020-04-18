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
    let lizPara = document.createElement('p');
    
    
    

    let div2 = document.createElement('div');
    div2.className = 'friend';
    let divTwo = document.getElementsByClassName('friend').length;
    div2.class = divTwo
    let h3Rod = document.createElement('h3');
    let rodText = document.createTextNode('Rod');
    let rodPara = document.createElement('p');
    

    let div3 = document.createElement('div');
    div3.className = 'friend';
    let divThree = document.getElementsByClassName('friend').length;
    div3.class = divThree
    let h3Alan = document.createElement('h3');
    let alanText = document.createTextNode('Alan');
    let alanPara = document.createElement('p');
    

    let div4 = document.createElement('div');
    div4.className = 'friend';
    let divFour = document.getElementsByClassName('friend').length;
    div4.class = divFour
    let h3Fain = document.createElement('h3');
    let fainText = document.createTextNode('Fain');
    let fainPara = document.createElement('p');
    
    
    let div5 = document.createElement('div');
    div5.className = 'friend';
    let divFive = document.getElementsByClassName('friend').length;
    div5.class = divFive
    let h3Charles = document.createElement('h3');
    let charlesText = document.createTextNode('Charles');
    let charlesPara = document.createElement('p');
    
    


    let btn = document.getElementsByTagName('button')[0];
    
    btn.addEventListener('click', function() {
        header.appendChild(h1Text);
        for (let n = 99; n > 0; n--) {
            let j = n - 1;
            let lizParaText = document.createTextNode(+ n + ' lines of code in the file, '  + n + ' lines of code; Liz strikes one out, clears it all out, no more lines of code in the file. ');
            let lizElseText = document.createTextNode(+ n + ' lines of code in the file, '  + n +  ' lines of code; Liz strikes one out, clears it all out, ' + j + '  lines of code in the file. ');
            if (n === 1) {
                lizPara.appendChild(lizParaText);
            } else {
                lizPara.appendChild(lizElseText);
            }
        }
        h3Liz.appendChild(lizText);
        h3Liz.appendChild(lizPara);
        div1.appendChild(h3Liz);
        header.appendChild(div1);


        for (let n = 99; n > 0; n--) {
            let j = n - 1;
            let rodParaText = document.createTextNode(+ n + ' lines of code in the file, '  + n + ' lines of code; Rod strikes one out, clears it all out, no more lines of code in the file. ');
            let rodElseText = document.createTextNode(+ n + ' lines of code in the file, '  + n +  ' lines of code; Rod strikes one out, clears it all out, ' + j + ' lines of code in the file. ');
            if (n === 1) {
                rodPara.appendChild(rodParaText);
            } else {
                rodPara.appendChild(rodElseText);
            }
        }
        h3Rod.appendChild(rodText);
        h3Rod.appendChild(rodPara);
        div2.appendChild(h3Rod);
        header.appendChild(div2);


        for (let n = 99; n > 0; n--) {
            let j = n - 1;
            let alanParaText = document.createTextNode(+ n + ' lines of code in the file, '  + n + ' lines of code; Alan strikes one out, clears it all out, no more lines of code in the file. ');
            let alanElseText = document.createTextNode(+ n + ' lines of code in the file, '  + n +  ' lines of code; Alan strikes one out, clears it all out, ' + j + ' lines of code in the file. ');
            if (n === 1) {
                alanPara.appendChild(alanParaText);
            } else {
                alanPara.appendChild(alanElseText);
            }
        }
        h3Alan.appendChild(alanText);
        h3Alan.appendChild(alanPara);
        div3.appendChild(h3Alan);
        header.appendChild(div3);


        for (let n = 99; n > 0; n--) {
            let j = n - 1;
            let fainParaText = document.createTextNode(+ n + ' lines of code in the file, '  + n + '  lines of code; Fain strikes one out, clears it all out, no more lines of code in the file. ');
            let fainElseText = document.createTextNode(+ n + ' lines of code in the file, '  + n + ' lines of code; Fain strikes one out,clears it all out, ' + j + ' lines of code in the file. ');
            if (n === 1) {
                fainPara.appendChild(fainParaText);
            } else {
                fainPara.appendChild(fainElseText);
            }
        }
        h3Fain.appendChild(fainText);
        h3Fain.appendChild(fainPara);
        div4.appendChild(h3Fain);
        header.appendChild(div4);

        for (let n = 99; n > 0; n--) {
            let j = n - 1;
            let charlesParaText = document.createTextNode(+ n + ' lines of code in the file, '  + n + ' lines of code; Charles strikes one out, clears it all out, no more lines of code in the file. ');
            let charlesElseText = document.createTextNode(+ n + ' lines of code in the file, '  + n +  ' lines of code; Charles strikes one out, clears it all out, ' + j + ' lines of code in the file. ');
            if (n === 1) {
                charlesPara.appendChild(charlesParaText);
            } else {
                charlesPara.appendChild(charlesElseText);
            }
        }
        h3Charles.appendChild(charlesText);
        h3Charles.appendChild(charlesPara);
        div5.appendChild(h3Charles);
        header.appendChild(div5);
        document.body.appendChild(header);
    });
});

    



    
    
        
        
        
                
        
        





