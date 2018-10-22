/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Paulistão';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ 'Corinthians', 'São Paulo', 'Santos', 'Palmeiras', 'Itú' ];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(num1, num2, num3, num4, num5){
    var posicao = [num1 , num2, num3, num4, num5 ];
    var index = 0;
    while(index < 5) {
        if(posicao[index] >  5){
            console.log('Não temos a informação do time que está nessa posição.');
        } else {
            console.log('O time que está em '+ posicao[index] +'º lugar é o '+ teams[index] +'.');
        }        
        index++;
    }
};
//reposta do professor:
function showTeamPosition( position ) {
    if( position < 1 || position > 5) {
        return 'Não temos a informação do time que está nessa posição.';
    };
    return 'O time que está em '+ position +' lugar é o '+ teams[ position -1 ] +'.'
};



/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1,2,3,4,7);
/*O time que está em 1º lugar é o Corinthians.
O time que está em 2º lugar é o São Paulo.
O time que está em 3º lugar é o Santos.
O time que está em 4º lugar é o Palmeiras.
Não temos a informação do time que está nessa posição.*/

//baseada na resposta do professor acima:
console.log( showTeamPosition( 1 ) ); //está tranzendo o Corinthians, pois conforme acima, o position está fazendo a conta -1, ou seja indice 0;
//'O time que está em 1 lugar é o Corinthians.'
 console.log( showTeamPosition( 3 ) );
//O time que está em 3 lugar é o Santos.
 console.log( showTeamPosition( 2 ) );
//O time que está em 2 lugar é o São Paulo.
 console.log( showTeamPosition( 5 ) );
//O time que está em 5 lugar é o Itú.
 console.log( showTeamPosition( 8 ) );
//Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var index = 20;
while(index < 31){ // <= 30
    console.log(index); //ou console.log( index++ ); sem o index++ em baixo.
    index++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex( color ) {
    switch( color ){
        case 'red':
            return 'O hexadecimal para a cor '+ color +' é #FF0000.';
            break; //com o return, não precisa do break
        case 'blue':
            return 'O hexadecimal para a cor '+ color +' é #0000FF.';
            break; //com o return, não precisa do break
        case 'yellow':
            return 'O hexadecimal para a cor '+ color +' é #FFFF00.';
            break; //com o return, não precisa do break
        case 'brown':
            return 'O hexadecimal para a cor '+ color +' é #A52A2A.';
            break; //com o return, não precisa do break
        case 'pink':
            return 'O hexadecimal para a cor '+ color +' é #FFC0CB.';
            break; //com o return, não precisa do break
        default:
            return 'Não temos o equivalente hexadecimal para '+ color +'.';
            
    }

};

//reposta do professor:
function convertToHex( color ) {
    var hexa;
    switch( color ){
        case 'red':
            hexa = '#FF0000';
            break;
        case 'blue':
            hexa = '#0000FF';
            break;
        case 'yellow':
            hexa = '#FFFF00';
            break;
        case 'brown':
            hexa = '#A52A2A';
            break; 
        case 'pink':
            hexa = '#FFC0CB';
            break;
        default:
            return 'Não temos o equivalente hexadecimal para '+ color +'.';
            
    }
    return 'O hexadecimal para a cor '+ color +' é '+ hexa +'.';

};

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log( convertToHex('red') );
//O hexadecimal para a cor red é #FF0000.
console.log( convertToHex('blue') );
//O hexadecimal para a cor blue é #0000FF.
console.log( convertToHex('yellow') );
//O hexadecimal para a cor yellow é #FFFF00.
console.log( convertToHex('brown') );
//O hexadecimal para a cor brown é #A52A2A.
console.log( convertToHex('pink') );
//O hexadecimal para a cor pink é #FFC0CB.
console.log( convertToHex('green') );
//Não temos o equivalente hexadecimal para green.
console.log( convertToHex('black') );
//Não temos o equivalente hexadecimal para black.
console.log( convertToHex('grey') );
//Não temos o equivalente hexadecimal para grey.