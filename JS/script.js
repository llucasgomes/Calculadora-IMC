
//declarar variaveis puxando pelo seu ID
const botao = document.getElementById('calculo');


// Evento ao clicar no botao, que ira chamar a funcao imc
botao.addEventListener('click',imc); 



//Funcao para fazer o calculo
function imc () {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const sexo = document.getElementById('sexo').value;
    const resultado = document.getElementById('resultado');

    if (altura == '' || peso == '' || sexo == '' ){
        alert('Favor Insira todos os Dados');
    }else {
        const IMC = (peso / (altura * altura)).toFixed(1);


        //Peso Ideal
        if ( IMC > 18.50 && IMC < 24.99 ){
            resultado.textContent = 'Peso Normal';
        
        // Abaixo do Peso
        }else if( IMC < 18.50 ){
            if (IMC < 16  ){
                resultado.textContent = 'Magreza Severa. Procure com urgencia um médico';
            }else if(IMC > 16 && IMC < 16.99 ){
                resultado.textContent = 'Magreza Moderada. Procure com um médico';
            }else if(IMC > 17 && IMC < 18.49 ){
                resultado.textContent = 'Magreza Leve. Se Alimente Mais UM pouco';
            }else{
                resultado.textContent = 'Abaixo do Peso. Se Alimente Mais UM pouco';
            }
        //Acima do Peso
        }else{
            if(IMC == 25){
                resultado.textContent = 'Excesso de peso.';
            }else if(IMC > 25 && IMC < 29.99 ){
                resultado.textContent = 'Pré-obeso';
            }else{
                if (IMC >= 30 && IMC < 34.99 ){
                    resultado.textContent = 'Obesidade Grau I';
                }else if(IMC >= 35 && IMC <=39.99){
                    resultado.textContent = 'Obesidade Grau II';
                }else{
                    resultado.textContent = 'Obesidade Grau III';
                }
            }
        }
        
        

        
    }
        
    

}

