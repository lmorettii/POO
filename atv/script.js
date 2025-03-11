class Funcionario {
    #salario; // Encapsulamento (dado privado)
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.#salario = salario;
    }
    falar() {
        return `${this.nome} está trabalhando.`;
    }
    getSalario() { return `R$ ${this.#salario.toLocaleString('pt-BR')}`; } // Exibir salário formatado
}

class Medico extends Funcionario {
    falar() { return `${this.nome} diz: "Preciso verificar meus pacientes!"`; }
}

class Enfermeiro extends Funcionario {
    falar() { return `${this.nome} diz: "Vou preparar a medicação."`; }
}

class Recepcionista extends Funcionario {
    falar() { return `${this.nome} diz: "Bom dia! Como posso ajudar?"`; }
}

class Cirurgiao extends Funcionario {
    falar() { return `${this.nome} diz: "Hora de entrar na sala de cirurgia."`; }
}

class Zelador extends Funcionario {
    falar() { return `${this.nome} diz: "Preciso manter tudo limpo."`; }
}

class Tecnico extends Funcionario {
    falar() { return `${this.nome} diz: "Vou verificar os equipamentos."`; }
}

class Psicologo extends Funcionario {
    falar() { return `${this.nome} diz: "Vamos conversar sobre isso."`; }
}

// Criando instâncias dos funcionários
const funcionarios = [
    new Medico("Dr. Lucas", "Médico", 15000),
    new Enfermeiro("Laura", "Enfermeira", 7000),
    new Recepcionista("Felipe Aggio", "Recepcionista", 3000),
    new Cirurgiao("Dra. Nadja", "Cirurgiã", 20000),
    new Zelador("Comparine", "Zelador", 2500),
    new Tecnico("Hernandes", "Técnico de Radiologia", 8000),
    new Psicologo("Beatriz", "Psicóloga", 9000)
];

// Exibir na página
document.addEventListener("DOMContentLoaded", () => {
    const hospitalDiv = document.getElementById("hospital");
    funcionarios.forEach(funcionario => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3>${funcionario.nome} (${funcionario.cargo})</h3>
                          <p>${funcionario.falar()}</p>
                          <p><strong>Salário:</strong> ${funcionario.getSalario()}</p>`;
        hospitalDiv.appendChild(card);
    });
});