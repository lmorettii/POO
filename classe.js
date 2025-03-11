// Criando a classe Aluno
class Aluno {
    constructor(nome, idade) {
      // O constructor deve ser um método tradicional
      this.nome = nome;
      this.idade = idade;
    }
  
    estudar = () => console.log(`${this.nome} está estudando.`);
  }
  
  // Criando objetos (alunos)
  const pedro = new Aluno("Pedro", 15)
  const ana = new Aluno("Ana", 14)
  const nadja = new Aluno("Nadja", 37)
  
  
  console.log(pedro.nome); // Pedro
  pedro.estudar(); // Pedro está estudando.
   
  console.log( ana.nome, ana.idade)