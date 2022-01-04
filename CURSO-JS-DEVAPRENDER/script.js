/* 
AULA 0

    console.log('Leo')
    console.log('Bem vindo ao curso!')

AULA 1

    let idade = 10;
    console.log(idade)  

    • boa forma de declarar variavel camelCase primeira letra maiuscula e proximas palavras primeira letra maiscula 
    • letras diferenciam ser minusculas e maiusculas


AULA 2

let valorIngressoAdulto = 20;
valorIngressoAdulto = 30;
console.log(valorIngressoAdulto)

let pode variar os valores
const nao pode variar valores

   

AULA 3

    let nome = 'Leonardo' // string literal
    let idade = 25 // number literal
    let estaAprovado = true // boolean
    let sobrenome = undefined // undefined não precisa colocar = undefined
    let corSelecionado = null // redefinir um valor 


AULA 4

    digitei typeof idade no console e resultou em number


AULA 5

    
    let pessoa = {
        nome: 'Leo',
        idade: 25,
        estaAprovado: true,
        sobrenome: 'Aragão'
    }

    console.log(pessoa)

AULA 6

    // Arrays 

    

    // let familia = [26, 45, 50, 17]
    let familia = [true, 45, 'Leo', 17]
    // console.log(familia) // vê toda array
    // console.log(familia[0]) // vê somente um determinado elemento da array

    console.log(familia.length) // vê o tamanho da array

AULA 7

    // verbo (ação) + substantivo (o que ela faz)

// EXEMPLO 1

    let corSite = 'azul'

    function resetaCor(){
        corSite = ''
    }

    console.log(corSite)

    resetaCor(); // chamou a funcao
    console.log(corSite) // a partir daqui ja foi executada funcao


// EXEMPLO 2

    let corSite = 'azul'

    function resetaCor(cor) {
        corSite = cor
    }

    console.log(corSite)
    resetaCor('vermelho')
    console.log(corSite)

// EXEMPLO 3

   

    let corSite = 'azul'

    function resetaCor(cor, tonalidade) {
        corSite = cor + ' ' + tonalidade
    }

    console.log(corSite)
    resetaCor('vermelho','claro')
    console.log(corSite)


AULA 8



    // realiza uma tarefa e não devolve nada, exemplo:
    function dizerNome() {
        console.log('Leo')
    }

    dizerNome()

    // realiza a tarefa e retorna algo
    function mutiplicarPorDois(valor) {
        return valor*2
    }

    //console.log(mutiplicarPorDois(5))

    let resultado = mutiplicarPorDois(5)
    console.log(resultado)


AULA 9



// AULA 9.1


    // operadores aritméticos(matemáticos)
    // + - * / **
    let salario = 100;
    console.log(salario + salario)
    console.log(salario - salario)
    console.log(salario * salario)
    console.log(salario / salario)
    console.log(5 ** 5)


    // ++ (implementa) -- (decrementa)
    let idade = 18;
    // console.log(idade++) // exibe so depois o valor
    // console.log(idade) // exibe valor anterior
    console.log(++idade) // exibe logo o valor



// AULA 9.2
    // operadores atribuição
    // += -= *= /= **=

    let valorTecladoGamer = 100
    // valorTecladoGamer = valorTecladoGamer + valorTecladoGamer
    valorTecladoGamer += valorTecladoGamer
    console.log(valorTecladoGamer)

// AULA 9.3  
    // operadores de comparação
    // === !==
    // igualdade escrita, ou seja, tipo e valor

    console.log(1 === 1) // true
    console.log('1' === 1) // false

    // igualdade solta
    console.log(1 == 1) // true
    console.log('1' == 1) // true



// AULA 9.4
    // operadores ternários
    // tem um cliente se tiver mais que 100 pontos é um cliente tipo premium, caso contrario é do tipo comum

    let pontos = 100
    // variavel = comparacao ? verdadeiro : falso
    let tipo = pontos > 100 ? 'premium' : 'comum';
    console.log(tipo)

   

// AULA 9.5
    // operadores lógicos
    // and && or || not !

    // &&
    // retorna true somente se os dois forem true
    // console.log(true && false)

    let maiorDeIdade = false
    let possuiCarteiradeTrabalho = true
    let podeAplicar = maiorDeIdade && possuiCarteiradeTrabalho

    console.log(podeAplicar)
 
    // ||
    // retorna true se um dos dois forem true

    let maiorDeIdade = false
    let possuiCarteiradeTrabalho = true
    let podeAplicar = maiorDeIdade || possuiCarteiradeTrabalho

    console.log(podeAplicar)

    // !
    // negacao
    let maiorDeIdade = false
    let possuiCarteiradeTrabalho = false
    let podeAplicar = maiorDeIdade || possuiCarteiradeTrabalho

    console.log('pode aplicar: ', podeAplicar)

    let candidatoRecusado = !podeAplicar
    console.log('candidato recusado: ', candidatoRecusado)
 
// AULA 9.6
    // operadores bitwise
    // Falsy false Truthy true

    // Falsy
        // undefined
        // null
        // 0
        // false 
        // ''
        // NaN not a number

    // Truthy
        // o que não for Falsy

    let corPersonalizada = 'vermelho'
    let corPadrao = 'azul'
    let corPerfil = corPersonalizada || corPadrao

    console.log(corPerfil)

// EXERCÍCIO 1

    let a = 'vermelho'
    let b = 'azul'

    let c = a;
    a = b;
    b = c;


    console.log(a)
    console.log(b)


// AULA 10

    // condicionais
    // if else switch

    // se a hora estiver entre 06:00 até 12:00 = bom dia
    // se a hora estiver entre 12:00 ate 18:00 = boa tarde
    // caso contrário = boa noite

    // if(condicao) {
        //codigo a ser executado
    // } else if(outraCondicao) {
        //codigo a ser executado
    // } else {
        // codigo a ser executado caso contrario
    // } 

    let hora = 22;

    if(hora > 6 && hora < 12) {
        console.log('bom dia')
    } else if(hora > 12 && hora < 18) {
        console.log('boa tarde')
    } else {
        console.log('boa noite')
    }

  
    // switch(variavel) {
        //     case ''
        //    break
        // }
    
    let permissao; // comum, gerente, diretor
    permissao = 'gerente'

    switch(permissao) {
        case 'comum':
            console.log('usuario comum')
            break

        case 'gerente':
            console.log('usuario gerente')
            break

        case 'diretor':
            console.log('usuario diretor')
            break

        default:
            console.log('usuario nao reconhecido')
    
    }


// AULA 11
    // loops
    // for
    // while
    // do while
    // for in
    // for or

    // modo errado
    // console.log('estou aprendendo')
    // console.log('estou aprendendo')
    // console.log('estou aprendendo')
    // console.log('estou aprendendo')
    // console.log('estou aprendendo')

    //modo certo com algum loops
    // for(let i = 1 ; i <= 5; i++) {
    //    console.log('estou aprendendo', i)
    // }

    // FOR

        for(let i = 1 ; i <= 5; i++) {
            if(i % 2 !== 0){
                console.log(i)
            }
        }

        for(let i = 5 ; i >= 1; i--) {
            if(i % 2 !== 0){
                console.log(i)
            }
        }
 

    // WHILE
        
        let i = 5

        while(i >= 1) {
            if(i % 2 !== 0){
                console.log(i)
            }
            i--
        }

    

    // DO WHILE
        let i = 0;

            do {
                console.log('digitando', i)
                i++
            } while (i < 10)

            

    // FOR-IN
        const pessoa = {
            //key: value
            nome: 'Leonardo',
            idade: 25
        }

        // key-value (chave e valor)
        for(let chave in pessoa) {
            //console.log(chave, pessoa.nome)
            //console.log(chave, pessoa['nome'])
            console.log(chave, pessoa)
        }

        const cores = ['vermelho', 'azul', 'verde']

        for(let indice in cores) {
            console.log(indice, cores[indice])
        }

       

    // FOR-OF
        const cores = ['vermelho', 'azul', 'verde']

        for(let cor of cores) {
            console.log(cor)
        }

 

        let valorMaior = max(9, 1)
        console.log(valorMaior)

        function max(numero1, numero2) {
            // if(numero1 > numero2)
            //   return numero1

            return numero1 > numero2 ? numero1 : numero2
        }
             
// AULA 12
    
    // FIZZBUZZ
    // divisivel por 3 => fizz
    // divisivel por 5 => buzz
    // divisivel por 3 e 5 => fizzbuzz
    // nao divisivel por 3 ou 5 => proprionumero
    // não é um numero => 'não é um número'

    const resultado = fizzBuzz(11)
    console.log(resultado)

    function fizzBuzz(entrada) {
        if(typeof entrada !== 'number')
            return 'não é um número'
        if((entrada % 3 === 0) && (entrada % 5 === 0))
            return 'FizzBuzz'
        if(entrada % 3 === 0)
            return 'Fizz'
        if(entrada % 5 === 0)
            return 'Buzz'
        
        return entrada
    }
    
// AULA 13

    // MEDIDOR DE VELOCIDADE
    // velocidade máxima 70
    // a cada 5km acima do limite voce ganha um ponto
    // usar Math.Floor() pra arrendodar pro inteiro mais próximo
    // caso pontos maior que 12 => 'carteira suspendida'

    verificarVelocidade(130)

    function verificarVelocidade(velocidade) {
        const velocidadeMaxima = 70
        const kmPorPonto = 5
        if(velocidade <= velocidadeMaxima) 
            console.log('ok')
        else {
            const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto))
            if(pontos >= 12)
                console.log('carteira suspensa')
            else
                console.log('Pontos', pontos)
        }
    }

    
 

// AULA 14

    // receber uma quantidade de valores para avaliar
    // função exibe se cada valor é par ou ímpar

    exibirTipo(5)

    function exibirTipo(limite) {
        for(let i = 0; i <= limite; i++) {
            if(i % 2 == 0) 
                console.log(i,'PAR')
            else
                console.log(i,'IMPAR')
        }
    }

// AULA 15
    // criar um método para ler propriedades de um objeto e exibir na somente as propriedades do tipo string que estão nesse objeto

    const filme = {
        titulo: 'Vingadores',
        ano: 2018,
        diretor: 'Robin',
        personagem: 'Thor'
    }

    exibirPropriedades(filme)
    function exibirPropriedades(obj) {
        for(prop in obj)
            if(typeof obj[prop] === 'string')
                console.log(prop, obj[prop])
    }

// AULA 16

    // somar múltiplos de 3 e 5

    somar(10)
    function somar(limite) {
        let multiploDe3 = 0
        let multiploDe5 = 0

        for(i = 0; i <= limite; i++) {
            if(i % 3 === 0)
                multiploDe3 += i
            if(i % 5 === 0)
                multiploDe5 += i
        }

        console.log(multiploDe3 + multiploDe5)
    }

// AULA 17
    // média nota escolar
    // 0 - 59 F
    // 60 - 69 D
    // 70 - 79 C
    // 80 - 89 B
    // 90 - 100 A

    const array = [70, 70, 80]
    console.log(mediaDoAluno(array))

    function mediaDoAluno(notas) {
        //let soma = 0
        //for(let nota of notas) {
        //    soma += nota
        //}
        const media = calcularMedia(notas)

        if(media <= 59) return 'F'
        if(media <= 69) return 'D'
        if(media <= 79) return 'C'
        if(media <= 89) return 'B'
        return 'A'
    }

    function calcularMedia(array) {
        let soma = 0
        for(let valor of array) {
            soma += valor
        }

        return soma/(array.length)
    }

// AULA 18
    // criar funcao que exiba a quantidade de asteriscos

    exibirAsteriscos(5)

    function exibirAsteriscos(linhas) {
       //let padrao = ''
        //for(let linha = 1; linha <= linhas; linha++){
        //    padrao += '*'
        //  console.log(padrao)
        //}    
        
        for(let linha = 1; linha <= linhas; linha++) {
            let padrao = ''
            for(let i = 0; i < linha; i++) {
                padrao += '*'
            }
            console.log(padrao)
        }
    }

// AULA 19
    // criar funcao para mostrar numeros primos

    exibirNumerosPrimos(15)

    function exibirNumerosPrimos(limite) {
        for(let numero = 2; numero <= limite; numero++) {
            // function separada

            if(NumeroPrimo(numero)) console.log(numero)
        }
    }

    function NumeroPrimo(numero) {
        //let ehPrimo = true

            for(let divisor = 2; divisor < numero; divisor++) {
                if(numero % divisor === 0) {
                    return false
                }
            }

            return true
    }

// AULA 20
//    const celular = {
//        marcaCelular: 'ASUS',
//        tamanhoTela: {
//            vertical: 155,
//            horizontal: 75
//        },
//        capacidadeBateria: 5000,
//        ligar: function(){
//            console.log('Fazendo ligação...')
//        }
//    }

    function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
        //const celular = {
        return {
            //marcaCelular: marcaCelular,
            marcaCelular,
            tamanhoTela,
            capacidadeBateria,
            //ligar: function(){
            ligar() {
                console.log('Fazendo ligação...')
            }
        }
        //return celular;
    }

    const celular1 = criarCelular('Zenfone', 5.5, 5000)
    console.log(celular1)

// AULA 21
    
    // Pascal Case = UmDoisTresQuatro // primeira letra sempre maiuscula
    function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
        this.marcaCelular = marcaCelular,
        this.tamanhoTela = tamanhoTela,
        this.capacidadeBateria = capacidadeBateria,
        this.ligar = function() {
            console.log('Fazendo ligação...')
        }
    }

    const celular = new Celular('ASUS', 5.5, 5000)
    console.log(celular)

// AULA 22

    const mouse = {
        cor: 'red',
        marcar: 'dazz'
    }

    mouse.velocidade = 5000;
    mouse.trocarDPI = function() {
        console.log('mudando DPI')
    }

    delete mouse.velocidade

    console.log(mouse)

// AULA 23
    const celular = {
            marcaCelular: 'ASUS',
            tamanhoTela: {
                vertical: 155,
                horizontal: 75
            },
            capacidadeBateria: 5000,
            ligar: function(){
                console.log('Fazendo ligação...')
            }
        }         

    const novoObjeto = Object.assign({
        bateria: 5000
    }, celular)
    console.log(novoObjeto)

    const objeto2 = {...celular};
    console.log(objeto2)
   
// AULA 24
    // strings 
    // tipo primitivo
    const mensagem = 'minha primeira mensagem'
    // tipo objetov
    const outraMensagem = new String('bom dia')

// AULA 25
    // template literal
    const mensagem = 'Oi isso é a minha\n \'primeira\' mensagem'

    // Objet {}
    // Boolean true, false
    // String '', ""
    // Template ``
    const outra = `Oi isso é minha 'primeira' mensagem`

    const nome = 'Elainy'
    const email = `Olá ${nome}
    Obrigador por se inscrever no canal
    
    Para acompanhar os vídeos não se esqueça de ativar o sino de
    Obrigado,
    Leonardo`
 
// AULA 26
    // date
    
    const data1 = new Date()
    const data2 = new Date('March 06 2019 09:30')
    const data3 = new Date(2019, 02, 06, 9, 30) // mes comecar a contar de 00

    data3.setFullYear(2030)
    console.log(data3)

// AULA 27
    // exibir endereco

    let endereco = {
        rua: 'a',
        cidade: 'b',
        cep: 'c',
    }

    function exibirEndereco(endereco) {
        for(let chave in endereco)
        console.log(chave, endereco[chave])
    }

    exibirEndereco(endereco)

// AULA 28
    // igualdade de objetos

    function Endereco(rua, cidade, cep) {
        this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
    }

    const endereco1 = new Endereco('a', 'b', 'c')
    const endereco2 = new Endereco('a', 'b', 'c')

    function saoIguais(endereco1, endereco2) {
        return endereco1.rua === endereco2.rua && endereco1.cidade === endereco2.cidade && endereco1.cep === endereco2.cep
    }

    console.log(saoIguais(endereco1, endereco2))

    function temEnderecoMemorialIguais(endereco1, endereco2) {
        return endereco1 === endereco2
    }

    console.log(temEnderecoMemorialIguais(endereco1, endereco2))

// AULA 29
    // postagem de blog

    let postagem = {
        titulo: 'a',
        mensagem: 'b',
        autor: 'c',
        visualizacoes: 10,
        comentarios: [
            {autor: 'a', mensagem: 'b'},
            {autor: 'a', mensagem: 'b'}
        ],
        estaAoVivo: true
    }

    console.log(postagem)

// AULA 30
    // construct function
    // criar objeto postagem

    function Postagem(titulo, mensagem, autor) {
        this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.visualizacoes = 0,
        this.comentarios = [],
        this.estaAoVivo = false
    }

    let postagem = new Postagem('a', 'b', 'c')
    console.log(postagem)

// AULA 31
    // criar array de objetos, faixa de precos

    // opcao 1
    let faixas = [
        {tooltip: 'até R$700', minimo: 0, maximo: 700},
        {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
        {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 9999999}
    ]

    // opcao 2
    function criaFaixaPreco(tooltip, minimo, maximo) {
        return {
            tooltip,
            minimo,
            maximo
        }
    }

    let faixas2 = [
        criaFaixaPreco('a', 1, 100),
        criaFaixaPreco('b', 100, 1000),
        criaFaixaPreco('c', 1000, 10000)
    ]

    // opcao 3
    function FaixaPreco(tooltip, minimo, maximo) {
        this.tooltip = tooltip,
        this.minimo = minimo, 
        this.maximo = maximo
    }

    let faixas3 = [
        new FaixaPreco('d', 10, 20),
        new FaixaPreco('e', 20, 30),
        new FaixaPreco('f', 30, 40)
    ]

    console.log(faixas)
    console.log(faixas2)
    console.log(faixas3)

// AULA 32
    // adicionando um elemento na array 
    const numeros = [1, 2, 3]
    
    // inserir no inicio (unshift), meio (splice) e no final (push)
    numeros.unshift(0)
    console.log(numeros)
    
    numeros.splice(1, 0, 'a')
    console.log(numeros)

    numeros.push(5)
    console.log(numeros)

// AULA 33
    // encontrando elementos primitivos
    const numeros = [1, 2, 3, 1, 4]
    console.log(numeros.indexOf(3))
    // ultima ocorrencia do valor
    console.log(numeros.lastIndexOf(1))
    // se existe o valor primitivo
    console.log(numeros.includes(2))

// AULA 34
    // encontrando elementos referencia
    const marcas = [
        {id: 1, nome: 'a'},
        {id: 2, nome: 'b'}
    ]

    const marca = marcas.find(function(marca) {
        return marca.nome === 'a'
    })

    console.log(marca)

// AULA 35
    // arrow functions
    const marcas = [
        {id: 1, nome: 'a'},
        {id: 2, nome: 'b'}
    ]

    console.log(marcas.find(marca => marca.nome === 'a'))

// AULA 36
    // removendo elementos
    const numeros = [1, 2, 3, 4, 5, 6]

    numeros.unshift()
    numeros.splice()
    numeros.push()

    // remover do inicion
    const primeiro = numeros.shift()
    console.log(primeiro)
    console.log(numeros)

    // remover do meio
    const meio = numeros.splice(2, 1)
    console.log(meio)

    // remover do final
    const ultimo = numeros.pop()
    console.log(ultimo)
    console.log(numeros)

// AULA 37
    // esvaziando um array
    let numeros = [1, 2, 3, 4, 5, 6]
    let outros = numeros
    
    // solucao 1
    // numeros = []
    // console.log(outros)

    // solucao 2
    numeros.length = 0
    // console.log(numeros)
    // console.log(outros)

    // solucao 3
    // numeros.splice(0, numeros.length)
    // console.log(numeros)
    // console.log(outros)

    // solucao 4
    // while(numeros.length > 0)
    //      numeros.pop()

// AULA 38
    // combinando e cortando arrays
    const primeiro = [1, 2, 3]
    const segundo = [4, 5, 6]

    // combinar
    const combinado = primeiro.concat(segundo)
    console.log(combinado)

    // dividir
    // const cortado = combinado.slice(1, 3)
    const cortado = combinado.slice(1)
    console.log(cortado)

// AULA 39
    // operador spread
    const primeiro = [1, 2, 3]
    const segundo = [4, 5, 6]

    const combinado = [...primeiro, 'a', ...segundo, '#']
    console.log(combinado)

    const clonado = [...combinado]
    console.log(clonado)

// AULA 40
    // iterando um array
    const numeros = [1, 2, 3, 4, 5]

    // forEach
    numeros.forEach((numeros, indice) => console.log(numeros, indice))

// AULA 41
    const numeros = [1, 2, 3, 4, 5]

    const combinado = numeros.join('. ')
    console.log(combinado)

    const frase = 'Ola bem vindo ao curso'
    const resultado = frase.split(' ')
    console.log(resultado)

    console.log(resultado.join('-'))
  
// AULA 42 
    let idade = prompt('Qual sua idade?')
    if(idade > 18)
        alert('Maior de idade')
    else 
        alert('Menor de idade')
*/
// AULA 43
    








