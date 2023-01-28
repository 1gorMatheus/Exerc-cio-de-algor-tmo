//1 - crie uma função que exiba uma mensagem no console

let frase =  function(){
  console.log('oi, tudo bem?' )
}
frase()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

let meuNome= function(nome){
  console.log(nome)
  
}
meuNome('Igor Matheus')
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

 meuNome= function(nome, idade, musica){
  console.log(nome, idade, musica)
  
}

meuNome('Igor Matheus', 18, 'Pop')


//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

let filmeseMusica= function(filme, musica){
  console.log(filme, musica)
}

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
let number = function(numero){
  return numero * 3
}

//6 - crie uma função que  verifique se uma  variável é true ou false
// Dica, você pode utilizar o !!
// para verificar se uma expressão
// é Truthy ou Falsy
const verdadeiroOuFalso = function(dado){
  return !!dado
}
let meunome = 'Igor'
console.log(verdadeiroOuFalso(meunome))