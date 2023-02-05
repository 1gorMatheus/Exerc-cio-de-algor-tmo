// 01 - Crie um array que receba 5 itens e exiba no console.
let cidades = ['Imperatriz', 'Davinópolis', 'São Luís', 'Bacabal','Caxias']
console.log(cidades)
// 02 - Utilize um método para adicionar um nome ao inicio do array.
cidades.unshift('Santa Inês')
console.log(cidades)
// 03 - Utilize um método para remover o último nome do array.
cidades.pop()
console.log(cidades)
// 04 - Utilize um método para adicionar dois nomes ao fim do array.
cidades.push('Balsas', 'Codó')
console.log(cidades)
// 05 - Utilize um método para remover o primeiro nome do array.
cidades.shift()
console.log(cidades)

// 06 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort((a,b)=>{
  return a-b
})
console.log(numbers)

// 07 - Crie um objeto que receba ao menos três propriedades sobre você.

let eu = {
  meuNome :'Igor',
  Idade: 18,
  cidade: 'Imperatriz'
}

// 08 - Adicione uma nova propriedade sem alterar seu objeto inicial.
eu.estado = 'Maranhão'


// 09 - Remova uma propriedade desse objeto.
delete eu.idade
// 10 - Mostre no console todas as propriedades desse objeto.
console.log(eu)
// 11- Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens.
let cadastro=[{
  nome:'',
  idade:'',
  telefone:'',
  amigos: ['Marcos','Pedro','Ana','Jão'],
},{
  nome:'',
  idade:'',
  telefone:'',
  amigos:  ['Pedro','Marcos','Ana','Jão'],
},{
  nome:'',
  idade:'',
  telefone:'',
  amigos: ['Jão','Marcos','Pedro','Ana'],
},{
  nome:'',
  idade:'',
  telefone:'',
  amigos:['Ana','Jão','Marcos','Pedro']
},{
  nome:'',
  idade:'',
  telefone:'',
  amigos:['Marcela','Jão','Marcos','Pedro']
}]
console.log(cadastro[0].amigos) 
// 12 - Mostre no console o nome de um amigo de cada lista.
cadastro.forEach((itens) => {
  console.log(itens.amigos[0]);
});