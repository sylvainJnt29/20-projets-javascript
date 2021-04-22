const form = document.querySelector('#quizz');
let tableauResultats = [];
const reponses = ['bonaparte','1776','395','ljubjana','4.9'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('#blocReponse h3'); // !!! // 
const noteResultat = document.querySelector('#noteReponse');
const aideResultat = document.querySelector('#texteReponse');
const toutesLesQuestions = document.querySelectorAll('#question');
let verifTableau = [];


form.addEventListener('submit',(e) => {
    e.preventDefault();
    for(i=1;i<6;i++){
        tableauResultats.push(document.querySelector(`input[name="question${i}"]:checked`).value);
    }
    verifFunc(tableauResultats);
    tableauResultats = [];
});


function verifFunc(tabResultats){
    for(let i =0; i<5; i++){
        if(tabResultats[i] === reponses[i]){
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }
    // console.log(verifTableau);
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

function afficherResultats(tabCheck){
    // filter permet de recupérer les falses
    const nbDeFautes = tabCheck.filter(el => el !== true).length;

switch(nbDeFautes) {

        case 0:
            titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`;
            aideResultat.innerText = '';
            noteResultat.innerText = '5/5';
            break;
        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`;
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
            noteResultat.innerText = '4/5';
            break;
        case 2:
            titreResultat.innerText = `✨ Encore un effort ... 👀`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '3/5';
            break;
        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '2/5';
            break;
        case 4:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '1/5';
            break;
        case 5:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '0/5';
        break;

        default:
            'Wops, cas innatendu.';

    }

}

function couleursFonction(tabValBool){
    for(let i = 0; i < tabValBool.length; i++){
        if(tabValBool[i]===true){
            toutesLesQuestions[i].style.background = "lightgreen";
        } else {
            toutesLesQuestions[i].style.background = "#ffb8b8";
            toutesLesQuestions[i].classList.add('echec');
            setTimeout(() => {
                toutesLesQuestions[i].classList.remove('echec');
            }, 500);
        }
    }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
});