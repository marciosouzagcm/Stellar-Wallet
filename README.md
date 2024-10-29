# Stellar Wallet CLI

Um aplicativo de linha de comando (CLI) que permite criar e verificar carteiras Stellar na **rede principal (mainnet)**, onde é possível receber e gerenciar XLM com valor real. 

## Funcionalidades
1. **Criar Carteira Stellar**: Cria uma nova carteira na rede principal (mainnet) com chave pública e secreta, e uma frase mnemônica para backup seguro.
2. **Verificar Carteira Stellar**: Verifica o saldo de uma carteira Stellar existente ao fornecer o endereço público.

## Pré-requisitos
1. **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina. [Instale o Node.js aqui](https://nodejs.org/).
2. **Bibliotecas Node**: Este projeto utiliza `stellar-sdk` e `bip39`, que devem ser instaladas antes de executar o código.

### Instalando Dependências
Para instalar as dependências necessárias, execute o seguinte comando no terminal:


```bash
npm install stellar-sdk bip39


Como Executar

Após instalar as dependências, execute o

node nome-do-arquivo.js

Verificar um cartão
Execute o código e escolha a opção2para verificar uma
Insira o endereço público (chave pública) d
O programa exibirá o saldo em XLM da carteira fornecida, caso esteja ativado na rede Stellar.
Observações Imp
Armazene a Chave Secreta com Cuidado :
Carteira Ativa : Para
Rede Principal (Mainnet) :
Exemplo de Execução

Escolha uma opção:
1 - Criar nova carteira
2 - Verificar carteira existente
Digite o número da opção: 1

Informe seu nome completo para vincular à carteira: João Silva

Nova carteira Stellar criada com sucesso!
Nome completo vinculado à carteira: João Silva
Chave pública (para receber XLM): GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Chave secreta (guarde em segurança): SXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Frase mnemônica (guarde em segurança): example example example example example example example example example example example example
