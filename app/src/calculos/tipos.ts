export type MaterialCalculo = {
  preco: number
}

export type ModeloCalculo = {
  frontao: number
  saia: number
  cuba: boolean
}

export type CalculoEntrada = {
  material: MaterialCalculo | null
  modelo: ModeloCalculo
  comprimento: string
  largura: string
  larguraFrontao: string
  larguraSaia: string
  valorMetroAcabamento: string
  valorMaterialPersonalizado: string
  furoColagemCuba: boolean
  cubaInclusa: boolean
  quantidadeGrapas: number
  valorUnitarioGrapa: number
  valorInstalacao: string
  quantidadeFechas: number
}

export type ValoresCalculados = {
  valorBase: number
  valorFrontao: number
  tamanhoTotalSaia: number
  valorSaia: number
  valorAcabamento: number
  valorCuba: number
  valorFuroColagemCuba: number
  valorFuroColagemCookieExtra: number
  valorGrapas: number
  valorInstalacao: number
  valorFechas: number
  valorTotal: number
}
