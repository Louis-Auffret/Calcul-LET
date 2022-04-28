/* Fonction pour incrémenter les nb */
// for(let i = 0; i <=9; i++){
//     document.getElementById(`btn${i}`).value=i;
// }

/* Boutons nb */
document.getElementById('btn0').addEventListener('click', ()=> writeNb(0));
document.getElementById('btn1').addEventListener('click', ()=> writeNb(1));
document.getElementById('btn2').addEventListener('click', ()=> writeNb(2));
document.getElementById('btn3').addEventListener('click', ()=> writeNb(3));
document.getElementById('btn4').addEventListener('click', ()=> writeNb(4));
document.getElementById('btn5').addEventListener('click', ()=> writeNb(5));
document.getElementById('btn6').addEventListener('click', ()=> writeNb(6));
document.getElementById('btn7').addEventListener('click', ()=> writeNb(7));
document.getElementById('btn8').addEventListener('click', ()=> writeNb(8));
document.getElementById('btn9').addEventListener('click', ()=> writeNb(9));

/* Virgule */
document.getElementById('btnVirg').addEventListener('click', ()=> writeNb('.'));


/* Fonction qui écrit les nb dans le moniteur */
function writeNb(nb){
    if(document.getElementById('result').innerText!=''){
        if(nb!='.'){
            document.getElementById('nb1').innerText='';
            document.getElementById('champOperator').innerText='';
            document.getElementById('nb2').innerText='';
            document.getElementById('result').innerText='';
            document.getElementById('nb1').innerHTML+=nb;
        }
    }
    else{
        if(document.getElementById('champOperator').innerText==''){
            if(nb=='.' && !document.getElementById('nb1').innerText.includes('.') && document.getElementById('nb1').innerText!=''){
                document.getElementById('nb1').innerHTML+=nb;
            }
            else if(nb!='.'){
                document.getElementById('nb1').innerHTML+=nb;
            }
        }
        else{
            if(nb=='.' && !document.getElementById('nb2').innerText.includes('.') && document.getElementById('nb2').innerText!=''){
                document.getElementById('nb2').innerHTML+=nb;
            }
            else if(nb!='.'){
                document.getElementById('nb2').innerHTML+=nb;
            }            
        }
    }
}

function writeOperateur(operateur){
    if(document.getElementById('result').innerText!=''){
        document.getElementById('nb1').innerText=document.getElementById('result').innerText;
        document.getElementById('champOperator').innerText='';
        document.getElementById('nb2').innerText='';
        document.getElementById('result').innerText='';
    }
    if(document.getElementById('nb1').innerText!=''){
        document.getElementById('champOperator').innerHTML=operateur;
    }

}

// document.getElementById('btnResult').addEventListener('click', ()=>{
//     if(document.getElementById('nb2').innerText!=''){
//         if(document.getElementById('champOperator').innerText=='-'){
//             document.getElementById('result').innerText = (parseInt(document.getElementById('nb1').innerText))-(parseInt(document.getElementById('nb2').innerText));
//         }
//     }
// })

document.getElementById('btnResult').addEventListener('click', ()=>{
    if(document.getElementById('nb2').innerText!=''){
        switch(document.getElementById('champOperator').innerText){
            case '+':
                document.getElementById('result').innerText = (parseFloat(document.getElementById('nb1').innerText))+(parseFloat(document.getElementById('nb2').innerText));
                break;
            case '-':
                document.getElementById('result').innerText = (parseFloat(document.getElementById('nb1').innerText))-(parseFloat(document.getElementById('nb2').innerText));
                break;
            case '*':
                document.getElementById('result').innerText = (parseFloat(document.getElementById('nb1').innerText))*(parseFloat(document.getElementById('nb2').innerText));
                break;
            case '÷':
                document.getElementById('result').innerText = (parseFloat(document.getElementById('nb1').innerText))/(parseFloat(document.getElementById('nb2').innerText));
                break;
        }
    }
})

/* Boutons opérateurs */
document.getElementById('btnMin').addEventListener('click', ()=> writeOperateur('-'));
document.getElementById('btnAdd').addEventListener('click', ()=> writeOperateur('+'));
document.getElementById('btnMult').addEventListener('click', ()=> writeOperateur('*'));
document.getElementById('btnDiv').addEventListener('click', ()=> writeOperateur('÷'));



/* Bouton Delete */
document.getElementById('btnSupr').addEventListener('click', ()=>{
    document.getElementById('nb1').innerText='';
    document.getElementById('champOperator').innerText='';
    document.getElementById('nb2').innerText='';
    document.getElementById('result').innerText='';
})


/* Bouton Effacer */


/* Phi */
var Phi = 1.61803398875;
document.getElementById('btnPhi').addEventListener('click', ()=> writeOperateur('Φ')); /* Affichage de Phi dans champOperator */

document.getElementById('btnPhi').addEventListener('click', ()=>{
    if(document.getElementById('nb2').innerText=='' && document.getElementById('nb1')!=''){
        document.getElementById('result').innerText = parseFloat(document.getElementById('nb1').innerText*Phi);
    }
})

/* Bouton Pourcent */
document.getElementById('btnPercent').addEventListener('click', ()=> writeOperateur('%'));

document.getElementById('btnPercent').addEventListener('click', ()=>{
    if(document.getElementById('nb2').innerText=='' && document.getElementById('nb1')!=''){
        document.getElementById('result').innerText = parseFloat(document.getElementById('nb1').innerText/100);
    }
})







