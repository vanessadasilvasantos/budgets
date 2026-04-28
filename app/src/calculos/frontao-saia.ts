import type { ModeloCalculo } from "./tipos"

export function calcularFrontaoSaia(
  modelo: ModeloCalculo,
  comprimentoFinal: number,
  larguraFinal: number,
  valorMaterial: number,
  larguraFrontao: number,
  larguraSaia: number,
  valorMetroAcabamento: number,
) {
  let valorFrontao = 0
  let tamanhoTotalSaia = 0

  switch (`${modelo.frontao}-${modelo.saia}`) {
    case "1-3":
      valorFrontao = comprimentoFinal * larguraFrontao * valorMaterial
      tamanhoTotalSaia = larguraFinal * 2 + comprimentoFinal
      break
    case "2-2":
      valorFrontao = (comprimentoFinal + larguraFinal) * larguraFrontao * valorMaterial
      tamanhoTotalSaia = comprimentoFinal + larguraFinal
      break
    case "3-1":
      valorFrontao = (larguraFinal * 2 + comprimentoFinal) * larguraFrontao * valorMaterial
      tamanhoTotalSaia = comprimentoFinal
      break
    default:
      valorFrontao = 0
      tamanhoTotalSaia = 0
  }

  const valorSaia = tamanhoTotalSaia * larguraSaia * valorMaterial
  const valorAcabamento = tamanhoTotalSaia * valorMetroAcabamento

  return { valorFrontao, tamanhoTotalSaia, valorSaia, valorAcabamento }
}
