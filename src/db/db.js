export let users = [
    {
        id: 1,
        email: "empresa@teste.com",
        name: "Empresa 1",
        company: "Empresa teste",
        password: "testeEmpresa",
        position: "programador",
        role: "empresa"
    },
    {
        id: 2,
        email: "aluno@teste.com",
        name: "Aluno 1",
        password: "testeAluno",
        role: "aluno"
    }
]

export let projects = [
    {
        id: 1,
        name: "Projeto 1",
        description: "Este é o Projeto 1",
        link: "https://github.com/joaolucasgomess/faminas-tech.git",
        idAluno: 1,
        table: 1
        
    },
    {
        id: 2,
        name: "Projeto 2",
        description: "Este é o Projeto 2",
        link: "https://github.com/joaolucasgomess/faminas-tech.git",
        idAluno: 1,
        table: 2
    }
]