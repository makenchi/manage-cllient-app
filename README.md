# App de gerenciamento de clientes - manage-cllient-app
## Resumo
App criado para aperfeiçoar skills com React(Next). Com o tema de criar um app de gerenciamento de clientes.

## Getting Start
Para a utilização do app, certifique-se de realizar estes passos:

### Banco de dados
Verifique se a connection string para o acesso do banco de dados está correta, no arquivo _appsettings.json_
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "server=.\\sqlexpress;database=usersdb;trusted_connection=true;TrustServerCertificate=True"
  }
}
```

Após a verificação, utilize o comando EF para executar as migrations e construir o banco de dados
```
dotnet ef database update
```

Após essas verificações, inicie a API _ManageClientAPI_

### Aplicação web
Verifique se os pacotes que são utilizados pela web estão instalados, utilizando o comando _npm install_
```
npm install
```

Após isto, utilize o comando _npm run dev_ para subir a aplicação web
```
npm run dev
```

Se todos os passos forem executados com sucesso, a aplicação web deve estar acessível no endereço localhost:3000