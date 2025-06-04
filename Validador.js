/**
 * Valida um número de cartão de crédito usando o algoritmo de Luhn.
 */
function validarLuhn(numeroCartao) {
    let soma = 0;
    let alternar = false;
    numeroCartao = numeroCartao.replace(/\s/g, "");

    for (let i = numeroCartao.length - 1; i >= 0; i--) {
        let digito = parseInt(numeroCartao.charAt(i), 10);
        if (alternar) {
            digito *= 2;
            if (digito > 9) digito -= 9;
        }
        soma += digito;
        alternar = !alternar;
    }

    return soma % 10 === 0;
}

/**
 * Identifica a bandeira do cartão de crédito com base em expressões regulares.
 */
function identificarBandeira(numeroCartao) {
    numeroCartao = numeroCartao.replace(/\s/g, "");

    const bandeiras = {
        "Visa": /^4[0-9]{12}(?:[0-9]{3})?$/,
        "MasterCard": /^5[1-5][0-9]{14}$/,
        "American Express": /^3[47][0-9]{13}$/,
        "Diners Club": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        "Discover": /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        "JCB": /^(?:2131|1800|35\d{3})\d{11}$/,
        "Enroute": /^(2014|2149)\d{11}$/,
        "Voyager": /^8699\d{11}$/,
        "Hipercard": /^(606282|3841(?:[0-9]{4}))\d{10}$/,
        "Aura": /^50\d{14}$/,
        "Elo": /^(4011(78|79)|431274|438935|451416|457393|4576(31|32)|504175|506(699|7[0-9]{2}|8[0-9]{2}|9[0-9]{2})|509[0-9]{3}|627780|636297|636368|650[4-5][0-9]{2}|6507[0-9]{2}|6509[0-9]{2}|6516[0-9]{2}|6550[0-9]{2})\d{10,12}$/,
        "Cabal": /^6042[0-9]{12}$/,
        "Naranja": /^589562[0-9]{10}$/,
        "UnionPay": /^(62[0-9]{14,17})$/
    };

    for (let bandeira in bandeiras) {
        if (bandeiras[bandeira].test(numeroCartao)) {
            return bandeira;
        }
    }

    return "Bandeira não reconhecida";
}

/**
 * Inicia o processo de validação interativa com o usuário.
 */
function iniciarValidacao() {
    while (true) {
        let numeroCartao = prompt("Validador de Cartões v1.0\n\nDigite o número do cartão de crédito ou pressione ENTER para sair:");

        if (numeroCartao === null || !numeroCartao.trim()) {
            alert("Encerrando o validador de cartões. Obrigado!");
            break;
        }

        let bandeira = identificarBandeira(numeroCartao);
        let valido = validarLuhn(numeroCartao);

        alert(`Bandeira: ${bandeira}\nNúmero válido pelo algoritmo de Luhn? ${valido ? "Sim" : "Não"}`);
    }
}

// Inicia o validador
iniciarValidacao();
