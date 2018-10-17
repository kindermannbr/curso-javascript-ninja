/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 'Ricardo', true, 1, null, undefined ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
    return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction( myArray[1] ) ); //console.log(); serve para imprimir.

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var myArrayDois = [ 'num1', 'num2' ];
function myFunction2( [arr], c ) {
    return arr[c];
};

console.log( myFunction2( [myArrayDois], 0 ) );

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArrayTres = [1, 'Ricardo', true , function() {} , obj = {} ]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( myFunction( myArrayTres ) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( nome_livro ) {

    var livros = [
        {
        nome: 'Sítio do Pica Pau Amarelo',
        propriedades: {
                quantidadePaginas: 272,
                autor: 'Monteiro Lobato',
                editora: 'Globinho'
           },
        nome: 'Brás Cubas',
        propriedades: {
                quantidadePaginas: 200,
                autor: 'Machado de Assis',
                editora: 'Penguin E Companhia Das Letras' 
        },
        nome: 'Scrum',
        propriedades: {   
                quantidadePaginas: 236,
                autor: 'Sutherland',
                editora: 'Leya'
        }                       
       
    }
]

    livros.forEach(function () {
        console.log(livros);
    });

};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
