class pessoa{
    constructor(nome){
        if(this.constructor===pessoa){
            throw new error("não pode criar este objeto")
        }
        this.nome=nome;
    }
}
class Aluno extends pessoa{
   
}
const Lucas = new Aluno("Lucas")
console.log(Lucas.nome)