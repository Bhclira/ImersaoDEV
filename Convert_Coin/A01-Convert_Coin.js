function Dolar() {
    // funçao converter clique em...
  
    var valorElemento = document.getElementById("valor");
    // pegue o elemento por Id from HTML
  
    var valor = valorElemento.value;
    // recebendo valor do elemento
  
    var valorEmDolarNumerico = parseFloat(valor);
    // recebendo valor em string e convertendo em decimal
  
    var valorEmReal = valorEmDolarNumerico * 5;
    // processamento do valor de input com a cotação do dolar a 5,00
    // na data 15/03
  
    // FUNÇÃO HTML
    var elementoValorConvertido = document.getElementById("valorConvertido");
    // pegar o elemento do HTML com a id valorConvertido > linha 12
    // jogar na variável elementoValorConvertido
    var valorConvertido = "O valor em Real é: R$ " + valorEmReal;
    // concatenando as variáveis dentro de outra
    elementoValorConvertido.innerHTML = valorConvertido;
    // jogar no HTML o conteúdo da variável valorConvertido
  }
  // FUNÇÃO BITCOIN
  function Euro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmEuroNumerico = parseFloat(valor);
  
    var valorEmEuro = parseFloat(valorEmEuroNumerico * 5.66);
    // valor do euro na data 15/03 = R$ 5.66
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em Euros é: R$ " + valorEmEuro;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function Bitcoin() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    valorEmBitcoinNumerico = parseFloat(valor);
  
    var valorEmBitcoin = parseFloat(valorEmBitcoinNumerico * 202605.51);
    // valor de uma moeda do bitcoin 15/03 = R$ 202.605,51
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em Reais é: R$ " + valorEmBitcoin;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  