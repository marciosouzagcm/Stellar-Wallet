// Importando as bibliotecas necessárias
const StellarSDK = require("stellar-sdk");
const readline = require("readline");
const bip39 = require("bip39"); // Biblioteca para gerar mnemonics

// Configuração do readline para entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para criar uma nova carteira Stellar na rede principal (mainnet)
async function criarCarteira() {
  // Gera uma nova frase mnemônica
  const mnemonic = bip39.generateMnemonic();

  // Pergunta o nome completo do usuário
  rl.question("Informe seu nome completo para vincular à carteira: ", (nomeCompleto) => {
    // Gera um novo par de chaves (pública e privada)
    const pair = StellarSDK.Keypair.random();

    console.log("\nNova carteira Stellar criada com sucesso!");
    console.log("Nome completo vinculado à carteira:", nomeCompleto);
    console.log("Chave pública (para receber XLM):", pair.publicKey());
    console.log("Chave secreta (guarde em segurança):", pair.secret());
    console.log("Frase mnemônica (guarde em segurança):", mnemonic);

    rl.close();  // Encerra o readline após criar a carteira
  });
}

// Função para verificar uma carteira Stellar existente na rede principal (mainnet)
function verificarCarteira(stellarAddress) {
  // Verifica se o endereço fornecido é um endereço público válido da Stellar
  if (!StellarSDK.StrKey.isValidEd25519PublicKey(stellarAddress)) {
    console.log("Endereço público fornecido não é válido.");
    rl.close();  // Encerra a interface readline se o endereço não for válido
    return;
  }

  // Configura o servidor da Stellar para a rede principal (mainnet)
  const server = new StellarSDK.Server("https://horizon.stellar.org");

  // Tenta carregar a conta e verificar o saldo
  server.loadAccount(stellarAddress)
    .then((account) => {
      // Procura o saldo em XLM (ativo "native") entre os saldos da conta
      const balanceInfo = account.balances.find(b => b.asset_type === "native");
      const balance = balanceInfo ? balanceInfo.balance : 0;

      // Exibe as informações da conta
      console.log("\nCarteira Stellar verificada com sucesso:");
      console.log("Endereço público (Stellar Address):", stellarAddress);
      console.log("Saldo em Stellar (XLM):", balance);
    })
    .catch((error) => {
      // Trata erro se a conta não existir ou não estiver ativada
      if (error.response && error.response.status === 404) {
        console.log("Conta Stellar não encontrada ou ainda não ativada na rede.");
      } else {
        console.log("Erro ao verificar a carteira:", error.message);
      }
    })
    .finally(() => {
      rl.close();  // Encerra o readline após o processo
    });
}

// Função principal que pergunta ao usuário a operação desejada
function iniciar() {
  rl.question("Escolha uma opção:\n1 - Criar nova carteira\n2 - Verificar carteira existente\nDigite o número da opção: ", (resposta) => {
    if (resposta === '1') {
      criarCarteira();  // Chama a função para criar uma nova carteira
    } else if (resposta === '2') {
      rl.question("Informe o endereço público da carteira Stellar para verificação: ", (stellarAddress) => {
        verificarCarteira(stellarAddress);  // Chama a função de verificação com o endereço fornecido
      });
    } else {
      console.log("Opção inválida. Por favor, escolha 1 ou 2.");
      rl.close();
    }
  });
}

// Inicia o programa
iniciar();
