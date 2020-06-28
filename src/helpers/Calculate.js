import { formatNumber, formatPercent } from "./FormatNumber"

function calculated(baseValue, interestRate, periodMonth) {

  const newInstallments = []
  let interestRateAmountMonthly = ''
  let installmentsMonthly = baseValue
  let interestRateMonthly = ''

  for (let i = 0; i < periodMonth; i++) {
    installmentsMonthly *= (1 + interestRate)
    interestRateAmountMonthly = (installmentsMonthly - baseValue)
    interestRateMonthly = interestRateAmountMonthly / baseValue

    let installmentsMonthlyFormated = formatNumber(installmentsMonthly)
    let interestRateAmountMonthlyFormated = formatNumber(interestRateAmountMonthly)
    let interestRateMonthlyFormated = formatPercent(interestRateMonthly)

    newInstallments.push({
      id: i + 1,
      installmentsMonthly: installmentsMonthlyFormated,
      interestRateAmountMonthly: interestRateAmountMonthlyFormated,
      interestRateMonthly: interestRateMonthlyFormated
    })

  }

  return newInstallments
}

export { calculated }

