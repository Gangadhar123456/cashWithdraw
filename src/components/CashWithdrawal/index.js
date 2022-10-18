import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updatedBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.state
    const {balance} = this.state
    const name = 'Sara Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="main-container">
        <div className="container">
          <div className="row-container">
            <div className="profile">
              <h1 className="latter">S</h1>
            </div>
            <h1 className="user-name">{initial}</h1>
          </div>
          <div className="balance-container">
            <p className="text">Your balance</p>
            <p className="user-name">
              {balance} <br />
              <snap className="rupees">In Rupees</snap>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="text">CHOOSE SUM (IN RUPEES)</p>

          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
