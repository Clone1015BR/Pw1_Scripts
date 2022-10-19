function calculaH(ca, co){
    return Math.sqrt(Math.pow(ca, 2) + Math.pow(co, 2));

}
function calculaCa(h, co){
    return Math.sqrt(Math.pow(h, 2) - (Math.pow(co, 2)));
    
}
function calculaCo(h, ca){
    return Math.sqrt(Math.pow(h, 2) - (Math.pow(ca, 2)));
    
}

function calculaPitagoras(h, ca, co){
    if(h == 0){
        return calculaH(ca, co);
    }
    else if(ca == 0){
        return calculaCa(h, co);
    }
    else{
        return calculaCo(h, ca);
    }

}
console.log("Teste 1: "+calculaPitagoras(0, 21, 20));
console.log("Teste 2: "+calculaPitagoras(13, 5, 0));
console.log("Teste 3: "+calculaPitagoras(10, 0, 6));