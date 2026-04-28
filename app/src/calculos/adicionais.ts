export function calcularAdicionais(
  cubaInclusa: boolean,
  furoColagemCuba: boolean,
  quantidadeGrapas: number,
  valorUnitarioGrapa: number,
  valorInstalacao: number,
) {
  const valorCuba = cubaInclusa ? 180 : 0
  const valorFuroColagemCuba = cubaInclusa ? 60 : 0
  const valorFuroColagemCookieExtra = cubaInclusa && furoColagemCuba ? 60 : 0
  const valorGrapas = quantidadeGrapas * valorUnitarioGrapa

  return {
    valorCuba,
    valorFuroColagemCuba,
    valorFuroColagemCookieExtra,
    valorGrapas,
    valorInstalacao,
  }
}
