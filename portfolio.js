// aba do inicio

// abrindo os sites
function redes(resposta){
    switch (resposta){
        case 1:
            window.open("https://www.instagram.com/h3r1ck00/")
        case 2:
            window.open("https://github.com/NGziiin")
        case 3:
            window.open("https://www.linkedin.com/in/herick-alves-5601a2312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app")
    }
}

function rolagem(t){
    if (t == 1){
            function roladev(){
                const tela = window.scrollY;
                const final = 0;
                let limite = 1180;
                if (tela <= limite){
                    final = final + 50;
                    window.scrollTo(0, final);
                }
            }
            window.addEventListener( "scroll", roladev);
        }
        else if(t == 2){
            window.scrollBy(0, 4000)
        }
    }
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
    document.getElementById("texto").innerHTML = "BREVE";
    document.getElementById("texto").style.color = 'white';
    if (x == 1){
        alert ("EM BREVE");
    }
}