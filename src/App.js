import React, { useState, useEffect } from 'react';
import InputEditable from './components/InputEditable';
import * as calculate from './helpers/Calculate'
import Installments from './components/Installments';

export default function App() {

  const [valueBase, setValueBase] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [periodMonth, setPeriodoMonth] = useState(0)
  const [installments, setInstallments] = useState([])

  useEffect(() => {
    const result = calculate.calculated(valueBase, interestRate, periodMonth)
    setInstallments(result)

  }, [valueBase, interestRate, periodMonth])

  const handleSetValueBase = (valueBase) => {
    setValueBase(valueBase)
  }

  const handleSetInterestRate = (interestRate) => {
    setInterestRate((interestRate / 100))
  }

  const handleSetPeriodoMonth = (month) => {
    setPeriodoMonth(month)
  }

  return (
    <div className='container centers'>
      <h2 className='center'>React - Juros Compostos</h2>
      <div className='row'>
        <InputEditable name={'Montante inicial'} value={handleSetValueBase} />
        <InputEditable name={'Taxa de juros mensal'} value={handleSetInterestRate} />
        <InputEditable name={'Período (meses)'} value={handleSetPeriodoMonth} />
      </div>
      <Installments installments={installments} interestRate={interestRate} />
    </div>
  )
}
