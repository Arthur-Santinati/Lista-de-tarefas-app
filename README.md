# Aplicativos de lista de Tarefas

# Contexto
Neste projeto, desenvolvemos uma lista de tarefas integrando o backend com o frontend e um banco de dados, e assim é possiível visualizar suas tarefas, adicionar, alterar o status, deletar a tarefa

## Tecnologias usadas

Criamos o front usando React, Context API e uso do estado;
Utilizamos no back o express para instanciar o servidor, o axios para requisição dos metódos e o mySql para armazenar o banco;
E no geral usamos o docker para deixar a aplicação usável em qualquer máquina;

## Para rodar o projeto na sua máquina
docker-compose up --build -d

e assim abrir o http://localhost:3000/ e a página vai estar renderizada assim que os containers estiverem prontos.