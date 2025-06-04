# Validador de Cartões de Crédito gerado por Github Copilot

Este projeto contém um **validador de cartões de crédito** implementado em **JavaScript**, que identifica a **bandeira** do cartão utilizando **expressões regulares** e valida sua autenticidade por meio do **algoritmo de Luhn**.

## Funcionalidades

1. **Validação de Cartão de Crédito**: Utiliza o algoritmo de Luhn para verificar se o número do cartão é válido.
2. **Identificação da Bandeira**: Identifica a bandeira do cartão de crédito (Visa, MasterCard, American Express, etc.) com base em expressões regulares.
3. **Validação Interativa**: Solicita ao usuário o número do cartão, identifica a bandeira e valida o número usando o algoritmo de Luhn.

## Como Usar

1. Clone o repositório para sua máquina local.
2. Abra o arquivo `validador_de_cartoes.js` em um editor de texto ou IDE de sua preferência.
3. Execute o código em um ambiente que suporte JavaScript (por exemplo, um navegador web).

- Para realizar testes e validar o funcionamento do script, recomendamos o uso de números de cartões gerados pelo site [4Devs](https://www.4devs.com.br/gerador_de_numero_cartao_credito).

## Bandeiras Suportadas

- Visa
- MasterCard
- American Express
- Diners Club
- Discover
- JCB
- Enroute
- Voyager
- Hipercard
- Aura
- Elo
- Cabal
- Naranja
- UnionPay

### Exemplo de Uso

Ao executar o código, uma janela de prompt solicitará o número do cartão de crédito. Após inserir o número, o código identificará a bandeira do cartão e verificará se o número é válido usando o algoritmo de Luhn. O resultado será exibido em uma janela de alerta.

## Informações Adicionais

Este projeto foi desenvolvido para fins educacionais e de demonstração. Não deve ser utilizado em ambientes de produção ou para validar números de cartões de crédito reais.
