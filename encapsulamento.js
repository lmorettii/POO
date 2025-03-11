class Aluno {
  #nota
    constructor(nome, idade, nota) {
      // O constructor deve ser um método tradicional
      this.nome = nome;
      this.idade = idade;
      this.#nota = nota;
    };

    verNota =  () => this.#nota
}
  const lucas = new Aluno("Lucas", 15, 70);
  console.log(lucas.nome);
  console.log(lucas.verNota());
