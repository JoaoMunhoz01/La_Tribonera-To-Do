import React, { useState } from "react";
import Render from "react-dom";

   function dataHoje() {
        var hoje = new Date();
        var dia = hoje.getDate();
        var mes = hoje.getMonth();
        var ano = hoje.getFullYear();

        hoje = ano + '-' + mes + '-' + dia;
        return hoje;
    }

    function dataAmanha(hoje) {
        
        var dia = hoje.getDate();
        var mes = hoje.getMonth();
        var amanha = new Date();
        var dia_amanha;
        var mes_amanha;

        if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12 && dia == 31) {
            dia_amanha = 1;
        }
        else if (mes == 2 && dia == 28) {
            dia_amanha = 1;
        }
        else if (mes == 1 || mes == 4 || mes == 6 || mes == 9 || mes == 11 && dia == 30) {
            dia_amanha = 1;
        }

        if (mes == 12) {
            mes_amanha = 1;
            ano = (hoje.getFullYear + 1)
        }
        else {
            mes_amanha = mes + 1;
        }

        amanha = ano + '-' + mes_amanha + '-' + dia_amanha;
        return amanha;
    }



    function terceiroDia(amanha) {
        var terceiroDia = new Date();
        terceiroDia = dataAmanha(amanha);
        return terceiroDia;
    }

    function quartoDia(terceiro_dia) {
        var quartoDia = new Date();
        quartoDia = dataAmanha(terceiroDia);
        return quartoDia;
    }

    function quintoDia(quarto_dia) {
        var quintoDia = new Date();
        quintoDia = dataAmanha(quartoDia);
        return quintoDia;
    }

    function sextoDia(quinto_dia) {
        var sextoDia = new Date();
        sextoDia = dataAmanha(quintoDia);
        return sextoDia;
    }

    function setimoDia(sexto_dia) {
        var setimoDia = new Date();
        setimoDia = dataAmanha(sextoDia);
        return setimoDia;
    }
    
