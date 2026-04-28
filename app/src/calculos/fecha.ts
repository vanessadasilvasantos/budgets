export function calcularFecha(
  quantidadeFechas: number,
  larguraFinal: number,
  valorMaterial: number,
) {
  if (quantidadeFechas === 0) return 0

  const valorUnitarioFecha =
    0.9 * larguraFinal * valorMaterial +
    0.9 * 0.06 * valorMaterial +
    0.9 * 45

  return valorUnitarioFecha * quantidadeFechas
}
