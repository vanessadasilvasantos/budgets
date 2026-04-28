import { calcularAdicionais } from "./adicionais"
import { calcularValorBase, normalizarDimensoes } from "./base"
import { calcularFecha } from "./fecha"
import { calcularFrontaoSaia } from "./frontao-saia"
import type { CalculoEntrada, ValoresCalculados } from "./tipos"

export function calcularValoresTotais({
  material,
  modelo,
  comprimento,
  largura,
  larguraFrontao,
  larguraSaia,
  valorMetroAcabamento,
  valorMaterialPersonalizado,
  furoColagemCuba,
  cubaInclusa,
  quantidadeGrapas,
  valorUnitarioGrapa,
  valorInstalacao,
  quantidadeFechas,
}: CalculoEntrada): ValoresCalculados {
  const semValores: ValoresCalculados = {
    valorBase: 0, valorFrontao: 0, tamanhoTotalSaia: 0, valorSaia: 0,
    valorAcabamento: 0, valorCuba: 0, valorFuroColagemCuba: 0,
    valorFuroColagemCookieExtra: 0, valorGrapas: 0, valorInstalacao: 0,
    valorFechas: 0, valorTotal: 0,
  }

  if (!material || comprimento.trim() === "") return semValores

  const { comprimentoFinal, larguraFinal } = normalizarDimensoes(comprimento, largura)
  const valorMaterialParseado = parseFloat(valorMaterialPersonalizado)
  const valorMaterial = Number.isNaN(valorMaterialParseado) ? 0 : valorMaterialParseado
  const larguraFrontaoParseada = parseFloat(larguraFrontao)
  const larguraSaiaParseada = parseFloat(larguraSaia)
  const valorMetroAcabamentoParseado = parseFloat(valorMetroAcabamento)
  const valorInstalacaoParseado = parseFloat(valorInstalacao)
  const larguraFrontaoFinal = Number.isNaN(larguraFrontaoParseada) ? 0.10 : larguraFrontaoParseada
  const larguraSaiaFinal = Number.isNaN(larguraSaiaParseada) ? 0.06 : larguraSaiaParseada
  const valorMetroAcabamentoFinal = Number.isNaN(valorMetroAcabamentoParseado) ? 45 : valorMetroAcabamentoParseado
  const valorInstalacaoFinal = Number.isNaN(valorInstalacaoParseado) ? 250 : valorInstalacaoParseado

  const valorBase = calcularValorBase(valorMaterial, comprimentoFinal, larguraFinal)
  const { valorFrontao, tamanhoTotalSaia, valorSaia, valorAcabamento } = calcularFrontaoSaia(
    modelo,
    comprimentoFinal,
    larguraFinal,
    valorMaterial,
    larguraFrontaoFinal,
    larguraSaiaFinal,
    valorMetroAcabamentoFinal,
  )

  const {
    valorCuba,
    valorFuroColagemCuba,
    valorFuroColagemCookieExtra,
    valorGrapas,
    valorInstalacao: valorInstalacaoCalculado,
  } = calcularAdicionais(cubaInclusa, furoColagemCuba, quantidadeGrapas, valorUnitarioGrapa, valorInstalacaoFinal)

  const valorFechas = calcularFecha(quantidadeFechas, larguraFinal, valorMaterial)

  const valorTotal =
    valorBase +
    valorFrontao +
    valorSaia +
    valorAcabamento +
    valorCuba +
    valorFuroColagemCuba +
    valorFuroColagemCookieExtra +
    valorGrapas +
    valorInstalacaoCalculado +
    valorFechas

  return {
    valorBase,
    valorFrontao,
    tamanhoTotalSaia,
    valorSaia,
    valorAcabamento,
    valorCuba,
    valorFuroColagemCuba,
    valorFuroColagemCookieExtra,
    valorGrapas,
    valorInstalacao: valorInstalacaoCalculado,
    valorFechas,
    valorTotal,
  }
}
