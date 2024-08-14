// configurando botões
// botão do homer
function view1bt(homer){
    document.getElementById("texto").innerHTML = "HOMER SIMPSON";
    document.getElementById("texto").style.color = 'YELLOW';
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
    if (x == 1){
        alert ("EM BREVE");
    }
}

// acompanhar o mouse
document.addEventListener('mousemove', function(e) {
    const mouseanim = document.querySelector('.mouseanim');
    const sobremim = document.querySelector('.sobremim h1');
    const x = e.clientX - mouseanim.offsetWidth / 2;
    const y = e.clientY - mouseanim.offsetHeight / 2;
    mouseanim.style.transform = `translate(${x}px, ${y}px)`;
    sobremim.style.opacity = 1;
});

