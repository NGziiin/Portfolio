// configurando botões
// botão do homer
function view1bt(homer){
    document.getElementById("texto").innerHTML = "HOMER SIMPSON";
    document.getElementById("texto").style.color = 'YELLOW';
    document.getElementById("texto").style.fontFamily = 'Simpsons';
    if (homer == 1){
        window.open("./assets/Projects/homer_simpson.html");
    }
    else if (homer == 2){
        window.open("https://github.com/NGziiin/HTML-design/blob/main/homer%20simpson.html");
    }
}
//botão do bart
function view2bt(bart){
    document.getElementById("texto").innerHTML = "BART SIMPSON";
    document.getElementById("texto").style.color = 'YELLOW';
    document.getElementById("texto").style.fontFamily = 'Simpsons';
    if (bart == 1){
        alert("PROJETO NÃO FINALIZADO");
    }
    else if(bart == 2){
        alert("PROJETO NÃO FINALIZADO");
    }
}
// tirando texto da tela
function reset(){
    document.getElementById("texto").innerHTML = "";
  }
  
// mensagem de em breve
function error(x){
    document.getElementById("texto").innerHTML = "EM BREVE";
    document.getElementById("texto").style.color = 'white';
    document.getElementById("texto").style.fontFamily = 'arial';
    if (x == 1){
        alert ("EM BREVE");
    }
}
