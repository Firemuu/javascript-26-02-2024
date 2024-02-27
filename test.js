function tablo(){
    tab=[];
    chiffre = 9;
    while(chiffre < 10){
        chiffre = prompt("donne un chiffre plus que 10 bb");
    }
    for(i=0; i < chiffre; i++){
        tab.push(Math.floor(Math.random()* (99) + 1));
    }
    return tab;

}

function moyenne(tab){
    longue = tab.length;
    moy = 0;
    for(i=0; i<longue;i++){
        moy = moy + tab[i];
    }
    moy = moy / longue;
    return moy;
    
}


function variance (tab,moy){
    longue = tab.length;
    somme = 0;
    for(i=0; i<longue;i++){
        somme = somme + (tab[i]-moy)**2;
    }
    somme = somme / (tab.length);
    return somme;

}

function ecartype (somme){
    ecar = 0;
    ecar = Math.sqrt(somme);
    return ecar;
}


function normalisation(tab,moy,ecar){
    tablo=[];
    longue = tab.length;
    for(i=0; i<longue;i++){
        tablo.push((tab[i]-moy)/ecar);
    }
    return tablo;
}

function multipli(tab){
    longue = tab.length;
    ch="";
    for(i=0;i<longue;i++){
        ch+= tab[i] + "\n";
    }
    alert(ch);
}

tab = tablo()

moy = moyenne(tab)

somme = variance(tab,moy)

ecar = ecartype(somme)

normal = normalisation(tab,moy,ecar);

alert("Tableau avant normalisation")
console.log(multipli(tab))
alert("Tableau après normalisation")
console.log(multipli(normal))
