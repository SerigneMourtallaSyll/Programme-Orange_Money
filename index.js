let options = document.querySelector('.row')
let solde = 250000;
let response = document.getElementById('response')
response.style.display= 'none';

options.innerHTML += `<ul class="list-unstyled">
    <li data-key="1">1-Solde de mon Compte</li>
    <li data-key="2">2-Transfert d'argent</li>
    <li data-key="3">3-Paiement de facture</li>
    <li data-key="4">4-Achat de crédit</li>
    <li data-key="5">5-Quitter</li>
</ul>
<div class="col-md-6">
    <form class="input-group">
        <input type="text" class="form-control" required id="input"/>
        <button class="btn btn-primary">Envoyer</button>
    </form>
</div>
`

function choiceOption(){
    let input = document.getElementById('input');
    let ops = [...document.querySelectorAll('ul li')]
    let tab = ops.map(element => element.dataset.key)
    document.querySelector('.input-group').addEventListener('submit', function(e){
        e.preventDefault();
        console.log(tab);
        if(input.value == tab[0] ){
            // alert(`Votre solde est de: ${solde}`)
            response.style.display = 'block'
            response.innerHTML = `Votre solde est de: ${solde} `;
            input.value = '';
        }else if(input.value == tab[1] ){
            let num = prompt('Saisir le numéro du destinataire')
            let montant = prompt('Saisir le montant à transférer')
            let newSolde = solde - parseInt(montant)
            input.value = '';
            if(num == '' || montant == ''){
                alert("Vous n'avez rien saisi")
                location.reload();
            }
            if((montant <= solde) && (num !== '' || montant !== '')){
                response.style.display = 'block';
                response.innerHTML= `Votre transfer de ${montant}FCFA à ${num} a été éffectué par \n Orange Money. Frais:0.00: \n Votre solde est de ${newSolde}FCFA \n Ref:MP230815.1544.A12440 \n Merci.OFMS`;
            }else if(montant > solde){
                return response.innerHTML = 'Votre solde est insuffisant';
            }
        }else if(input.value == tab[2]){
            let option = prompt('Choisir un type de paiement: \n 1-Liquide\n 2-Chèque\n 3-Quitter')
            if(option == "1"){
                let num = prompt('Entrer le numéro de la facture')
                let montant = prompt('Saisir le montant en entier')
                let newSolde = solde - parseInt(montant)
                input.value = '';
                if(montant <= solde && (num !== '' || montant !== '')){
                    response.style.display = 'block';
                    response.innerHTML= `Votre facture n⁰${num} a été réglé par \n Orange Money. Frais:0.00: \n Votre solde est de ${newSolde}FCFA \n Ref:MP230815.1544.A12440 \n Merci.OFMS`;
                }else if(montant > solde){
                    return response.innerHTML = 'Votre solde est insuffisant';
                }
            }else if(option =="2"){
                let num = prompt('Entrer le numéro de la facture')
                let montant = prompt('Saisir le montant de la facture en lettre')
                let newSolde = solde - parseInt(montant)
                input.value = '';
                if(montant <= solde && (num !== '' || montant !== '')){
                    response.style.display = 'block';
                    response.innerHTML= `Votre facture n⁰${num} a été réglé par \n Orange Money. Frais:0.00: \n Votre solde est de ${newSolde}FCFA \n Ref:MP230815.1544.A12440 \n Merci.OFMS`;
                }else if(montant > solde){
                    return response.innerHTML = 'Votre solde est insuffisant';
                }
            }else if(option == "3"){
                alert('Etes vous sur de vouloir quitter')
                options.innerHTML = `Merci d'avoir utiliser notre service Orange Money !`
                options.className = 'row border p-3 rounded bg-info text-light';
                window.setInterval(() => {location.reload()}, '2000')
            }else if(option == ''){
                alert("Vous n'avez rien saisi")
                location.reload();
            }
        }else if(input.value == tab[3]){
            let num = prompt('Saisir le numéro de téléphone')
            let montant = prompt('Le montant du crédit')
            let newSolde = solde - parseInt(montant)
            input.value = '';
            if(montant <= solde && (num !== '' || montant !== '')){
                response.style.display = 'block';
                response.innerHTML= `Votre opération de ${montant}FCFA vers ${num} a été réglé par \n Orange Money. \n Votre solde est de ${newSolde}FCFA. \n Merci.OFMS`;
            }else if(montant > solde){
                return response.innerHTML = 'Votre solde est insuffisant';
            }
        }else if(input.value == tab[4]){
            alert('Etes vous sur de vouloir quitter')
            // input.value = '';
            options.innerHTML = `Merci d'avoir utiliser notre service Orange Money !`
            options.className = 'row border p-3 rounded bg-info text-light';
        }
    })
    // tab.push(ops.key)
}

choiceOption();