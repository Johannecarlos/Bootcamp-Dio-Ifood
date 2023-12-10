let saldoDeVitorias = 100
let nível = ''

function calcularvitoriasederrotas(vitorias, derrotas) {
  return vitorias - derrotas
}

const saldo = calcularvitoriasederrotas(saldoDeVitorias, 0)

switch (true) {
  case saldo <= 10:
    nível = 'ferro'
    break
  case saldo <= 20:
    nível = 'Bronze'
    break
  case saldo <= 50:
    nível = 'Prata'
    break
  case saldo <= 80:
    nível = 'Diamante'
    break
  case saldo <= 90:
    nível = 'Lendário'
    break
  default:
    nível = 'Imortal'
}

console.log(`O Herói de saldo ${saldoDeVitorias} está no nível ${nível}`)
