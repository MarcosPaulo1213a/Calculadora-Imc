const btn = document.getElementById("btn");

function calculoImc(){
      const nome = document.getElementById("nome").value;
      const peso = document.getElementById("peso").value;
      const altura = document.getElementById("altura").value;
      const mostrarResultado = document.getElementById("mostrar_resultado"); 

      const resultado = parseFloat((peso / (altura * altura))).toFixed(1);

      
      if(nome == "" && peso == '' && altura == "") {
            mostrarResultado.innerHTML = 'coloque seu nome, peso e altura';
            
            setTimeout( _=> mostrarResultado.innerHTML = "", 2000)
      }

      else if(resultado <= 16) {
       mostrarResultado.innerHTML = `Olá ${nome} Seu Imc é <strong>${resultado}</strong> <br> Muito Abaixo do peso`
        limparCampos();
      }

      else if( resultado <= 18){
         mostrarResultado.innerHTML = `Olá ${nome} Seu Imc é <strong>${resultado}</strong> <br>  Abaixo do peso`
         limparCampos();
      }

      else if( resultado <= 24){
         mostrarResultado.innerHTML = `Olá ${nome} Seu Imc é <strong>${resultado}</strong> <br> Peso Normal`
         limparCampos();
      }

      else if( resultado <= 29){

            mostrarResultado.innerHTML = `Olá ${nome} Seu Imc é <strong>${resultado}</strong> <br> Acima do peso`
            limparCampos();
      }

      else if (resultado <= 35){

            mostrarResultado.innerHTML = `Olá ${nome} Seu Imc é <strong>${resultado}</strong> <br>  Obesidade grau 1`
            limparCampos();
      }

      else if(resultado <= 40){

            mostrarResultado.innerHTML = `Olá ${nome} Seu Imc é <strong>${resultado}</strong> <br> Obesidade grau 2`
            limparCampos();
      }

      else if(resultado > 40){

            mostrarResultado.innerHTML = `Olá ${nome} Seu Imc é <strong>${resultado}</strong> <br> Obesidade grau 3`
            limparCampos();
      }
      
      else if(altura == "" && altura =="") {
            mostrarResultado.innerHTML = "Os campos Peso E Altura está vazio !";
            setTimeout( _=> mostrarResultado.innerHTML = "", 5000)
            limparCampos();
      }

      setTimeout( _=> mostrarResultado.innerHTML = "", 9000)
};


function limparCampos(){
      
      if(! nome.value == "" || peso.value == "" || altura.value == "") {
            nome.value = "";
            peso.value = "";
            altura.value = "";
      }
};

btn.addEventListener("click", calculoImc);