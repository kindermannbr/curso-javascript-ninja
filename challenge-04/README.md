# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
function teste(a) {
    a ? isTruthy = true : isTruthy = false;
    return isTruthy;
}
//RESPOSTA DO PROFESSOR:
var isTruthy = function(param) {
    return !!param;
};
//o !! já testa se é trusthy ou falsy

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
teste(0);
teste(-0);
teste(NaN);
teste(null);
teste(undefined);
teste('');
teste(false);
/*baseada na resposta do professor acima, basta substituir a palavra "teste" por isTruthy, ou seja isTruthy(false); */

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
teste(true);
teste(1);
teste('0');
teste([]]);
teste({});
teste(function() {});
teste(20 * 30); //testa o resultado
teste('Ricardo');
teste([1 , 2 , 3]);
teste({a:1 , b:2, c:3});
/*baseada na resposta do professor acima, basta substituir a palavra "teste" por isTruthy, ou seja isTruthy(true); */

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'Fiat',
    modelo: 'Siena',
    placa: 'ABC-1234',
    ano: 2006,
    cor: 'branca',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
function mudarCor(cor) {
    carro.cor = cor;
};
//REPOSTA DO PROFESSOR:
carro.mudarCor = function( cor ){
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
function qualCor() {
    return carro.cor;
}
//REPOSTA DO PROFESSOR:
carro.qualCor = function(){
    return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
function obterModelo() {
    return carro.modelo;
}
//REPOSTA DO PROFESSOR:
carro.obterModelo = function() {
     return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
function obterMarca() {
    return carro.marca;
}
//REPOSTA DO PROFESSOR:
carro.obterMarca = function() {
    return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
function obterMarcaModelo() {
    return 'Esse carro é um '+ obterMarca() +' '+ obterModelo();  
}
//REPOSTA DO PROFESSOR:
carro.obterMarcaModelo = function() {
    return 'Esse carro é um '+ carro.obterMarca() +' '+ carro.obterModelo();
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
function addPessoas(numPessoas){
    if(carro.quantidadePessoas === 5 ){
        return 'O carro já está lotado!';       
    } else if( (numPessoas + carro.quantidadePessoas) > 5  ) {
        var testeQtd = ( 5 - carro.quantidadePessoas );
        var pessoa = testeQtd <= 1 ? 'pessoa' : 'pessoas';
        return 'Só cabe mais '+ testeQtd +' '+ pessoa;
    } else { 
        carro.quantidadePessoas += numPessoas;
        var pessoa = carro.quantidadePessoas <= 1 ? 'pessoa' : 'pessoas';
        return 'Já temos '+ carro.quantidadePessoas +' '+ pessoa +' no carro!';
    }          
};
//REPOSTA DO PROFESSOR:
carro.adicionarPessoas = function( numeroPessoas ) {
    var totalPessoas = carro.quantidadePessoas + numeroPessoas;
    var quantaqsPessoasCabem = carro.assentos - carro.quantidadePessoas;
        var pluralOuSingular = quantaqsPessoasCabem === 1 ? 'pessoa' : 'pessoas';

    if( carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos ) { /* é necessário criar a condição depois do &&, pois caso tente diminuir a quantidade de pessoas, não entrará no primeiro IF e sim fará a conta do segundo IF retirando pessoas */
        return 'O carro está lotado!'
    }
    if( totalPessoas > carro.assentos ) {
        
        return 'Só cabem mais ' + quantaqsPessoasCabem + ' ' + pluralOuSingular + '!'; 
    }
    
    carro.quantidadePessoas += numeroPessoas; 
    return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
> carro.qualCor(); //'branca'

// Mude a cor do carro para vermelho.
carro.mudarCor( 'vermelho' );

// E agora, qual a cor do carro?
carro.qualCor(); //'vermelho'

// Mude a cor do carro para verde musgo.
 carro.mudarCor( 'verde musgo' );

// E agora, qual a cor do carro?
carro.qualCor(); //'verde musgo'

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); //'Esse carro é um Fiat Siena'

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2); //'Já temos 2 pessoas no carro!'

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4); //'Só cabem mais 3 pessoas!'

// Faça o carro encher.
carro.adicionarPessoas(3); //'Já temos 5 pessoas no carro!'

// Tire 4 pessoas do carro.
/* a resposta abaixo é baseada na resposta do professor */
carro.adicionarPessoas(-4); //'Já temos 1 pessoa no carro!'

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10); //'Só cabem mais 4 pessoas!'

// Quantas pessoas temos no carro?
carro.quantidadePessoas; //1
```
