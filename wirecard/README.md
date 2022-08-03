# 💰 Case wirecard

<h4> Projeto desenvolvido individualmente seguindo os requesitos pedidos no desafio da wirecard, contendo endpoints de cadastro, login, registro de cartão de crédito, pagamento via boleto, pagamento via cartão crédito e vizualização de pagamentos anteriores. </h4>

<br/>

## 📌 Link do Heroku

https://documenter.getpostman.com/view/20353490/UzXVtDwN

<br/>

## 🛠 ferramentas e tecnologias

* Typescript
* Mysql
* Poo
* Uuid
* Jwt
* Bcryptjs

<br/>

## ⚙️ Funcionalidades

### Cadastro

Para fazer um cadastro é necessário passar informações de name, email, password e cpf, Contendo tratamento de erros para caso o usuário esqueça de passar alguma informação obrigatória, como, o email deve conter um "@" e ser unico, a senha deve conter no minímo 6 caracteres, e o cpf deve conter apenas 11 dígitos. A senha do usuário é automaticamente criptografada, e ao finalizar o cadastro é retornado uma mensagem de sucesso juntamente com um token de autorização, o token tem durabilidade de apenas 1h.

#

### Login

Para logar um usuário é preciso passar informações de email e password, contendo novamente tratamentos de erros para o email e senha. A verificação é feita através do email cadastrado anteriormente, ou seja, foi desenvolvido uma lógica para que seja verificado se o email existe no cadastro. E ao concluir o login é retornado uma mensage de sucesso seguido do token do usuário.

#

### Registro de cartão de crédito

Para registrar um cartão de crédito é necessário estar logado e passar as informações de number, name, expiration e cvv. A requisição contém novos tratamentos de erros como, o número do cartão deve conter apenas 16 dígitos, a data de expiração do cartão deve ser uma data futura, o cvv deve conter apenas 3 dígitos e também é criptografado. O usuário tem a possibilidade de adcionar mais de um cartão em sua conta, contanto que os cartões sejam diferentes se não forem, é retornado um erro de cartão já existente. É possível também adcionar o mesmo cartão em contas diferentes. Ao finalizar é retornado uma mensagem de sucesso.

# 

### Pagamento via boleto

Para efetuar um pagamento via boleto é preciso estar logado e passar apenas a informação de "amount" no body da requisição. É feito novamente alguns tratamentos de erros, e ao finalizar o pagamento é retornado ao usuário um "código de barras" que é gerado atráves do uuid, como o pagamento por boleto não é imediato, a situação do pagamento fica como padrão "Waiting Payment".

#

### Pagamento via cartão de crédito

Para efetuar um pagamento via cartão de crédito é necessário estar logado e passar no body da requisição as informações de amount e creditcard. Caso o usuário esqueça de passar essa informações é retornado alguns erros pedindo pra que ele preencha os campos, é preciso que o cartão de crédito passado esteja salvo na conta do usuário para que o pagamento seja aceito, caso contrário é retornado um erro de cartão incorreto. Ao finalizar o pagamento é retornado um mensagem de compra realizada.

#

### Informações de pagamentos realizados

Para ter acesso as informações de pagamento anteriores é preciso estar logado, ou seja, passar no header da requisição o token de acesso. Ao fazer a busca é retornado as informações de id do pagamento, tipo de pagamento se foi cartão ou boleto, caso seja boleto o "id_ticket" vira com o número correspondente ao "cógido de barras", ou se for pagamento via cartão de crédito virá o número do cartão. É retornado a situação de pagamento se está "Paid" ou "waiting Payment" e o id do usuário que fez o pagamento.

#

### Funcionalidade extras

* Sistema de autenticação com jwt
* Criptografia de senha com sistema de Hash
