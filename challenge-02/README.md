# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x , y){
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somadois = soma(1 , 2) + 5;

// Qual o valor atualizado dessa variável?
> somadois
8

// Declare uma nova variável, sem valor.
var somatres = null; //minha resposta
var somatres; //resposta do professor

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionaValor(){
    somatres = 3;
    return 'O valor da variável agora é '+somatres; //o + está concatenando
}

// Invoque a função criada acima.
adicionaValor();

// Qual o retorno da função? (Use comentários de bloco).
/* 'O valor da variável agora é 3' */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function tresValores(a ,b ,c ){
    if(a === undefined || b === undefined || c === undefined){
        return 'Preencha todos os valores corretamente!';
    } else {
        return (a * b * c) + 2;
    }
}

/* Outra maneira de fazer o exercício acima é conforme abaixo sem o else. Porque no primeiro return ele já ignora o else, sendo assim caso seja um dos valores "undefined" ele já pula pro segundo return */

function tresValores(a ,b ,c ){
    if(a === undefined || b === undefined || c === undefined){
        return 'Preencha todos os valores corretamente!';
    } 
        return (a * b * c) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
 tresValores(1 , 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
tresValores(1 , 2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
 // 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function decisao(a ,b ,c){
    if(a !== undefined && b !== undefined && c !== undefined){ //todos tem valor
        return (a + b) / c;
    } else if(a === undefined && b === undefined && c === undefined){ //nenhum Tem valor
        return false;
    } else if(b !== undefined && c === undefined){ //passagem de dois números
        return a + b;
    } else if(a !== undefined ){ //passagem de um número
        return a;
    } else {
        return null; //item  6
    }
}

//Outra maneira de fazer o exercício acima:
function threeArgs(x, y, z){
	if( x !== undefined && y === undefined && z === undefined ){
		return x;
    } else if( x !== undefined && y !== undefined && z === undefined ){
		return x + y;
	} else if( x !== undefined && y !== undefined !== z !== undefined){
		return ( x + y ) / z;
	} else if(x === undefined && y === undefined && z === undefined) {
		return false;
	} else {
		return null;

	}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
> decisao() //nenhum  argumento
false

> decisao(3) //um argumento
3

> decisao(1,5) //dois argumentos
6

> decisao(1,2,5) //com todos os valores
0.6


```