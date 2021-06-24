import React, { useState } from "react";
import Render from "react-dom";


   function dataHoje() {
        var data = new Date();
        var dia = hoje.getDate();
        var mes = (hoje.getMonth()+1);
        var ano = hoje.getFullYear();

        data = ano + '-' + mes + '-' + dia;
        return data;
    }

    function dataAmanha() {
        
        function diasNoMes(mes, ano) {
 	    var data = new Date(ano, mes, 0);
 	    return data.getDate();
		}

		var data = new Date();
        var dia = data.getDate();
        var mes = (data.getMonth()+1);
        var ano = data.getFullYear();

        hoje = ano + '-' + mes + '-' + dia;
       
        var amanha = new Date()
        var dia_amanha;
        var mes_amanha;
        var ano_amanha;
       
        if(dia == diasNoMes(mes, ano)){
          dia=1
        }
        else {
           dia = dia+1;
        }
       
        if(mes == 12){
           mes = 1;
           ano = ano+1;
        }
       
        data = ano + '-' + mes + '-' + dia;
      
       	return data;
    }



    function terceiroDia() {
        var data = new Date();
        var dia = data.getDate();
        var mes = (data.getMonth()+1);
        var ano = data.getFullYear();

        hoje = ano + '-' + mes + '-' + dia;

		for(var i = 0; i <=1; i++){
  
      		  function diasNoMes(mes, ano) {
 	  		    var data = new Date(ano, mes, 0);
 	  		    return data.getDate();
	   		  }
       
        	var amanha = new Date()
        	var dia_amanha;
        	var mes_amanha;
        	var ano_amanha;
       
        	if(dia == diasNoMes(mes, ano)){
        	  dia=1
        	}
        	else {
        	   dia = dia+1;
        	}
       
        	if(mes == 12){
        	   mes = 1;
        	   ano = ano+1;
        	}
       
        	data = ano + '-' + mes + '-' + dia;
		}
	    return data;
    }

    function quartoDia() {
       var data = new Date();
        var dia = data.getDate();
        var mes = (data.getMonth()+1);
        var ano = data.getFullYear();

        hoje = ano + '-' + mes + '-' + dia;

		for(var i = 0; i <=2; i++){
  
      		  function diasNoMes(mes, ano) {
 	  		    var data = new Date(ano, mes, 0);
 	  		    return data.getDate();
	   		  }
       
        	var amanha = new Date()
        	var dia_amanha;
        	var mes_amanha;
        	var ano_amanha;
       
        	if(dia == diasNoMes(mes, ano)){
        	  dia=1
        	}
        	else {
        	   dia = dia+1;
        	}
       
        	if(mes == 12){
        	   mes = 1;
        	   ano = ano+1;
        	}
       
        	data = ano + '-' + mes + '-' + dia;
		}
	    return data;
    }

    function quintoDia() {
        var data = new Date();
        var dia = data.getDate();
        var mes = (data.getMonth()+1);
        var ano = data.getFullYear();

        hoje = ano + '-' + mes + '-' + dia;

		for(var i = 0; i <=3; i++){
  
      		  function diasNoMes(mes, ano) {
 	  		    var data = new Date(ano, mes, 0);
 	  		    return data.getDate();
	   		  }
       
        	var amanha = new Date()
        	var dia_amanha;
        	var mes_amanha;
        	var ano_amanha;
       
        	if(dia == diasNoMes(mes, ano)){
        	  dia=1
        	}
        	else {
        	   dia = dia+1;
        	}
       
        	if(mes == 12){
        	   mes = 1;
        	   ano = ano+1;
        	}
       
        	data = ano + '-' + mes + '-' + dia;
		}
	    return data;
    }

    function sextoDia() {
        var data = new Date();
        var dia = data.getDate();
        var mes = (data.getMonth()+1);
        var ano = data.getFullYear();

        hoje = ano + '-' + mes + '-' + dia;

		for(var i = 0; i <=4; i++){
  
      		  function diasNoMes(mes, ano) {
 	  		    var data = new Date(ano, mes, 0);
 	  		    return data.getDate();
	   		  }
       
        	var amanha = new Date()
        	var dia_amanha;
        	var mes_amanha;
        	var ano_amanha;
       
        	if(dia == diasNoMes(mes, ano)){
        	  dia=1
        	}
        	else {
        	   dia = dia+1;
        	}
       
        	if(mes == 12){
        	   mes = 1;
        	   ano = ano+1;
        	}
       
        	data = ano + '-' + mes + '-' + dia;
		}
	    return data;
    }

    function setimoDia() {
        var data = new Date();
        var dia = data.getDate();
        var mes = (data.getMonth()+1);
        var ano = data.getFullYear();

        hoje = ano + '-' + mes + '-' + dia;

		for(var i = 0; i <=5; i++){
  
      		  function diasNoMes(mes, ano) {
 	  		    var data = new Date(ano, mes, 0);
 	  		    return data.getDate();
	   		  }
       
        	var amanha = new Date()
        	var dia_amanha;
        	var mes_amanha;
        	var ano_amanha;
       
        	if(dia == diasNoMes(mes, ano)){
        	  dia=1
        	}
        	else {
        	   dia = dia+1;
        	}
       
        	if(mes == 12){
        	   mes = 1;
        	   ano = ano+1;
        	}
       
        	data = ano + '-' + mes + '-' + dia;
		}
	    return data;
    }
    
