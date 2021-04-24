var ultimoResultado=0;


function cambiarANS(numero){
	document.calc.res.value=numero;
}

function mostrarANS(){
	document.calc.res.value='Ans = '+ultimoResultado;
}


function mostrarResultado(numero){
	if(numero.search('E') != -1){
		document.calc.txt.value='Error !';
		cambiarANS('');
	}else{

		let resultado=eval(numero);
	
		if(isNaN(resultado)){
			document.calc.txt.value='Error !';
			cambiarANS('');
		}
		else if(!(isFinite(resultado))){
			document.calc.txt.value='Error !';
			cambiarANS('');
		}
		else if(document.calc.txt.value.search(Error)>(-1)){
			document.calc.txt.value='Error !';
			cambiarANS('');
		}
		else{
			document.calc.txt.value=resultado;
			cambiarANS(numero+'=');
			ultimoResultado=resultado;
		}

	}

	

}

function porcentaje(numero){
	if(numero.search('E') != -1){
		document.calc.txt.value='Error !';
		cambiarANS('');
	}else{

		let resultado=((eval(numero))/100);
		if(isNaN(resultado)){
			document.calc.txt.value='Error !';
			cambiarANS('');
		}
		else if(!(isFinite(resultado))){
			document.calc.txt.value='Error !';
			cambiarANS('');
		}
		else if(document.calc.txt.value.search(Error)>(-1)){
			document.calc.txt.value='Error !';
			cambiarANS('');
		}
		else{
			document.calc.txt.value=resultado;
			cambiarANS(numero);
			cambiarANS(numero+'% =');
			ultimoResultado=resultado;
		}

	}
}

function concatenar(numero){
	document.calc.txt.value= document.calc.txt.value + numero;
	mostrarANS();
}

function limpiar(){
	document.calc.txt.value='0';
	mostrarANS();
}

function agregarPunto(numero){
	
	let cantidadLetras=numero.length;
	let contadorPuntos=0;

	for(var indice=0;indice<cantidadLetras;indice++){
		if(numero[indice]=='.'){
			contadorPuntos++;
		}
	}

	if(contadorPuntos<1){
		document.calc.txt.value=document.calc.txt.value+'.';
	}
	else{
		document.calc.txt.value=numero;
	}
}