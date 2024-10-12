//Objetivo:

/*
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

let saldoVitorias;
let nivel;
function calculoSaldoDeVitorias(vitorias, derrotas){
    return vitorias - derrotas
};

saldoVitorias = calculoSaldoDeVitorias(289,125);

if (saldoVitorias < 10){
    nivel = "Ferro"
}else if (saldoVitorias < 20){
    nivel = "Bronze"
}else if (saldoVitorias < 50){
    nivel = "Prata"
}else if (saldoVitorias < 80){
    nivel = "Ouro"
}else if (saldoVitorias < 90){
    nivel = "Diamante"
}else if (saldoVitorias < 100){
    nivel = "Lendário"
}else{
    nivel = "Imortal"
}

console.log(`"O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`)