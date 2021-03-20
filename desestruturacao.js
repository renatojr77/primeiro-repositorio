//DESESTRUTURANDO OBJETOS

let pessoa = {
    nome: 'Renato',
    idade: 19,
    altura: 1.85,
    profissao: 'Aprendiz',
    hobbie: 'Trompete,'
}

let {nome, profissao} = pessoa;

console.log(profissao);

//DESESTRUTURANDO ARRAYS

let listaCompras = ['pão', 'carne', 'frutas', 'leite'];

let [item1, item2, item5, item456, itemx] = listaCompras;

console.log(item5)

//EXERCICIO

let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

var [ , bariloche, , china] = destinosIncriveis

var bariloche2 = destinosIncriveis.bariloche;
var china2 = destinosIncriveis.china;

console.log(bariloche2, china2)