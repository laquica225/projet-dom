
let btnPlus = document.querySelector('.boutton-plus');
let btnMoins = document.querySelector('.boutton-moins')
btnMoins.addEventListener('click', dimunuer)
btnPlus.addEventListener('click', augmenter)


let boutonPlus = document.querySelector('.btn-plus')
boutonPlus.addEventListener('click', function aujouter() {
    document.querySelector('.valeur-quantite').value=parseInt(document.querySelector('.valeur-quantite').value) +1
 subtotal2()
})

let boutonMoins = document.querySelector('.btn-moins')
boutonMoins.addEventListener('click', function reduire() {
    if(document.querySelector('.valeur-quantite').value > 0){
        document.querySelector('.valeur-quantite').value=parseInt(document.querySelector('.valeur-quantite').value)-1
        subtotal2()
    }
})

function dimunuer() {
 
if(document.querySelector('.valeurQuantite').value > 0){
    document.querySelector('.valeurQuantite').value=parseInt(document.querySelector('.valeurQuantite').value)-1
    subtotal()
}
}
function subtotal(){
    let price = parseInt(document.querySelector('.price').innerText);
    let qty = parseInt(document.querySelector('.valeurQuantite').value);
    let subt = price*qty;
    
    document.querySelector('.subtotal').innerText = subt + 'fr';
}
function subtotal2() {
    let price2 = parseInt(document.querySelector('.price2').innerText);
    let qty2 = parseInt(document.querySelector('.valeur-quantite').value);
    let subt2 = price2*qty2;

    document.querySelector('.sub-total').innerText = subt2 + 'fr';
}
function augmenter() {
    document.querySelector('.valeurQuantite').value=parseInt(document.querySelector('.valeurQuantite').value) +1
 subtotal()
}

let addButton = document.querySelector('.add-article')

addButton.addEventListener('click', AddArticle);

function AddArticle() { 
    alert(" Bravo, vous venez d'ajouté un article !")
}