const formatter = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
function formatNumber(value) {
  return formatter.format(value)
}

const formatterPercent = Intl.NumberFormat('pt-BR', {
  style: 'percent', minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
function formatPercent(value) {
  return formatterPercent.format(value)
}

export { formatNumber, formatPercent }