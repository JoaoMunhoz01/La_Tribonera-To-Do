import React, { useState } from "react";
import Render from "react-dom";


   function dataHoje() {
        var data = new Date();
        var dia = data.getDate();
        var mes = (data.getMonth()+1);
        var ano = data.getFullYear();

        data = ano + '-' + mes + '-' + dia;
        return data;
    }

    function dataAmanha() {
        
        function diasNoMes(mes, ano) {
 	    var dias = new Date(ano, mes, 0);
 	    return dias.getDate();
	}

		var data = new Date();
        var dia = data.getDate();
        var mes = (data.getMonth()+1);
        var ano = data.getFullYear();

        data = ano + '-' + mes + '-' + dia;
       
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
	else
	   mes = mes+1;
       
        data = ano + '-' + mes + '-' + dia;
      
       	return data;
    }



    function terceiroDia() {
        var data = new Date();
        var dia = data.getDate();
        var mes = (data.getMonth()+1);
        var ano = data.getFullYear();

        data = ano + '-' + mes + '-' + dia;
	    
	function diasNoMes(mes, ano) {
 	  		    var dias = new Date(ano, mes, 0);
 	  		    return dias.getDate();
		}

		for(var i = 0; i <=1; i++){
  
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
		else
		   mes = mes+1;
       
        	data = ano + '-' + mes + '-' + dia;
		}
	    return data;
    }

    function quartoDia() {
       var data = new Date();
        var dia = data.getDate();
        var mes = (data.getMonth()+1);
        var ano = data.getFullYear();

        data = ano + '-' + mes + '-' + dia;
	    
	    function diasNoMes(mes, ano) {
 	  		    var dias = new Date(ano, mes, 0);
 	  		    return dias.getDate();
	   	}

		for(var i = 0; i <=2; i++){
  
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
		else
		   mes = mes+1;
       
        	data = ano + '-' + mes + '-' + dia;
		}
	    return data;
    }

    function quintoDia() {
        var data = new Date();
        var dia = data.getDate();
        var mes = (data.getMonth()+1);
        var ano = data.getFullYear();

        data = ano + '-' + mes + '-' + dia;

		for(var i = 0; i <=3; i++){
  
      		  function diasNoMes(mes, ano) {
 	  		    var dias = new Date(ano, mes, 0);
 	  		    return dias.getDate();
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
		else
		   mes = mes+1;
       
        	data = ano + '-' + mes + '-' + dia;
		}
	    return data;
    }

    function sextoDia() {
        var data = new Date();
        var dia = data.getDate();
        var mes = (data.getMonth()+1);
        var ano = data.getFullYear();

        data = ano + '-' + mes + '-' + dia;

		for(var i = 0; i <=4; i++){
  
      		  function diasNoMes(mes, ano) {
 	  		    var dias = new Date(ano, mes, 0);
 	  		    return dias.getDate();
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
		else
		   mes = mes+1;
       
        	data = ano + '-' + mes + '-' + dia;
		}
	    return data;
    }

    function setimoDia() {
        var data = new Date();
        var dia = data.getDate();
        var mes = (data.getMonth()+1);
        var ano = data.getFullYear();

        data = ano + '-' + mes + '-' + dia;

		for(var i = 0; i <=5; i++){
  
      		  function diasNoMes(mes, ano) {
 	  		    var dias = new Date(ano, mes, 0);
 	  		    return dias.getDate();
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
		else
		   mes = mes+1;
       
        	data = ano + '-' + mes + '-' + dia;
		}
	    return data;
    }
    
