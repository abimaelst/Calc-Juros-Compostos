import React from 'react'

export default function Installments({ installments, interestRate }) {

  return (
    <div style={styles.flexRow} className='center'>
      {installments.map(({ id, installmentsMonthly, interestRateAmountMonthly, interestRateMonthly }) => {
        const colorStyle = interestRate < 0 ? styles.numberRed : styles.numberBlue
        return (
          <div style={styles.squareResults} className='card' key={id}>
            <div style={styles.number}>{id}</div>
            <div>
              <ul>
                <li>{installmentsMonthly}</li>
                <li style={colorStyle}>{interestRateAmountMonthly}</li>
                <li style={colorStyle}>{interestRateMonthly}</li>
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'white',
  },
  squareResults: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '40px',
    margin: '10px',
    width: '147px',
    fontSize: '12px',
    background: '#071a52'
  },
  number: {
    padding: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  numberRed: {
    color: '#ff304f',
  },
  numberBlue: {
    color: '#46c3db',
  }

}