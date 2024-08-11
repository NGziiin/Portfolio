// configurando botões
// botão do homer
function view1bt(homer){

    if (homer == 1){
        window.open("homer_simpson.html");
    }
    else if (homer == 2){
        window.open("https://github.com/NGziiin/HTML-design/blob/main/homer%20simpson.html");
    }
}
function mousehomer(){
    document.getElementById("texto").innerHTML = "HOMER SIMPSON"
}
//botão do bart
function view2bt(bart){
    if (bart == 1){
        alert("PROJETO NÃO FINALIZADO");
    }
    else if(bart == 2){
        alert("PROJETO NÃO FINALIZADO");
    }
}
function mousebart(){
    document.getElementById("texto").innerHTML = "BART SIMPSON";
}
function reset(){
    document.getElementById("texto").innerHTML = "";
  }
  
// mensagem de em breve
function error(x){
    document.getElementById("texto").innerHTML = "EM BREVE";
    if (x == 1){
        alert ("EM BREVE");
    }
}