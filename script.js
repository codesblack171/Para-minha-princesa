/* =========================================
   CONTADOR DO RELACIONAMENTO
========================================= */


/*
   DATA DO INÍCIO DO NAMORO

   27 DE JULHO DE 2026
*/

const dataInicio =
    new Date("2026-07-27T00:00:00");


function atualizarContador() {

    const agora =
        new Date();

    const diferenca =
        agora - dataInicio;


    /*
       Evita números negativos
    */

    if (diferenca < 0) {

        document.getElementById("dias")
            .textContent = "0";

        document.getElementById("horas")
            .textContent = "0";

        document.getElementById("minutos")
            .textContent = "0";

        document.getElementById("segundos")
            .textContent = "0";

        return;

    }


    /*
       Converte a diferença
       para segundos
    */

    const segundosTotais =
        Math.floor(
            diferenca / 1000
        );


    /*
       Calcula os dias
    */

    const dias =
        Math.floor(
            segundosTotais / 86400
        );


    /*
       Calcula as horas
    */

    const horas =
        Math.floor(
            (segundosTotais % 86400)
            / 3600
        );


    /*
       Calcula os minutos
    */

    const minutos =
        Math.floor(
            (segundosTotais % 3600)
            / 60
        );


    /*
       Calcula os segundos
    */

    const segundos =
        segundosTotais % 60;


    /*
       Mostra os valores
    */

    document.getElementById("dias")
        .textContent = dias;

    document.getElementById("horas")
        .textContent =
        String(horas)
            .padStart(2, "0");

    document.getElementById("minutos")
        .textContent =
        String(minutos)
            .padStart(2, "0");

    document.getElementById("segundos")
        .textContent =
        String(segundos)
            .padStart(2, "0");

}


/*
   Atualiza assim que a página abre
*/

atualizarContador();


/*
   Atualiza o contador
   a cada 1 segundo
*/

setInterval(
    atualizarContador,
    1000
);



/* =========================================
   FOTO DA MÚSICA GIRANDO
========================================= */

const player =
    document.getElementById("player");

const disco =
    document.getElementById("disco");


/*
   Quando clicar em PLAY,
   a foto começa a girar.
*/

player.addEventListener(
    "play",
    function () {

        disco.style.animation =
            "girar 3s linear infinite";

    }
);


/*
   Quando clicar em PAUSE,
   a foto para.
*/

player.addEventListener(
    "pause",
    function () {

        disco.style.animation =
            "none";

    }
);


/*
   Quando a música terminar,
   a foto para.
*/

player.addEventListener(
    "ended",
    function () {

        disco.style.animation =
            "none";

    }
);