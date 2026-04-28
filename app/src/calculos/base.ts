export function normalizarDimensoes(comprimento: string, largura: string) {
  const comp = comprimento.trim() === "" ? 0.0 : parseFloat(comprimento)
  const larg = largura.trim() === "" ? 0.6 : parseFloat(largura)

  return {
    comprimentoFinal: Number.isNaN(comp) ? 0.0 : comp,
    larguraFinal: Number.isNaN(larg) ? 0.6 : larg,
  }
}

export function calcularValorBase(
  valorMaterial: number,
  comprimentoFinal: number,
  larguraFinal: number,
) {
  return comprimentoFinal * larguraFinal * valorMaterial
}
